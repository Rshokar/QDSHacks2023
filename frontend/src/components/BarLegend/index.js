import { Container } from './styled';

const BarLegend = ({color, label, width = "2rem", height = "1rem"}) => {

    return (
        <Container>
            <span className="bar" style={{
                backgroundColor: color,
                width: width,
                height: height
            }}/> {label}
        </Container>
    );
}

export default BarLegend;