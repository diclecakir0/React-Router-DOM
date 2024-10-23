import React from "react";
import { Link } from "react-router-dom";

const Card = ({data}) => {
	
	return(
		<div className="card shadow mt-4 rounded p-1">
			<img src={data.image} className="rounded"/>
			<div className="card-body">
				<h4>{data.title}</h4>
				<p>author:{data.author}</p>
			</div>
			<Link to={`/ürün-detay/${data.id}`} className="btn btn-primary">Detail</Link>

		</div>
	);
} ;
export default Card;