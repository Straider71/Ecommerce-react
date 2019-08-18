import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUP from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPAge = () => (
	<div className="sign-in-and-sign-up">
		<SignIn />
		<SignUP />
	</div>
);

export default SignInAndSignUpPAge;
