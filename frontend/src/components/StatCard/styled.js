import styled from "styled-components";
import { Card } from 'antd'

const primaryColor = process.env.REACT_APP_PRIMARY_COLOR;

export const StyledCard = styled(Card)`
    border: none;
    background-color: #FFF;
    filter: drop-shadow(5px 5px 5px #e0e2e2);

    .ant-card-body { 
        padding: 1rem;
        font-size: 1.25rem;
        font-weight: 900;
    }

    .ant-card-actions li span {
        cursor: default;
        color: #000;

        &::hover {
            color: #000;
        }

        .anticon {
            margin-right: 1rem;
            color: ${primaryColor};
        }
    }
`;