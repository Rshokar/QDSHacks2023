import styled from 'styled-components';

export const Container = styled.div`
    color: white;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 0.75rem;

    .primary {
        filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
    }
`;

export const TiltedBox = styled.div`
    position: absolute;
    padding: 1rem;
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0 100%);
    transform: translate(25%, 100%);

    &.accent {
        z-index: 0;
        clip-path: polygon(25% 0%, 34% -10%, 9% 85%, 2% 85%);
        transform: translate(5%, 80%);
    }

    &.accent2 {
        z-index: 1;
        color: #e8e9ea;
        background-color: #e8e9ea;
        transform: translate(0%, 75%);
    }

    &.background {
        z-index: 0;
        transform: translate(15%, 175%);
        bottom: 0;
    }

    &.top {
        z-index: 99;
    }
`;