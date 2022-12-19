import React, { useEffect, useState } from "react";
import { fetchCharacters } from "../api";
import StickyHeadTable from "../components/table";
import "./Characters.css";


interface Column {
	id: 'image' | 'character' | 'nickname' | 'hogwartsHouse' | 'interpretedBy' | 'hogwartsStudent';
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}

const columns: Column[] = [
	{ id: 'image', label: 'Image', minWidth: 170 },
	{ id: 'character', label: 'Name', minWidth: 100 },
	{
		id: 'nickname',
		label: 'Nickname',
		minWidth: 170,
		format: (value: number) => value.toLocaleString('pt-BR'),
	},
	{ id: 'hogwartsHouse', label: 'Hogwarts House', minWidth: 100 },
	{ id: 'interpretedBy', label: 'Interpreted By', minWidth: 100 },
	{ id: 'hogwartsStudent', label: 'Is Hogwarts Student', minWidth: 100 }
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
			id: character.id,
			image: character.image,
			character: character.character,
			nickname: character.nickname,
			hogwartsHouse: character.hogwartsHouse === 'ninguna' ? '' : character.hogwartsHouse,
			interpretedBy: character.interpretedBy,
			hogwartsStudent: character.hogwartsStudent ? 'yes' : 'no'
		}
	})

	return (
		<div>
			<StickyHeadTable rows={rows} columns={columns} />
		</div>
	)

}

export default Characters;