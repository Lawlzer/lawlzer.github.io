import { BottomleftImageVideo } from '../App';

import GekkoImage from '../assets/Gekko.png';
import MoshPitImage from '../assets/MoshPit.png';
import ReconDartImage from '../assets/ReconDart.png';
import ShockDartImage from '../assets/ShockDart.png';
import SovaImage from '../assets/Sova.png';
export interface MapArea<Titles extends String> {
	title: Titles;
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface Lineup<FromAreaTitles, ToAreaTitles> {
	agent: Agent;
	util: string;

	fromTitle: FromAreaTitles;
	toTitle: ToAreaTitles;

	imageStuff: BottomleftImageVideo[];
}

export const imageMap = {
	Gekko: GekkoImage,
	Sova: SovaImage,
	'Mosh Pit': MoshPitImage,
	'Shock Dart': ShockDartImage,
	'Recon Dart': ReconDartImage, // todo
} as const;

export const agentUtilityMap = {
	Gekko: ['Mosh Pit'],
	Sova: ['Shock Dart', 'Recon Dart'],
} as const;
export const agents = Object.keys(agentUtilityMap) as Agent[];

export type Agent = keyof typeof agentUtilityMap;
export type Utility = (typeof agentUtilityMap)[Agent][number];
export type Writeable<T> = { -readonly [P in keyof T]: T[P] };
