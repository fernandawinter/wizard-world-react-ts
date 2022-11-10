import React, { useEffect, useState } from "react";
import { fetchCharacters } from "../api";
import StickyHeadTable from "../components/table";
import "./Characters.css";

interface Column {
	id: 'name' | 'house' | 'dateOfBirth' | 'image';
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}

const columns: Column[] = [
	{ id: 'name', label: 'Name', minWidth: 170 },
	{ id: 'house', label: 'House', minWidth: 100 },
	{
		id: 'dateOfBirth',
		label: 'Date of Birth',
		minWidth: 170,
		format: (value: number) => value.toLocaleString('pt-BR'),
	},
	{
		id: 'image',
		label: 'Image',
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
			name: character.name,
			house: character.house,
			dateOfBirth: character.dateOfBirth.replace(/-/g, '/'),
			image: character.image
		}
	})

	return (
		<div>
			<StickyHeadTable rows={rows} columns={columns} />
		</div>
	)



}

export default Characters;