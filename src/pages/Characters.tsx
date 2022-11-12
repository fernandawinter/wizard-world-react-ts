import React, { useEffect, useState } from "react";
import { fetchCharacters } from "../api";
import StickyHeadTable from "../components/table";
import "./Characters.css";


interface Column {
	id: 'image' | 'name' | 'house' | 'dateOfBirth';
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}

const columns: Column[] = [
	{ id: 'image', label: 'Image', minWidth: 170 },
	{ id: 'name', label: 'Name', minWidth: 100 },
	{
		id: 'house',
		label: 'House',
		minWidth: 170,
		format: (value: number) => value.toLocaleString('pt-BR'),
	},
	{
		id: 'dateOfBirth',
		label: 'Date of Birth',
		minWidth: 170,
		format: (value: number) => value.toLocaleString('en-US'),
	},
];

const Characters = () => {
	const [characters, setCharacters] = useState<any>([]);

	useEffect(() => {
		fetchCharacters().then((response) => {
			setCharacters(response)
		})
	}, [])

	const rows = characters.map((character: any) => {
		return {
			image: character.image,
			name: character.name,
			house: character.house,
			dateOfBirth: character.dateOfBirth.replace(/-/g, '/')
		}
	})

	return (
		<div>
			<StickyHeadTable rows={rows} columns={columns} />
		</div>
	)



}

export default Characters;