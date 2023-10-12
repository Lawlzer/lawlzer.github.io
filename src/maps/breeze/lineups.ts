import type { Lineup } from '../../types';

import { Writeable, type MapArea } from '../../types';
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';

const tempAreasFrom = [
	{
		title: 'Mid Spawn Door Corner',
		x: 411,
		y: 604,
		width: 15,
		height: 15,
	},
	{
		title: 'A Mid Doors',
		x: 502,
		y: 380,
		width: 16,
		height: 16,
	},
	{
		title: 'Mid Cannon Grate',
		x: 212,
		y: 486,
		width: 12,
		height: 16,
	},
] as const; // We have to declare as const to type-check the titles.

export const areasFrom: MapArea<string>[] = tempAreasFrom as Writeable<typeof tempAreasFrom>;

const tempAreasTo = [
	{
		title: 'B Default Plant',
		x: 85,
		y: 235,
		width: 16,
		height: 16,
	},
	{
		title: 'A ?? Recon Close',
		x: 746,
		y: 407,
		width: 16,
		height: 16,
	},
	{
		title: 'A ?? Recon Deep',
		x: 742,
		y: 306,
		width: 16,
		height: 16,
	},
	{
		title: 'A Default Plant',
		x: 710,
		y: 390,
		width: 20,
		height: 20,
	},
	{
		title: 'B Backleft Corner',
		x: 24,
		y: 127,
		width: 16,
		height: 16,
	},
	{
		title: 'B Backright',
		x: 181,
		y: 129,
		width: 16,
		height: 16,
	},
] as const;
export const areasTo: MapArea<string>[] = tempAreasTo as Writeable<typeof tempAreasTo>;

export const lineups: Lineup<FromAreaTitles, ToAreaTitles>[] = [
	{
		agent: 'Sova',
		util: 'Recon Dart',

		fromTitle: 'Mid Spawn Door Corner',
		toTitle: 'A ?? Recon Close',

		imageStuff: [
			{
				image: image1,
				notes: ['2 Charges', '0 Bounces', 'Aim between the leaf and wire'],
			},
		],
	},
	{
		agent: 'Sova',
		util: 'Shock Dart',

		fromTitle: 'A Mid Doors',
		toTitle: 'A Default Plant',

		imageStuff: [
			{ image: image2, notes: ['3 Charges', '2 Bounces'] },
			{ image: image3, notes: ['1 Charge', '1 Bounce', 'No delay.'] },
		],
	},
	{
		agent: 'Sova',
		util: 'Recon Dart',

		fromTitle: 'Mid Cannon Grate',
		toTitle: 'B Backleft Corner',

		imageStuff: [
			{
				image: image5,
				notes: ['2 Charges', '1 Bounce', 'Aim up-right of the first knot in the vine'],
			},
			{ image: image4, notes: ['Stand here'] },
		],
	},
];

export type FromAreaTitles = (typeof areasFrom)[number]['title'];
export type ToAreaTitles = (typeof areasTo)[number]['title'];
export type AllAreaTitles = FromAreaTitles | ToAreaTitles;
