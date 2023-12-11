import * as ascentLineups from '../maps/ascent/lineups';
import Ascent from '../maps/ascent/map';
import * as bindLineups from '../maps/bind/lineups';
import Bind from '../maps/bind/map';
import * as breezeLineups from '../maps/breeze/lineups';
import Breeze from '../maps/breeze/map';
import * as havenLineups from '../maps/haven/lineups';
import Haven from '../maps/haven/map';
import * as lotusLineups from '../maps/lotus/lineups';
import Lotus from '../maps/lotus/map';
import * as splitLineups from '../maps/split/lineups';
import Split from '../maps/split/map';

import Todo from '../maps/todo/map';
import { Lineup } from '../types';

interface AreaFrom {
	title: string;
	x: number;
	y: number;
	width: number;
	height: number;
}
interface AreaTo {
	title: string;
	x: number;
	y: number;
	width: number;
	height: number;
}

export const useMapMap = (newBuildTo: () => React.ReactNode, newBuildFrom: () => React.ReactNode) => {
	const map: {
		[key: string]: {
			svg: any;
			lineups: Lineup<string, string>[];
			areasFrom: AreaFrom[];
			areasTo: AreaTo[];
		};
	} = {
		Ascent: {
			svg: <Ascent newBuildTo={newBuildTo} newBuildFrom={newBuildFrom} />,
			...ascentLineups,
		},
		Bind: {
			svg: <Bind newBuildTo={newBuildTo} newBuildFrom={newBuildFrom} />,
			...bindLineups,
		},
		Breeze: {
			svg: <Breeze newBuildTo={newBuildTo} newBuildFrom={newBuildFrom} />,
			...breezeLineups,
		},

		Fracture: {
			svg: <Todo />,
			lineups: [],
			areasFrom: [],
			areasTo: [],
		},
		Haven: {
			svg: <Haven newBuildTo={newBuildTo} newBuildFrom={newBuildFrom} />,
			...havenLineups,
		},
		Icebox: {
			svg: <Todo />,
			lineups: [],
			areasFrom: [],
			areasTo: [],
		},
		Lotus: {
			svg: <Lotus newBuildTo={newBuildTo} newBuildFrom={newBuildFrom} />,
			...lotusLineups,
		},
		Pearl: {
			svg: <Todo />,
			lineups: [],
			areasFrom: [],
			areasTo: [],
		},
		Split: {
			svg: <Split newBuildTo={newBuildTo} newBuildFrom={newBuildFrom} />,
			...splitLineups,
		},
		Sunset: {
			svg: <Todo />,
			lineups: [],
			areasFrom: [],
			areasTo: [],
		},
	};

	return map;
};
