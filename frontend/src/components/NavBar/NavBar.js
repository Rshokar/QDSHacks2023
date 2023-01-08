import { useState } from "react";
import AnalyticsIcon from '../../assets/analytics.png';
import LampIcon from '../../assets/lamp.png';
import { useNavigate } from "react-router";


const NavBar = () => {

    const ANALYTICS = 0;
    const LAMP = 1;

    const [button, setButton] = useState(ANALYTICS);
    const navigate = useNavigate();


    return <div style={style.container}>
        <div style={style.iconContainer}>
            <div style={button === ANALYTICS ? style.selectedIcon : style.icon} onClick={() => {
                navigate('/');
                setButton(ANALYTICS);
            }}>
                <img style={style.img} src={AnalyticsIcon} alt="analytics page" />
            </div>
            <div style={button === LAMP ? style.selectedIcon : style.icon}>
                <img style={style.img} src={LampIcon} alt="insights page" onClick={() => {
                    navigate('insights');
                    setButton(LAMP);
                }
                } />
            </div>
        </div>
    </div>
}

const style = {
    container: {
        minWidth: '90px',
        backgroundColor:"#474747",
        height: '100vh',
        display: 'flex',
        flexDirection: 'column-reverse'
    },
    iconContainer: {
        display: 'flex',
        flexDirection: "column",
        gap: '20px',
        marginBottom: '20px',
    },
    selectedIcon: {
        backgroundColor: '#000f7b',
        padding: '10px',
        // WEIRD FUGGING SHAPE
    },
    icon: {
        padding: '10px'
    },
    img: {
        width: '50px',
        objectFit: 'cover',
        cursor: 'pointer'
    }
}


export default NavBar;