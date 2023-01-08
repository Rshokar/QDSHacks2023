import { StyledCard } from './styled';
import Icon, { StarFilled } from '@ant-design/icons';

const StatCard = ({ title, value, unit, icon }) => {
    return (
        <StyledCard actions={[
            <div className="title">
                {icon ? <Icon component={icon}/> : <StarFilled />}
                <span className="text">{title}</span>
            </div>
        ]}>
            <div className="value">{value}</div>
            <div className="unit">{unit}</div>
        </StyledCard>);
}

export default StatCard;