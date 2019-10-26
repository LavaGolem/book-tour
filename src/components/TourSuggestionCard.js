import React from "react";
import {TextBig, TextMedium, TextSmall} from "../styledComponents/BasicStyledComponets";
import {TourSuggestionCardContent, TourSuggestionsCard} from "../styledComponents/TourSuggestionsStyledComponents";

const onMouseEnter = event => {
console.log("On Mouse Enter");
};

const onMouseLeave = event => {
console.log("On Mouse Leave");
};

export const TourSuggestionCard = ({tour}) =>
	<TourSuggestionsCard img='../staticContent/mqdefault.jpg' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
		<TourSuggestionCardContent transition='true'>
			<TextMedium>Discover</TextMedium>
			<TextBig fontWeight='bold'>{tour.city}</TextBig>
			<TextSmall align='right'>Locations: {tour.locations.length}</TextSmall>
		</TourSuggestionCardContent>
	</TourSuggestionsCard>;

