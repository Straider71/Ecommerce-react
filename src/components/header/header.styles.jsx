import styled from 'styled-components'; //{css}
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;
`;

export const OptionsConstainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-top: 10px;
`;

export const OptionLink = styled(Link)`
	padding: 10px 15px;
	cursor: pointer;
`;

// export const OptionDiv = styled.div`
// 	${OptionContainerStyles}
// `;
