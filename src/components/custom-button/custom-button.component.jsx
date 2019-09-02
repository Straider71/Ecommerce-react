import React from 'react';

import { CustomButtonContainer } from './cusotm-button.styles';

const CustomButton = ({ children, ...props }) => (
	<CustomButtonContainer {...props}> {children} </CustomButtonContainer>
);

export default CustomButton;
