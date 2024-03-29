import React from "react";
import TextField from "@material-ui/core/TextField";
import {SearchToursStyledComponent} from "../styledComponents/TourSuggestionsStyledComponents";

export const SearchTours = () =>
	<SearchToursStyledComponent>
		{/*<Input type={"search"}></Input>*/}
		<TextField
			id="standard-full-width"
			label="Search"
			type="search"
			placeholder="Ex. Pandoras star or Paris"
			helperText="Enter a book or location"
			fullWidth
			margin="normal"
			InputLabelProps={{
				shrink: true,
			}}
		/>
	</SearchToursStyledComponent>;