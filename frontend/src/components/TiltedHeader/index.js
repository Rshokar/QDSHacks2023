import { Container, TiltedBox } from './styled';

const TiltedHeader = ({text, width = 150}) => {
    const bgGray = process.env.REACT_APP_GREY;
    const bgLightGray = process.env.REACT_APP_LIGHT_GREY;
    const secondaryColor = process.env.REACT_APP_SECONDARY_COLOR;

    return (
        <Container>  
            <TiltedBox className="accent" style={{
                    backgroundColor: bgLightGray,
                    width: width,
                    color: bgLightGray,
                }}>
                    <span className="text">{text}</span>
            </TiltedBox>

            <TiltedBox className="background" style={{
                backgroundColor: bgGray,
                width: width,
                color: bgGray
            }}>
                <span className="text">{text}</span>
            </TiltedBox>

            <span className="primary">
                <TiltedBox className="top" style={{
                    backgroundColor: secondaryColor,
                    width: width,
                }}>
                    <span className="text">{text}</span>
                </TiltedBox>
            </span>
        </Container>
    );
}

export default TiltedHeader;