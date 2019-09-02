import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 80px;
	right: 20px;
	z-index: 5;
	overflow: hidden;
`;

export const CartDropdownButton = styled(CustomButton)`
	margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	box-sizing: content-box;
	scrollbar-width: none;
`;
