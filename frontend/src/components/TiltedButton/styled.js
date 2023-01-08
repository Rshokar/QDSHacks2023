import styled from 'styled-components';

const secondaryColor = process.env.REACT_APP_SECONDARY_COLOR;

export const Container = styled.div`
    position: relative;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-transform: uppercase;

    .top {
        font-weight: 800;
        color: #000;
        z-index: 999;
        font-size: 1rem;
        line-height: 1;
    }

    .bottom {
        position: relative;
        font-weight: 900;
        color: #FFF;
        font-size: 2rem;
    }

    .tilt {
        position: relative;

        &.active {
            z-index: 9;
        }

        cursor: pointer;

        &:hover {
            .anticon {
                svg, polygon {
                    fill: ${secondaryColor};
                }
                
            }
        }
    }

    .anticon {
        position: absolute;
        font-size: 15rem;
    }

    .text {
        position: absolute;
    }

    .left {
        .anticon {
            transform: translate(0, -30%);
        }

        .text {
            transform: translate(30%, 50%);
        }
    }

    .right {
        .anticon {
            transform: translate(90%, -20%);
        }

        .text {
            transform: translate(230%, 110%);
            white-space: nowrap;
        }

        .ant-picker {
            z-index: -1;
            transform: translate(230%, 110%);
            visibility: hidden;

            .anticon {
                display: none;
            }
        }
    }
`;