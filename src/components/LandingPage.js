import React from 'react';
import '../css/LandingPage.css';
import {LANDING_PAGE_SUBTITLE, LANDING_PAGE_TITLE} from "../staticContent/LandingPageMetadata";
import {SearchTours} from "./SearchTours";
import {TourSuggestion} from "./TourSuggestion";

export const LandingPage = ({tours}) =>
	<div>
		<div className="bookTourHeader">
			<h1>{LANDING_PAGE_TITLE}</h1>
			<h4>{LANDING_PAGE_SUBTITLE}</h4>
		</div>
		<SearchTours/>
		{tours.map(x =>
			<TourSuggestion name={x.name} tours={x.tours}/>
		)}
	</div>;
