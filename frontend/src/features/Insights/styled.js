import styled from "styled-components";

const secondaryColor = process.env.REACT_APP_SECONDARY_COLOR;

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #e8e9ea;
    padding: 20px 30px;
    overflow: hidden;

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
    
    .main-wrapper {
        flex: 1;
        display: flex;
        padding: 1.5rem 0;
        justify-content: center;
        align-items: center;
        
        .main-content {
            max-width: 1000px;
            display: flex;
        }
    }
`;