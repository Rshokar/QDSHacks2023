import { Spin } from 'antd';

import Truck from '../../assets/truck.png';

import TiltedTwoHeader from '../../components/TiltedTwoHeader';

import { Container } from './styled';

const InsightResult = ({ loading, result }) => {
  
	return (
			<Container>
				<div className="upper">
					<img src={Truck} alt="shiny truck go brr"/>
				</div>
				<div className="lower">
					<div class="description">Most efficient truck for this route</div>
					{!result 
						? loading 
							? <Spin size="large"/>
							: <span>Select shovel and dump sites to proceed.</span>
						: <TiltedTwoHeader text1="truck" text2={`#${result}`} />}
				</div>
			</Container>
		);
}

export default InsightResult;