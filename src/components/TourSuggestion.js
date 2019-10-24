import React from "react";
import {TourSuggestionCard} from "./TourSuggestionCard";

export const TourSuggestion = ({tours, name}) =>
	<div>
		<h3 className="bookTourSuggestionsTitle">{name}</h3>
		<div className="bookTourSuggestionsContent">
			{tours.map(y =>
				<TourSuggestionCard tour={y}></TourSuggestionCard>)
			}
		</div>
	</div>;

