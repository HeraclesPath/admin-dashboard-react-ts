import { ChartBoxProps } from './type';
import LineChartBox from './LineChartBox';
import BarChartBox from './BarChartBox';
import PieChartBox from './PieChartBox';
import AreaChartBox from './AreaChartBox';
import SkeletonChartBox from './SkeletonChartBox';

const ChartBox = (props: ChartBoxProps) => {
  if (props.isLoading) return <SkeletonChartBox type={props.chartType} title={props.title} />;
  if (!props.isSuccess) return null;

  switch (props.chartType) {
    case 'line':
      return <LineChartBox {...props} />;
    case 'bar':
      return <BarChartBox {...props} />;
    case 'pie':
      return <PieChartBox {...props} />;
    case 'area':
      return <AreaChartBox {...props} />;
    default:
      return null;
  }
};

export default ChartBox;
