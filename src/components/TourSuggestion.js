import React from "react";
import {TourSuggestionCard} from "./TourSuggestionCard";
import {BookTourSuggestions, BookTourSuggestionsContent} from "../styledComponents/TourSuggestionsStyledComponents";
import {TextMedium} from "../styledComponents/BasicStyledComponets";

export const TourSuggestion = ({tours, name}) =>
	<div>
		<TextMedium align='left'>{name}</TextMedium>
		<BookTourSuggestions>
			<BookTourSuggestionsContent>
				{tours.map(y =>
					<TourSuggestionCard tour={y}></TourSuggestionCard>)
				}
			</BookTourSuggestionsContent>
		</BookTourSuggestions>
	</div>;

