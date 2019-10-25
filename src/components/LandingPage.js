import React from 'react';
import {LANDING_PAGE_SUBTITLE, LANDING_PAGE_TITLE} from "../staticContent/LandingPageMetadata";
import {SearchTours} from "./SearchTours";
import {TourSuggestion} from "./TourSuggestion";
import {PageHeader, TextBig, TextSuperBig} from "../styledComponents/BasicStyledComponets";

export const LandingPage = ({tours}) =>
	<div>
		<PageHeader>
			<TextSuperBig>{LANDING_PAGE_TITLE}</TextSuperBig>
			<TextBig align='middle'>{LANDING_PAGE_SUBTITLE}</TextBig>
		</PageHeader>
		<SearchTours/>
		{tours.map(x =>
			<TourSuggestion name={x.name} tours={x.tours}/>
		)}
	</div>;
