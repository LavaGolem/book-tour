import styled from "styled-components";

//Gradive elements components
export const PageHeader = styled.div`
	display: flex;
  justify-content: center;
  flex-direction: column;
`;

// Text components
export const Text = styled.div`
text-align: ${props => props.align};
font-weight: ${props => props.fontWeight};
`;

Text.defaultProps = {
	align: 'left',
	fontWeight: 'normal'
};

export const TextMedium = styled(Text)`
font-size: 18px;
`;

export const TextBig = styled(Text)`
font-size: 36px;
`;

export const TextSuperBig = styled(Text)`
font-size: 42px;
`;

export const TextSmall = styled(Text)`
font-size: 14px;
`;