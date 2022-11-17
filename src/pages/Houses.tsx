import React, { useEffect, useState } from "react";
import { fetchHouses } from "../api";
import StickyHeadTable from "../components/table";
import gryffindor from "../gryffindor.jpeg";
import slytherin from "../slytherin.jpeg";
import hufflepuff from "../hufflepuff.jpeg";
import ravenclaw from "../ravenclaw.jpeg";

const Houses = () => {
	return (
		<div>
			<img src={gryffindor} className="gryffindor-image" alt="gryffindor" />
			<img src={slytherin} className="slytherin-image" alt="slytherin" />
			<img src={hufflepuff} className="hufflepuff-image" alt="hufflepuff" />
			<img src={ravenclaw} className="ravenclaw-image" alt="ravenclaw" />
		</div>
	)

}
export default Houses;