import { Container, TiltedBox } from './styled';

const TiltedTwoHeader = ({text1, text2, width = 200}) => {
    const bgGray = process.env.REACT_APP_GREY;
    const bgLightGray = process.env.REACT_APP_LIGHT_GREY;
    const primaryColor = process.env.REACT_APP_PRIMARY_COLOR;

    return (
        <Container>  
            <TiltedBox className="accent" style={{
                    backgroundColor: bgLightGray,
                    width: width,
                    color: bgLightGray,
                }}>
                    <span className="text">{text1}</span>
            </TiltedBox>

            <TiltedBox className="background" style={{
                backgroundColor: bgGray,
                width: width,
                color: bgGray
            }}>
                <span className="text">{text1}</span>
                <span className="text2">{text1}</span>
            </TiltedBox>

            <span className="primary">
                <TiltedBox className="top" style={{
                    backgroundColor: primaryColor,
                    width: width,
                }}>
                    <span className="text" style={{color: primaryColor}}>{text1}</span>
                    <span className="text2">{text2}</span>
                </TiltedBox>
            </span>
        </Container>
    );
}

export default TiltedTwoHeader;