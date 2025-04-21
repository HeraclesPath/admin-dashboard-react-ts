import TopDealsBox from '../components/topDealsBox/TopDealsBox';
import ChartBox from '../components/ChartBox/ChartBox';
import { useQuery } from '@tanstack/react-query';
import {
  MdGroup,
  MdInventory2,
  MdAssessment,
  MdSwapHorizontalCircle,
} from 'react-icons/md';
import {
  fetchTotalProducts,
  fetchTotalProfit,
  fetchTotalRatio,
  fetchTotalRevenue,
  fetchTotalRevenueByProducts,
  fetchTotalSource,
  fetchTotalUsers,
  fetchTotalVisit,
} from '../api/ApiCollection';

const Home = () => {
  const { data: totalUsers, isLoading: loadingUsers, isSuccess: successUsers } = useQuery({
    queryKey: ['totalusers'],
    queryFn: fetchTotalUsers,
  });

  const { data: totalProducts, isLoading: loadingProducts, isSuccess: successProducts } = useQuery({
    queryKey: ['totalproducts'],
    queryFn: fetchTotalProducts,
  });

  const { data: totalRatio, isLoading: loadingRatio, isSuccess: successRatio } = useQuery({
    queryKey: ['totalratio'],
    queryFn: fetchTotalRatio,
  });

  const { data: totalRevenue, isLoading: loadingRevenue, isSuccess: successRevenue } = useQuery({
    queryKey: ['totalrevenue'],
    queryFn: fetchTotalRevenue,
  });

  const { data: totalSource, isLoading: loadingSource, isSuccess: successSource } = useQuery({
    queryKey: ['totalsource'],
    queryFn: fetchTotalSource,
  });

  const { data: totalRevenueByProducts, isLoading: loadingRevenueByProducts, isSuccess: successRevenueByProducts } = useQuery({
    queryKey: ['totalrevenue-by-products'],
    queryFn: fetchTotalRevenueByProducts,
  });

  const { data: totalVisit, isLoading: loadingVisit, isSuccess: successVisit } = useQuery({
    queryKey: ['totalvisit'],
    queryFn: fetchTotalVisit,
  });

  const { data: totalProfit, isLoading: loadingProfit, isSuccess: successProfit } = useQuery({
    queryKey: ['totalprofit'],
    queryFn: fetchTotalProfit,
  });

  return (
    <div className="home w-full p-0 m-0">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 grid-flow-dense auto-rows-[minmax(200px,auto)] xl:auto-rows-[minmax(150px,auto)] gap-3 xl:gap-3 px-0">
        <div className="box col-span-full sm:col-span-1 xl:col-span-1 row-span-3 3xl:row-span-5">
          <TopDealsBox />
        </div>

        <div className="box col-span-full sm:col-span-1 xl:col-span-1 3xl:row-span-2">
          <ChartBox
            chartType="line"
            IconBox={MdGroup}
            title="Total Users"
            {...totalUsers}
            isLoading={loadingUsers}
            isSuccess={successUsers}
          />
        </div>

        <div className="box col-span-full sm:col-span-1 xl:col-span-1 3xl:row-span-2">
          <ChartBox
            chartType="line"
            IconBox={MdInventory2}
            title="Total Products"
            {...totalProducts}
            isLoading={loadingProducts}
            isSuccess={successProducts}
          />
        </div>

        <div className="box row-span-3 col-span-full sm:col-span-1 xl:col-span-1 3xl:row-span-5">
          <ChartBox
            chartType="pie"
            title="Leads by Source"
            {...totalSource}
            isLoading={loadingSource}
            isSuccess={successSource}
          />
        </div>

        <div className="box col-span-full sm:col-span-1 xl:col-span-1 3xl:row-span-2">
          <ChartBox
            chartType="line"
            IconBox={MdAssessment}
            title="Total Ratio"
            {...totalRatio}
            isLoading={loadingRatio}
            isSuccess={successRatio}
          />
        </div>

        <div className="box col-span-full sm:col-span-1 xl:col-span-1 3xl:row-span-2">
          <ChartBox
            chartType="line"
            IconBox={MdSwapHorizontalCircle}
            title="Total Revenue"
            {...totalRevenue}
            isLoading={loadingRevenue}
            isSuccess={successRevenue}
          />
        </div>

        <div className="box row-span-2 col-span-full xl:col-span-2 3xl:row-span-3">
          <ChartBox
            chartType="area"
            title="Revenue by Products"
            {...totalRevenueByProducts}
            isLoading={loadingRevenueByProducts}
            isSuccess={successRevenueByProducts}
          />
        </div>

        <div className="box col-span-full sm:col-span-1 xl:col-span-1 3xl:row-span-2">
          <ChartBox
            chartType="bar"
            title="Total Visit"
            {...totalVisit}
            isLoading={loadingVisit}
            isSuccess={successVisit}
          />
        </div>

        <div className="box col-span-full sm:col-span-1 xl:col-span-1 3xl:row-span-2">
          <ChartBox
            chartType="bar"
            title="Total Profit"
            {...totalProfit}
            isLoading={loadingProfit}
            isSuccess={successProfit}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
