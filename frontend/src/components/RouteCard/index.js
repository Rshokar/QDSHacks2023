import { StarFilled } from '@ant-design/icons';

import { StyledCard } from './styled';

const RouteCard= ({route, title, icon, color}) => {
    return (
        <StyledCard title={(
            <div style={{color: color}}>
                {icon || <StarFilled />} {title}
            </div>
        )}>
            <div className="card-bod">
                <div className="big">
                    <span>{route.shovel}</span>
                    <span>→</span>
                    <span>{route.dump}</span>
                </div>
                <p>Averaged <span style={{color: color}}><b>{route.avg} t/L</b></span> when going from shovel {route.shovel} to dump {route.dump}</p>
            </div>
        </StyledCard>
    );
}

export default RouteCard;