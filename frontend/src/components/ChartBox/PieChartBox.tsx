import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartBoxProps } from './type';

const PieChartBox = ({ title, chartPieData = [] }: ChartBoxProps) => (
  <div className="w-full h-full flex flex-col gap-4 justify-between">
    <span className="text-2xl font-bold">{title}</span>
    <div className="w-full h-72">
      {chartPieData.length ? (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip contentStyle={{ background: 'white', borderRadius: '5px' }} />
            <Pie
              data={chartPieData}
              innerRadius="70%"
              outerRadius="90%"
              paddingAngle={3}
              dataKey="value"
            >
              {chartPieData.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      ) : (
        <span>No data</span>
      )}
    </div>
    <div className="flex flex-wrap gap-2">
      {chartPieData.map((item) => (
        <div key={item.name} className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
          <span>{item.name} ({item.value})</span>
        </div>
      ))}
    </div>
  </div>
);

export default PieChartBox;