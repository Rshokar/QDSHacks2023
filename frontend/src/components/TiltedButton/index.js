import { useState, setState } from 'react';
import Icon from '@ant-design/icons';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';

import { ReactComponent as TiltPrimary} from '../../assets/tilt-primary.svg';
import { ReactComponent as TiltSecondary } from '../../assets/tilt-secondary.svg';

import { Container } from './styled';

const TiltedButton = ({onClick, dateRange = { start: "2022-04-04", end: "2022-04-09" } }) => {
    const [active, setActive] = useState("");
    const [isPickerOpen, setIsPickerOpen] = useState(false);

    const handleClick = (filter, date) => {
        if (filter !== active) {
            setActive(filter);
            onClick(date || "");
            isPickerOpen && setIsPickerOpen(false);
        }
    }

    const handleDayClick = () => {
        setIsPickerOpen(!isPickerOpen);
    }

    const disabledDate = (date) => !date && (date < dayjs(dateRange.start) || date > dayjs(dateRange.end));

    return (
        <Container>
            <div className="top">
                Show statistics
            </div>

            <div className="bottom">
                <div 
                    className={`tilt left ${!active && "active"}`}
                    onClick={() => handleClick("")}
                >
                    <Icon component={!active ? TiltPrimary : TiltSecondary} />
                    <span className="text">Overall</span>
                </div>
                <div className={`tilt right ${active && "active"}`}
                    onClick={handleDayClick}    
                >
                    <Icon component={active ? TiltPrimary : TiltSecondary} />
                    <span className="text">By Day</span>
                    <DatePicker
                        placement="topLeft"
                        open={isPickerOpen}
                        onChange={(date, dateString) => handleClick(date, dateString)}
                        disabledDate={disabledDate}
                        defaultPickerValue={dayjs("2022-04-04")}/>
                </div>
            </div>
        </Container>
    );
}

export default TiltedButton;