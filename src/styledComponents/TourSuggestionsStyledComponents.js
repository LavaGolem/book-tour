import styled from "styled-components";

export const BookTourSuggestions = styled.div`
  display: flex;
  margin-left: 8px;
`;
export const BookTourSuggestionsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TourSuggestions = styled.div`
	padding: 8px;
`;

export const SearchToursStyledComponent = styled.div`
	padding: 8px;
`;

export const TourSuggestionCardContent = styled.div`
width: 300px;
height: 80px;
background-color: gray;
text-align:left;
padding: 8px;
display: flex;
flex-direction: column;
border-radius: 0px 0px 3px 3px;
`;

export const TourSuggestionsCard = styled.div`
background-image: ${props => props.img};
display: flex;
align-items: flex-end;
width: 300px;
height: 200px;
background-color: lightgray;
margin: 20px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;
cursor: pointer;
`;

TourSuggestionsCard.defaultProps = {
	img: '/',
};