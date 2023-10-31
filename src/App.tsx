import { useEffect, useState } from 'react';

import { agents, agentUtilityMap, imageMap, Lineup, MapArea, Utility, type Agent } from './types';

import { useMapMap } from './hooks/useMapMap';
import type { FromAreaTitles, ToAreaTitles } from './maps/ascent/lineups';

const maps = ['Ascent', 'Bind', 'Breeze', 'Fracture', 'Haven', 'Icebox', 'Lotus', 'Pearl', 'Split', 'Sunset'];
function CustomButton({ mapName, isSelected, onClick, disabled }: { disabled?: boolean; mapName: string; isSelected: boolean; onClick: () => void }) {
	return (
		<button disabled={disabled === true ? true : false} className={`${disabled === true ? 'disabled:opacity-30 duration-300 text-white border-white hover:max-opacity-40 cursor-not-allowed' : isSelected ? 'bg-blue-500 hover:bg-blue-500 text-white border-blue-500' : ' text-white border-white'} px-4 py-2 rounded-md transition-colors duration-300 font-medium border-2`} onClick={onClick}>
			{mapName}
		</button>
	);
}

export interface BottomleftImageVideo {
	notes: [] | [string, string] | [string] | [string, string, string];
	image: string;
}

export type LineupDirection = 'destinationToStart' | 'startToDestination';
function App() {
	const [map, setMap] = useState('Ascent');
	const [agent, setAgent] = useState<Agent>('Gekko');
	const [utility, setUtility] = useState<Utility>('Mosh Pit');
	const [lineupDirection, setLineupDirection] = useState<LineupDirection>('destinationToStart');

	const [bottomleftImageVideo, setBottomleftImageVideoImages] = useState<BottomleftImageVideo[] | null>();

	const [fullscreen, setFullscreen] = useState<string>();

	const [primaryTo, setPrimaryTo] = useState<MapArea<ToAreaTitles> | null>(null);
	const [primaryFrom, setPrimaryFrom] = useState<MapArea<FromAreaTitles> | null>(null);

	const mapMap = useMapMap(newBuildTo, newBuildFrom);

	useEffect(() => {
		const lineups = mapMap[map].lineups;

		lineups.forEach((lineup: Lineup<any, any>) => {
			lineup?.imageStuff?.forEach(
				(image) =>
					new Promise((resolve) => {
						const img = new Image();

						(img as any).src = image?.image;
						img.onload = () => resolve(img);
					})
			);
		});
	}, [map, mapMap, agent, utility]);

	function getAreaOpacity(thisArea: MapArea<string>): number {
		const areaIsUsedInLineup = mapMap[map].lineups.some((lineup: Lineup<any, any>) => {
			if (lineup.agent === agent && lineup.util === utility && (lineup.fromTitle === thisArea.title || lineup.toTitle === thisArea.title)) {
				return true;
			}
			return false;
		});
		if (!areaIsUsedInLineup) return 0;

		const isPrimaryArea = primaryTo?.title === thisArea.title || primaryFrom?.title === thisArea.title;
		if (isPrimaryArea) return 1;

		const areaIsFrom = mapMap[map].areasFrom.some((area) => area.title === thisArea.title);
		const areaIsTo = mapMap[map].areasTo.some((area) => area.title === thisArea.title);

		if (areaIsTo && primaryFrom && !primaryTo && lineupDirection === 'startToDestination') {
			const usedInLineup = mapMap[map].lineups.some((lineup: Lineup<any, any>) => {
				if (primaryFrom.title === lineup.fromTitle && lineup.toTitle === thisArea.title) {
					return true;
				}
				return false;
			});
			if (usedInLineup) return 0.5;
		}

		if (areaIsFrom && primaryTo && !primaryFrom && lineupDirection === 'destinationToStart') {
			const usedInLineup = mapMap[map].lineups.some((lineup: Lineup<any, any>) => {
				if (primaryTo.title === lineup.toTitle && lineup.fromTitle === thisArea.title) {
					return true;
				}
				return false;
			});
			if (usedInLineup) return 0.5;
		}

		if (!primaryTo && !primaryFrom) {
			if (lineupDirection === 'destinationToStart' && areaIsTo) return 0.5;
			if (lineupDirection === 'startToDestination' && areaIsFrom) return 0.5;
		}
		return 0;
	}

	function doesThisAgentHaveLineupsForThisMap(agentName: string): boolean {
		return mapMap[map].lineups.some((lineup: Lineup<string, string>) => lineup.agent === agentName);
	}

	function newBuildFrom(): React.ReactNode {
		return mapMap[map].areasFrom.map((areaFrom) => {
			return (
				<>
					<image
						key={'from ' + areaFrom.title}
						className='cursor-pointer duration-1000'
						x={areaFrom.x - 6} // todo fix
						y={areaFrom.y - 6}
						width={areaFrom.width + 12}
						height={areaFrom.height + 12}
						opacity={getAreaOpacity(areaFrom)}
						pointerEvents={getAreaOpacity(areaFrom) === 0 ? 'none' : 'auto'}
						href={imageMap[agent]}
						onClick={() => {
							const alreadyActive = areaFrom.title === primaryFrom?.title;
							if (alreadyActive) {
								setPrimaryFrom(null);
								setBottomleftImageVideoImages(null);

								if (lineupDirection === 'startToDestination' && primaryFrom) setPrimaryTo(null);

								return;
							}

							setPrimaryFrom(areaFrom);

							const currentLineup = getCurrentLineup({
								newAreaFrom: areaFrom,
							});
							if (!currentLineup) return;
							setBottomleftImageVideoImages(currentLineup.imageStuff);
						}}
					></image>
				</>
			);
		});
	}

	function newBuildTo(): React.ReactNode {
		return mapMap[map].areasTo.map((areaTo) => {
			return (
				<>
					<image
						key={'to ' + areaTo.title}
						className='cursor-pointer duration-1000'
						x={areaTo.x - 10}
						y={areaTo.y - 10}
						width={areaTo.width + 20}
						height={areaTo.height + 20}
						opacity={getAreaOpacity(areaTo)}
						pointerEvents={getAreaOpacity(areaTo) === 0 ? 'none' : 'auto'}
						href={imageMap[utility]}
						onClick={() => {
							const alreadyActive = areaTo.title === primaryTo?.title;
							if (alreadyActive) {
								setPrimaryTo(null);
								setBottomleftImageVideoImages(null);

								if (lineupDirection === 'destinationToStart' && primaryTo) setPrimaryFrom(null);

								return;
							}

							setPrimaryTo(areaTo);

							const currentLineup = getCurrentLineup({ newAreaTo: areaTo });
							if (!currentLineup) return;

							setBottomleftImageVideoImages(currentLineup.imageStuff);
						}}
					></image>
				</>
			);
		});
	}

	function resetLineup() {
		setPrimaryTo(null);
		setPrimaryFrom(null);
		setBottomleftImageVideoImages(null);
	}

	function getCurrentLineup({ newAreaTo, newAreaFrom }: { newAreaTo?: MapArea<ToAreaTitles>; newAreaFrom?: MapArea<FromAreaTitles> }): Lineup<FromAreaTitles, ToAreaTitles> | null {
		const lineup = mapMap[map].lineups.find((lineup: Lineup<any, any>) => lineup.fromTitle === (newAreaFrom?.title ?? primaryFrom?.title) && lineup.toTitle === (newAreaTo?.title ?? primaryTo?.title));
		return lineup ?? null;
	}

	return (
		<div className='flex items-stretch w-screen h-screen max-w-full bg-gray-800'>
			{fullscreen && (
				<div className='w-screen h-screen absolute top-0 left-0 cursor-pointer flex' onClick={() => setFullscreen(undefined)}>
					<img src={fullscreen} className='w-full h-full p-10 absolute z-10' alt='' />
					<div className='w-full h-full bg-black opacity-80 absolute z-0'></div>
				</div>
			)}
			<div className='w-[30%] text-opacity-0 flex flex-col items-stretch'>
				{/* Maps */}
				<div className='align-middle p-auto flex justify-center w-full flex-wrap px-5'>
					{maps.map((thisMap, index, original) => (
						<div className={`${index < original.length - 1 && 'mr-3'} mt-3`}>
							<CustomButton
								mapName={thisMap}
								isSelected={thisMap === map}
								onClick={() => {
									setMap(thisMap);
									resetLineup();
								}}
							/>
						</div>
					))}
				</div>

				{/* Agents */}
				<div className='align-middle p-auto flex justify-center items-center mt-3'>
					{agents.map((agentName, index, original) => {
						return (
							<div className={`${index < original.length - 1 && 'mr-3'}`}>
								<CustomButton
									disabled={!doesThisAgentHaveLineupsForThisMap(agentName)}
									mapName={agentName}
									isSelected={agentName === agent}
									onClick={() => {
										const agentHasLineupsForThisMap = doesThisAgentHaveLineupsForThisMap(agentName);
										if (!agentHasLineupsForThisMap) return;
										setAgent(agentName);
										setUtility(agentUtilityMap[agentName][0]);
										resetLineup();
									}}
								/>
							</div>
						);
					})}
				</div>

				{/* Utilities */}
				<div className='align-middle flex justify-center mt-3'>
					{agentUtilityMap[agent].map((localUtility, index, original) => {
						return (
							<div className={`${index < original.length - 1 && 'mr-3'}`}>
								<CustomButton
									mapName={localUtility}
									isSelected={localUtility === utility}
									onClick={() => {
										setUtility(localUtility);
										resetLineup();
									}}
								/>
							</div>
						);
					})}
				</div>

				{/* Lineup Direction */}
				<div className='align-middle flex justify-center mt-3'>
					<div className=''>
						<CustomButton
							mapName={'Start -> Destination'}
							isSelected={lineupDirection === 'startToDestination'}
							onClick={() => {
								setLineupDirection('startToDestination');
								resetLineup();
							}}
						/>
					</div>
					<div className=''>
						<CustomButton
							mapName={'Destination -> Start'}
							isSelected={lineupDirection === 'destinationToStart'}
							onClick={() => {
								setLineupDirection('destinationToStart');
								resetLineup();
							}}
						/>
					</div>
				</div>

				{/* Image/video sources */}
				<div className='mt-4 flex flex-col'>
					{bottomleftImageVideo?.map((imageData, index) => (
						<>
							<img src={imageData.image} alt={`${index + 1}`} className='cursor-pointer w-9/12 mx-auto mb-1' onClick={() => setFullscreen(imageData.image)} />
							{imageData?.notes.map((note) => {
								return <div className='text-white text-center font-medium text-sm'>• {note}</div>;
							})}
							<div className='mb-4'></div>
						</>
					))}
				</div>
			</div>

			<div className='flex-1 flex items-center justify-center'>
				{/* Render the selected map */}
				{mapMap[map].svg}
			</div>
		</div>
	);
}
export default App;

// <div className="w-1/2">
// {/* Render images and/or videos */}
// {true && (
//   <div>
//     <h2 className="text-xl font-bold">Images</h2>
//     {bottomleftImageVideo?.sources.map((source, index) => (
//       <img
//         key={index}
//         src={source}
//         alt={`Image ${index + 1}`}
//         className="w-full"
//       />
//     ))}
//   </div>
// )}

// {false && (
//   <div>
//     <h2 className="text-xl font-bold">Videos</h2>
//     {bottomleftImageVideo?.sources.map((source, index) => (
//       <video key={index} controls className="w-full">
//         <source src={source} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     ))}
//   </div>
// )}
// </div>
