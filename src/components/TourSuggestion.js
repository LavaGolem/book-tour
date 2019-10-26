import React from "react";
import {TourSuggestionCard} from "./TourSuggestionCard";
import {
	BookTourSuggestions,
	BookTourSuggestionsContent,
	TourSuggestions
} from "../styledComponents/TourSuggestionsStyledComponents";
import {TextMedium} from "../styledComponents/BasicStyledComponets";

export const TourSuggestion = ({tours, name}) =>
	<TourSuggestions>
		<TextMedium align='left'>{name}</TextMedium>
		<BookTourSuggestions>
			<BookTourSuggestionsContent>
				{tours.map(y =>
					<TourSuggestionCard tour={y}></TourSuggestionCard>)
				}
			</BookTourSuggestionsContent>
		</BookTourSuggestions>
	</TourSuggestions>;

