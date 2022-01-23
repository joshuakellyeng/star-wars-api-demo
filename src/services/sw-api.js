import { useState, useEffect } from 'react';
import axios from 'axios';

const SwApi = () => {
	const [shipData, setShipData] = useState([]);

	const fetchShip = async () => {
		try {
			const response = await axios.get('https://swapi.dev/api/starships/');
			setShipData(response.data.results);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		fetchShip();
	}, []);

	console.log(shipData);
	return (
		<div className="columns is-flex-wrap-wrap is-justify-content-center is-mobile card-container">
			{shipData.map((ship) => (
			<div id='card' className="card is-one-fifth shipCard" key={ship.name}>
				<div className="card-content ">
					<div className="media-content ">
						<p className="title is-4 is-spaced" id='shipName'>{ship.name}</p>
						<p className="subtitle is-4">Manufacturer: {ship.manufacturer}</p>
					</div>

					<div className="content">
                         Class: {ship.starship_class}
					</div>
				</div>
			</div>
			))}
     
		</div>
	);
};
// 'https://swapi.dev/api/starships/',
export default SwApi;
