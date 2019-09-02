import React from 'react';

// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-deropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
	HeaderContainer,
	LogoContainer,
	OptionsConstainer,
	OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsConstainer>
			{currentUser ? (
				<OptionLink as="div" onClick={() => auth.signOut()}>
					خروج
				</OptionLink>
			) : (
				<OptionLink to="/signin">ورود</OptionLink>
			)}
			<OptionLink to="/contact">ارتباط با ما</OptionLink>
			<OptionLink to="/shop">فروشگاه</OptionLink>
			<CartIcon />
		</OptionsConstainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
