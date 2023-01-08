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

    & > * {
        flex: 1;
        padding: 10px 30px;
    }

    .main-content {
        flex: 4;
    }

    .date {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        

        .month {
            font-size: 1.25rem;
            text-align: center;
        }

        .day {
            font-size: 3rem;
            font-weight: 900;
            text-align: center;
        }

        &::before {
            position: absolute;
            content: "";
            width: 0.25rem;
            height: 75%;
            background-color: ${secondaryColor};
            top: 0;
            left: 25%;
            transform: translate(0, 20%);
        }
    }

    .sunburst {
        display: flex;
        flex-direction: column;

        .title {
            position: relative;

            h1 {
                position: relative;
                text-transform: uppercase;
                font-weight: 900;
                text-align: left;
                padding-left: 1rem;

                &::before {
                    position: absolute;
                    content: "";
                    width: 0.25rem;
                    height: 125%;
                    background-color: ${secondaryColor};
                    left: 0;
                }
            }
        }

        .graph {
            flex: 1;
        }
    }

    .main-right {
        display: flex;
        flex-direction: column;
        
        .upper {
            flex: 3;
        }

        .lower {
            padding-top: 1.25rem;
            flex: 2;
            display: flex;
            min-height: 50%;
        }
    }

    .filter-group {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
    }
`;