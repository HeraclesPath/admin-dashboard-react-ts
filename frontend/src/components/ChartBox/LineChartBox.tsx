import { ResponsiveContainer, LineChart, Line, Tooltip } from 'recharts';
import toast from 'react-hot-toast';
import { ChartBoxProps } from './type';

const LineChartBox = ({ IconBox, title, number, percentage, chartData, color = '#8884d8', dataKey }: ChartBoxProps) => (
  <div className="w-full h-full flex justify-between items-end xl:gap-5">
    <div className="flex flex-col justify-between h-full items-start">
      <div className="flex items-center gap-2">
        {IconBox && <IconBox className="text-[30px]" />}
        <span className="font-semibold text-lg">{title}</span>
      </div>
      <span className="text-2xl font-bold">{number}</span>
      <button onClick={() => toast('You clicked View All!')} className="btn btn-link px-0 py-0 min-h-0 text-base-content">
        View All
      </button>
    </div>
    <div className="flex flex-col h-full justify-between items-end">
      <div className="w-full h-[60%]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot={false} />
            <Tooltip contentStyle={{ background: color, color: 'white', borderRadius: '8px' }} itemStyle={{ color: 'white' }} labelStyle={{ display: 'none' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center gap-2">
        <span className={`text-2xl font-bold ${percentage && percentage > 0 ? 'text-success' : 'text-error'}`}>
          {percentage ?? ''}%
        </span>
        <span className="text-sm font-medium">this month</span>
      </div>
    </div>
  </div>
);

export default LineChartBox;
