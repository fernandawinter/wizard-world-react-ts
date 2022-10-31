import React from "react";
import { fetchCharacters } from "../api";

const Characters = () => {
	const characters = fetchCharacters() 
	return (
		<div>
			<h1>Characters</h1>	
		</div>
	)
}
export default Characters;