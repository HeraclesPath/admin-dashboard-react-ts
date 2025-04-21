import { ChartBoxProps } from './type';

const SkeletonChartBox = ({ title = 'Loading...' }: { type: ChartBoxProps['chartType']; title?: string }) => (
  <div className="w-full h-full flex flex-col gap-4">
    <span className="text-2xl font-bold">{title}</span>
    <div className="w-full h-64 skeleton" />
  </div>
);

export default SkeletonChartBox;