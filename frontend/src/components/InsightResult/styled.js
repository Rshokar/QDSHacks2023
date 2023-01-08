import styled from 'styled-components';

const primaryColor = process.env.REACT_APP_PRIMARY_COLOR;
const secondaryColor = process.env.REACT_APP_SECONDARY_COLOR;

export const Container = styled.div`
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1rem;

    img {
        max-width: 40%;
        padding-bottom: 1rem;
        transform: scaleX(-1);
    }

    .lower {
        .description {
            font-size: 0.75rem;
            font-weight: 500;
        }
    }
`;