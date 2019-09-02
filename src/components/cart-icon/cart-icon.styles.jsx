import styled from 'styled-components';

import { ReactComponent as ShoppingIconSVG } from '../../assets/11.3 shopping-bag.svg';

export const CartContainer = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	font-family: 'Shabnam';
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
	width: 24px;
	height: 24px;
`;

export const ItemCountContainer = styled.span`
	position: absolute;
	font-size: 10px;
	font-weight: bold;
	bottom: 12px;
	top: 18px;
`;
