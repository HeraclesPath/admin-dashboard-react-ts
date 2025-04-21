import { IconType } from 'react-icons';

export interface ChartBoxProps {
  chartType: 'line' | 'bar' | 'area' | 'pie';
  color?: string;
  IconBox?: IconType;
  title?: string;
  dataKey?: string;
  number?: number | string;
  percentage?: number;
  chartData?: object[];
  chartPieData?: { name: string; value: number; color: string }[];
  chartAreaData?: {
    name: string;
    smartphones: number;
    consoles: number;
    laptops: number;
    others: number;
  }[];
  isLoading?: boolean;
  isSuccess?: boolean;
}
