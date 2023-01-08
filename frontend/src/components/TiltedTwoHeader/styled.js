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
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    transform: translate(75%, 100%);

    &.accent {
        z-index: 0;
        clip-path: polygon(25% 0%, 34% -10%, 9% 85%, 2% 85%);
        transform: translate(15%, 80%);
    }

    &.background {
        z-index: 0;
        transform: translate(25%, 175%);
        bottom: 0;

        .text2 {
            position: absolute;
            top: 50%;
            left: 45%;
            transform: translate(-50%, -50%);
            color: #FFF;
            font-size: 1rem;
        }
    }

    &.top {
        .text2 {
            position: absolute;
            top: 45%;
            left: 45%;
            transform: translate(-50%, -50%);
            color: #FFF;
            font-size: 2rem;
        }
    }
`;