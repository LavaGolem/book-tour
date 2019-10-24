import React from "react";
import '../css/LandingPage.css';

export const TourSuggestionCard = ({tour}) =>
	<div className="bookTourSuggestionsTours">
		<h4>{tour.name}</h4>
		<h5>{tour.city}</h5>
		<h5>Locations: {tour.locations.length}</h5>
	</div>;