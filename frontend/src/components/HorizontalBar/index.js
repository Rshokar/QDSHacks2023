import { data01 } from './test';
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

const HorizontalBar = ({data}) => {
    return (
        <StyledCard>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                    data={data ? data : data01}
                    layout="vertical" barCategoryGap={20}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <XAxis type="number" hide />
                    <YAxis type="category" width={110} padding={{ left: 0 }} dataKey="name"/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Bar
                        dataKey="min"
                        stackId="a"
                        fill="skyblue"
                        label={<CustomizedLabel />}
                    />
                    <Bar
                        dataKey="avg"
                        stackId="a"
                        fill="teal"
                        label={<CustomizedLabel />}
                    />
                    <Bar
                        dataKey="max"
                        stackId="a"
                        fill="blue"
                        label={<CustomizedLabel />}
                    />
                </BarChart>
            </ResponsiveContainer>
        </StyledCard>

    );
};

export default HorizontalBar;