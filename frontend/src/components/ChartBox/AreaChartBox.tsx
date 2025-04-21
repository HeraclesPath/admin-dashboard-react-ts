import { ResponsiveContainer, AreaChart, Area, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartBoxProps } from './type';

const AreaChartBox = ({ title, chartAreaData = [] }: ChartBoxProps) => (
  <div className="w-full h-full flex flex-col gap-4">
    <span className="text-2xl font-bold">{title}</span>
    <div className="w-full h-72">
      {chartAreaData.length ? (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartAreaData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="smartphones" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="consoles" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="laptops" stackId="1" stroke="#ffc658" fill="#ffc658" />
            <Area type="monotone" dataKey="others" stackId="1" stroke="#969595" fill="#969595" />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <span>No data</span>
      )}
    </div>
  </div>
);

export default AreaChartBox;