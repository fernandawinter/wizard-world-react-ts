import React, { useEffect, useState } from "react";
import { fetchHouses } from "../api";
import StickyHeadTable from "../components/table";
import gryffindor from "../gryffindor.jpeg";
import slytherin from "../slytherin.jpeg";
import hufflepuff from "../hufflepuff.jpeg";
import ravenclaw from "../ravenclaw.jpeg";
import "./Houses.css";

const Houses = () => {
	return (
		<div className="house-images">
			<img src={gryffindor} alt="gryffindor" />
			<img src={slytherin} alt="slytherin" />
			<img src={hufflepuff} alt="hufflepuff" />
			<img src={ravenclaw} alt="ravenclaw" />
		</div>
	)

}
export default Houses;