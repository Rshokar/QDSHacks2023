import { StyledCard } from './styled';
import { StarFilled } from '@ant-design/icons';

const StatCard = ({ title, value, unit, icon }) => {
    return (
        <StyledCard actions={[
            <div className="title">
                {icon ? icon : <StarFilled />}
                <span className="text">{title}</span>
            </div>
        ]}>
            <div className="value">{value}</div>
            {unit && <div className="unit">{unit}</div>}
        </StyledCard>);
}

export default StatCard;