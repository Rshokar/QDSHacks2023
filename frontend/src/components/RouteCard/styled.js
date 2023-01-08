import { Card } from 'antd';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
    height: 100%;
    width: 100%;

    .card-bod {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .big {
        flex: 1;
        font-size: clamp(1.5rem, 3vw, 3rem);
        font-weight: 900;
        padding-bottom: 1rem;

        span {
            padding: 0 0.5rem;
        }
    }
`;