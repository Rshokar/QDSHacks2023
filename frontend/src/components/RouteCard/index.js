import { testData } from './test';

import { StyledCard } from './styled';


const RouteCard= ({route, title}) => {
    return (
        <StyledCard title={title}>
            <div className="card-bod">
                <div className="big">
                    <span>{route.shovel}</span>
                    <span>→</span>
                    <span>{route.dump}</span>
                </div>
                <p>Averaged <b>{route.avg} t/L</b> when going from shovel {route.shovel} to dump {route.dump}</p>
            </div>
        </StyledCard>
    );
}

export default RouteCard;