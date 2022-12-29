import { useSelector } from 'react-redux';
import DashboardOverviewCard from '../../components/Dashboard-overview-card/DashboardOverviewCard';
import Spinner from '../../components/Spinner/Spinner';
import useFetch from '../../hooks/useFetch';

function DashboardOverview() {
  const { isLoading, result } = useFetch('/users/count');
  const { items } = useSelector((state) => state.shop);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="grid md:grid-cols-3 gap-1">
      <DashboardOverviewCard cardTitle="Total Users" cardInfo={result} />
      <DashboardOverviewCard
        cardTitle="Total Products"
        cardInfo={items.length}
      />
    </div>
  );
}

export default DashboardOverview;
