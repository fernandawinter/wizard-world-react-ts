import React, { useEffect, useState } from "react";
import { idText } from "typescript";
import { fetchSpells } from "../api";
import StickyHeadTable from "../components/table";

interface Column {
	id: 'spell' | 'use';
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}

const columns: Column[] = [
	{ id: 'spell', label: 'Name', minWidth: 170 },
	{ id: 'use', label: 'Description', minWidth: 100 },
];

const Spells = () => {
	const [spells, setSpells] = useState<any>([]);

	useEffect(() => {
		fetchSpells().then((response) => {
			setSpells(response)
		})
	}, [])

	const rows = spells.map((spell: any) => {
		return {
			id: spell.id,
			spell: spell.spell,
			use: spell.use
		}
	})

	return (
		<div>
			<StickyHeadTable rows={rows} columns={columns} />
		</div>
	)
}
export default Spells;

