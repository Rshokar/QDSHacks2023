import styled from 'styled-components';

const primaryColor = process.env.REACT_APP_PRIMARY_COLOR;
const secondaryColor = process.env.REACT_APP_SECONDARY_COLOR;

export const Container = styled.div`
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1rem;

    img {
        max-width: 40%;
        padding-bottom: 1.5rem;
    }

    .dropdown-btn {
        position: relative;
        margin-left: 1rem;
        background-color: transparent;
        border: 1px solid ${primaryColor};
        height: 2.5rem;
        width: 3rem;
        padding-left: 0.25rem;
        font-size: 1.25rem;

        span {
            font-weight: 900;
            color: ${primaryColor};

            &::after {
                content: '▼';
                position: absolute;
                font-size: 0.5rem;
                transform: translate(0, -50%);
                top: 50%;
                right: 0.25rem;
            }
        }
    }
`;