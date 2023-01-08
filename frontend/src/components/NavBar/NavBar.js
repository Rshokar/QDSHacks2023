import { useState } from "react";
import AnalyticsIcon from '../../assets/analytics.png';
import LampIcon from '../../assets/lamp.png';

const NavBar = () => {

    const ANALYTICS = 0;
    const LAMP = 1;

    const [button, setButton] = useState(ANALYTICS);

    return <div style={style.container}>
        <div style={style.iconContainer}>
            <div style={button === ANALYTICS ? style.selectedIcon : style.icon} onClick={() => setButton(ANALYTICS)}>
                <img style={style.img} src={AnalyticsIcon} />
            </div>
            <div style={button === LAMP ? style.selectedIcon : style.icon}>
                <img style={style.img} src={LampIcon} onClick={() => setButton(LAMP)} />
            </div>
        </div>
    </div>
}

const style = {
    container: {
        minWidth: '90px',
        backgroundColor: process.env.REACT_APP_NAVBAR_COLOR,
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