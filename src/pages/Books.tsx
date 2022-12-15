import React, { useEffect, useState } from "react";
import { fetchBooks } from "../api";
import StickyHeadTable from "../components/table";

interface Column {
	id: 'title' | 'releaseDay' | 'description';
	label: string;
	minWidth?: number;
	align?: 'right';
	format?: (value: number) => string;
}

const columns: Column[] = [
	{ id: 'title', label: 'Title', minWidth: 170 },
	{ id: 'releaseDay', label: 'Release Day', minWidth: 100 },
    { id: 'description', label: 'Description', minWidth: 100 },
];

const Books = () => {
	const [books, setBooks] = useState<any>([]);

	useEffect(() => {
		fetchBooks().then((response) => {
			setBooks(response)
		})
	}, [])

	const rows = books.map((books: any) => {
		return {
			title: books.title,
			releaseDay: books.releaseDay,
            description: books.description
		}
	})

	return (
		<div>
			<StickyHeadTable rows={rows} columns={columns} />
		</div>
	)
}
export default Books;