import React from 'react'
import { Link,useParams } from 'react-router-dom';

const UndefinedPage = () => {
	const {errorCode} = useParams();
  return (
	<div style={{ height: '90vh' }} className="d-flex flex-column align-items-center justify-content-center">
		<h1 className='text-warning'>{errorCode ? errorCode : "404"}</h1>
	  	<p>Sorry, the page you are looking for is not available</p>
		<p>
			<Link className='btn btn-primary' to={'/'}>Home Page</Link>
		</p>
	</div>
  )
}

export default UndefinedPage
