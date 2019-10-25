import styled from "styled-components";
//Gradive elements components
export const PageHeader = styled.div`
	display: flex;
  justify-content: center;
  flex-direction: column;
`;


// Text components
export const TextMedium = styled.div`
font-size: 18px;
text-align: ${props => props.align};
font-weight: ${props => props.fontWeight};
`;

export const TextBig = styled.div`
font-size: 36px;
text-align: ${props => props.align};
font-weight: ${props => props.fontWeight};
`;

export const TextSuperBig = styled.div`
font-size: 42px;
text-align: ${props => props.align};
font-weight: ${props => props.fontWeight};
`;

export const TextSmall = styled.div`
font-size: 14px;
text-align: ${props => props.align};
font-weight: ${props => props.fontWeight};
`;

let defaultProps = {
	align: 'left',
	fontWeight: 'normal'
};

TextMedium.defaultProps = defaultProps;

TextSmall.defaultProps = defaultProps;

TextBig.defaultProps = defaultProps;
