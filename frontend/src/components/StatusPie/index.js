import { data01, data02 } from './test';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';

const StatusPie = ({data, width, height}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={730} height={250}>
                <Pie data={data ? data : data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#000f7b"/>
                <Pie data={data ? data : data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={125} outerRadius={150} fill="#377283" label />
            </PieChart>            
        </ResponsiveContainer>
    );
}

export default StatusPie;