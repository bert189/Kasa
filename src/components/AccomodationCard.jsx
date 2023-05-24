import React from 'react';
import { Link } from "react-router-dom";


function AccomodationCard({ id, image, title }) {	

	return (
		<div className="accomodation-card">
			<Link to={"/fiche-logement/"+id}>
				<div>
					<img src={image} alt={"photo de "+title} />
					{title && <h2>{title}</h2>}
				</div>
			</Link>
		</div>
	);
}

export default AccomodationCard;