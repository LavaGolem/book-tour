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

export const TourSuggestionCardContent = styled.div`
width: 300px;
height: 90px;
background-color: gray;
text-align:left;
padding: 8px;
display: flex;
flex-direction: column;
`;

export const TourSuggestionsCard = styled.div`
background-image: ${props => props.img};
display: flex;
align-items: flex-end;
width: 300px;
height: 150px;
background-color: violet;
margin: 20px;
`;

TourSuggestionsCard.defaultProps = {
	img: '/',
};