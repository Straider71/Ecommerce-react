import React from 'react';

import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = ({ currentUser }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					خروج
				</div>
			) : (
				<Link className="option" to="/signin">
					ورود
				</Link>
			)}
			<Link className="option" to="/contact">
				ارتباط با ما
			</Link>
			<Link className="option" to="/shop">
				فروشگاه
			</Link>
		</div>
	</div>
);

export default Header;
