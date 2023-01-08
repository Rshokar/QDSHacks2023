import styled from "styled-components";

const secondaryColor = process.env.REACT_APP_SECONDARY_COLOR;

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #e8e9ea;
    padding: 10px 0;
    overflow: hidden;
`;