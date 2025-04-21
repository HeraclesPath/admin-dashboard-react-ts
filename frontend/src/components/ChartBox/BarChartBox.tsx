import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from 'recharts';
import { ChartBoxProps } from './type';

const BarChartBox = ({ title, chartData = [], dataKey = '', color = '#8884d8' }: ChartBoxProps) => (
  <div className="w-full h-full flex flex-col items-start gap-4">
    <span className="text-2xl font-bold">{title}</span>
    <div className="w-full h-48">
      {chartData.length ? (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <Bar dataKey={dataKey} fill={color} />
            <XAxis dataKey="name" />
            <Tooltip
              contentStyle={{ background: color, borderRadius: '5px' }}
              itemStyle={{ color: 'white' }}
              labelStyle={{ display: 'none' }}
              cursor={{ fill: 'none' }}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <span>No data</span>
      )}
    </div>
  </div>
);

export default BarChartBox;
