import styled from 'styled-components';

const primaryColor = process.env.REACT_APP_PRIMARY_COLOR;
const secondaryColor = process.env.REACT_APP_SECONDARY_COLOR;

export const Container = styled.div`
    font-size: clamp(0.75rem, 1vw, 1rem);

    .anticon {
        padding-right: 0.5rem;
        color: ${secondaryColor};
    }

    .dropdown-btn {
        margin-left: 1rem;
        background-color: transparent;
        border: 1px solid ${primaryColor};

        span {
            font-weight: 900;
            color: ${primaryColor};
            font-size: clamp(0.75rem, 1vw, 1rem);
            line-height: 1;

            &::after {
                content: '▼';
                font-size: 0.5rem;
                padding-left: 0.5rem;
            }
        }
    }
`;