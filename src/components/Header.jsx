import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
	<header className='d-flex bg-dark text-light justify-content-between align-items-center p-3 '>
		<h1>Products</h1>
		<div className=' d-flex gap-4'>
			<NavLink className="text-light" to={'/'}>Home Page</NavLink>
			<NavLink className="text-light" to={'/ürünler'}>Product</NavLink>
			<NavLink className="text-light" to={'/Hakkımızda'}>About </NavLink>
			<NavLink className="text-light" to={'/arabalar/içten-yanma'}>Electric</NavLink>
		</div>
	</header>
  );
};
export default Header;   