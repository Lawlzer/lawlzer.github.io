import * as ascentLineups from '../maps/ascent/lineups';
import Ascent from '../maps/ascent/map';
import * as bindLineups from '../maps/bind/lineups';
import Bind from '../maps/bind/map';
import * as breezeLineups from '../maps/breeze/lineups';
import Breeze from '../maps/breeze/map';

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
			svg: <Todo />,
			lineups: [],
			areasFrom: [],
			areasTo: [],
		},
		Icebox: {
			svg: <Todo />,
			lineups: [],
			areasFrom: [],
			areasTo: [],
		},
		Lotus: {
			svg: <Todo />,
			lineups: [],
			areasFrom: [],
			areasTo: [],
		},
		Pearl: {
			svg: <Todo />,
			lineups: [],
			areasFrom: [],
			areasTo: [],
		},
		Split: {
			svg: <Todo />,
			lineups: [],
			areasFrom: [],
			areasTo: [],
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
