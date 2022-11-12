import React, { useEffect, useState } from "react";
import { fetchHouses } from "../api";
import StickyHeadTable from "../components/table";

interface Column {
	id: 'Gryffindor' | 'Slytherin' | 'Hufflepuff' | 'Ravenclaw';
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}

const columns: Column[] = [
	{ id: 'Gryffindor', label: 'Gryffindor', minWidth: 170 },
	{ id: 'Slytherin', label: 'Slytherin', minWidth: 100 },
	{
		id: 'Hufflepuff',
		label: 'Hufflepuff',
		minWidth: 170,
	},
	{
		id: 'Ravenclaw',
		label: 'Ravenclaw',
		minWidth: 170,
	},
];

const Houses = () => {
	const [houses, setHouses] = useState<any>([]);

	useEffect(() => {
		fetchHouses().then((response) => {
			setHouses(response)
		})
	}, [])

	const rows = houses.map((house: any) => {
		return {
			gryffindor: house.gryffindor,
			slytherin: house.slytherin,
			hufflepuff: house.hufflepuff,
			ravenclaw: house.ravenclaw
		}
	})

	return (
		<div>
			<StickyHeadTable rows={rows} columns={columns} />
		</div>
	)



}
export default Houses;