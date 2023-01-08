import styled from "styled-components";
import { Card } from 'antd'

const primaryColor = process.env.REACT_APP_PRIMARY_COLOR;

export const StyledCard = styled(Card)`
    border: none;
    background-color: #FFF;
    filter: drop-shadow(5px 5px 5px #e0e2e2);

    .ant-card-body { 
        padding: 1rem;
        font-size: clamp(1rem, 1.5vw, 1.5rem);
        line-height: 1.25;
        font-weight: 900;
    }

    .ant-card-actions li span {
        cursor: default;
        color: #000;
        font-size: clamp(0.5rem, 1vw, 1rem);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;


        &::hover {
            color: #000;
        }

        .anticon {
            margin-right: 1rem;
            color: ${primaryColor};
        }
    }
`;