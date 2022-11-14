import React, { useEffect, useState } from "react";
import { fetchSpells } from "../api";
import StickyHeadTable from "../components/table";

interface Column {
	id: 'name' | 'description';
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}

const columns: Column[] = [
	{ id: 'name', label: 'Name', minWidth: 170 },
	{ id: 'description', label: 'Description', minWidth: 100 },
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
			name: spell.name,
			description: spell.description,
		}
	})

	return (
		<div>
			<StickyHeadTable rows={rows} columns={columns} />
		</div>
	)
}
export default Spells;

