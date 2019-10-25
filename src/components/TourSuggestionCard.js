import React from "react";
import {TextBig, TextMedium, TextSmall} from "../styledComponents/BasicStyledComponets";
import {TourSuggestionCardContent, TourSuggestionsCard} from "../styledComponents/TourSuggestionsStyledComponents";

export const TourSuggestionCard = ({tour}) =>
	<TourSuggestionsCard img='../staticContent/mqdefault.jpg'>
		<TourSuggestionCardContent>
			<TextMedium>Discover</TextMedium>
			<TextBig fontWeight='bold'>{tour.city}</TextBig>
			<TextSmall align='right'>Locations: {tour.locations.length}</TextSmall>
		</TourSuggestionCardContent>
	</TourSuggestionsCard>;