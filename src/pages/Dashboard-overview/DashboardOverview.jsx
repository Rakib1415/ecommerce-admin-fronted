import DashboardOverviewCard from '../../components/Dashboard-overview-card/DashboardOverviewCard';

function DashboardOverview() {
  return (
    <div className="grid md:grid-cols-3 gap-1">
      <DashboardOverviewCard cardTitle="Total Products" cardInfo="1200" />
      <DashboardOverviewCard cardTitle="Total Products" cardInfo="1200" />
      <DashboardOverviewCard cardTitle="Total Products" cardInfo="1200" />
      <DashboardOverviewCard cardTitle="Total Products" cardInfo="1200" />
    </div>
  );
}

export default DashboardOverview;
