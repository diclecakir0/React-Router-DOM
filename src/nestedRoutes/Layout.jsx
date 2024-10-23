import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Layout = () => {
  return (
	<div style={{height:'86vh'}} className='d-flex justify-content-around align-items-center'>
	  <aside className='bg-dark rounded p-4'>
			<Link className='btn btn-primary' to={'/arabalar/elektrik'}>Electric</Link>
			<br />
			<Link className='btn btn-danger mt-3' to={'/arabalar/içten-yanma'}>internal combustion engine</Link>
	  </aside>
	  <div>
		<Outlet/>
	  </div>
	</div>
  )
}

export default Layout
