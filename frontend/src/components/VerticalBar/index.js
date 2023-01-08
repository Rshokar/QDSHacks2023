import { data01, data02, data03, data04 } from './test';
import { StyledCard } from './styled';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell, Tooltip, Legend } from 'recharts';

const CustomizedLabel = ({x, y, fill, value}) => {
    return (
        <text 
            x={x} 
            y={y} 
            dx={5}
            dy={15}
            fill={"white"}
            textAnchor="start"
            dominantBaseline="central"
        >
            {value}
        </text>
    );
};

export const VerticalBar1 = ({data}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart 
                data={data ? data : data01}
                barCategoryGap={0}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="name"/>
                <YAxis />
                <CartesianGrid strokeDasharray="3 3"/>
                <Bar
                    dataKey="avg"
                    fill={`${process.env.REACT_APP_PRIMARY_COLOR}`}
                    label={<CustomizedLabel />}
                />
                <Bar
                    dataKey="projected"
                    fill={`${process.env.REACT_APP_SECONDARY_COLOR}`}
                    label={<CustomizedLabel />}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export const VerticalBar2 = ({data}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart 
                data={data ? data : data02}
                barCategoryGap={0}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="name"/>
                <YAxis />
                <CartesianGrid strokeDasharray="3 3"/>
                <Bar
                    dataKey="avg"
                    fill={`${process.env.REACT_APP_PRIMARY_COLOR}`}
                    label={<CustomizedLabel />}
                />
                <Bar
                    dataKey="projected"
                    fill={`${process.env.REACT_APP_SECONDARY_COLOR}`}
                    label={<CustomizedLabel />}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export const VerticalBar3 = ({data}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart 
                data={data ? data : data03}
                barCategoryGap={0}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="name"/>
                <YAxis />
                <CartesianGrid strokeDasharray="3 3"/>
                <Bar
                    dataKey="avg"
                    fill={`${process.env.REACT_APP_PRIMARY_COLOR}`}
                    label={<CustomizedLabel />}
                />
                <Bar
                    dataKey="projected"
                    fill={`${process.env.REACT_APP_SECONDARY_COLOR}`}
                    label={<CustomizedLabel />}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};

export const VerticalBar4 = ({data}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart 
                data={data ? data : data04}
                barCategoryGap={0}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="name"/>
                <YAxis />
                <CartesianGrid strokeDasharray="3 3"/>
                <Bar
                    dataKey="avg"
                    fill={`${process.env.REACT_APP_PRIMARY_COLOR}`}
                    label={<CustomizedLabel />}
                />
                <Bar
                    dataKey="projected"
                    fill={`${process.env.REACT_APP_SECONDARY_COLOR}`}
                    label={<CustomizedLabel />}
                />
            </BarChart>
        </ResponsiveContainer>
    );
};
