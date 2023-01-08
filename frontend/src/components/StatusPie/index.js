import { data01, data02 } from './test';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const StatusPie = ({data, width, height}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={730} height={250}>
                <Pie
                    label={renderLabel1}
                    labelLine={false}
                    data={data ? data : data01}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={170}
                    fill="#000f7b"
                />
                <Pie
                    label={renderLabel2}
                    data={data ? data : data02}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={200}
                    outerRadius={250}
                    fill="#377283"
                />
            </PieChart>
        </ResponsiveContainer>
    );
}

const renderLabel1 = ({ cx, cy, x, y, name }) => {
    return (
        <text
            x={x}
            y={y}
            dx={x > cx ? -24 : 50}
            dy={y > cy ? -6 : 30}
            stroke={"white"}
            fill="white"
            textAnchor={x > cx ? 'end' : 'start'}
            dominantBaseline="middle"
        >
            {name}
        </text>
    );
};

const renderLabel2 = ({ cx, x, y, name }) => {
    return (
        <text
            x={x}
            y={y}
            stroke={"#377283"}
            fill="#377283"
            textAnchor={x > cx ? 'start' : 'end'}
        >
        {name}
        </text>
    );
};

export default StatusPie;