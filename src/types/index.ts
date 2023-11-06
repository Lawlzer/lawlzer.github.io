import { BottomleftImageVideo } from '../App';

import GekkoImage from '../assets/Gekko.png';
import MoshPitImage from '../assets/MoshPit.png';
import PoisonCloudImage from '../assets/PoisonCloud.png';
import ReconDartImage from '../assets/ReconDart.png';
import ShockDartImage from '../assets/ShockDart.png';
import SnakeBiteImage from '../assets/SnakeBite.png';
import SovaImage from '../assets/Sova.png';
import { default as ToxicScreenImage, default as ViperPitImage } from '../assets/Todo.png';
import ViperImage from '../assets/Viper.png';
export interface MapArea<Titles extends String> {
	title: Titles;
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface Lineup<FromAreaTitles, ToAreaTitles> {
	agent: Agent;
	util: Utility;

	fromTitle: FromAreaTitles;
	toTitle: ToAreaTitles;

	imageStuff: BottomleftImageVideo[];
}

export const imageMap = {
	Gekko: GekkoImage,
	Sova: SovaImage,
	Viper: ViperImage,
	'Mosh Pit': MoshPitImage,
	'Shock Dart': ShockDartImage,
	'Recon Dart': ReconDartImage, // todo
	'Snake Bite': SnakeBiteImage,
	'Poison Cloud': PoisonCloudImage,
	'Toxic Screen': ToxicScreenImage,
	'Viper Pit': ViperPitImage,
} as const;

export const agentUtilityMap = {
	Gekko: ['Mosh Pit'],
	Sova: ['Shock Dart', 'Recon Dart'],
	Viper: ['Snake Bite', 'Poison Cloud'],
} as const;
export const agents = Object.keys(agentUtilityMap) as Agent[];

export type Agent = keyof typeof agentUtilityMap;
export type Utility = (typeof agentUtilityMap)[Agent][number];
export type Writeable<T> = { -readonly [P in keyof T]: T[P] };
