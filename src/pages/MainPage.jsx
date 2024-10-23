import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const MainPage = () => {

	const navigate = useNavigate();

  return (
	<div style={{minHeight:'86vh'}} className='d-flex flex-column align-items-center justify-content-center p-4 gap-3'>
	  <h5>Book</h5>
	  <img className='img-fluid' src="src/assets/bg1.jpg" alt="" />
	  <p className='lead text-center'>
		<span onClick={()=> navigate("/ürünler")}>You can view all products on the products page</span>
	  </p>
	</div> 
  )
}

export default MainPage;
    