import Truck from '../../assets/truck.png';

import { Container } from './styled';

const InsightResult = ({ icon, loading }) => {
  
	return (
			<Container>
				<div className="upper">
					<img src={Truck} alt="shiny truck go brr"/>
				</div>
				<div className="lower">
					<span class="description">Most efficient truck for this route</span>
				</div>
			</Container>
		);
}

export default InsightResult;