import React from 'react'
import DashboardStartsGrid from './DashboardStartsGrid'
import OverviewChart from './OverviewChart'
import CustomersChart from './CustomersChart'


const Dashboard = () => {
  return (
    <div className='flex flex-col gap-6 ' >
      <DashboardStartsGrid />
      <div className="flex flex-row gap-4 flex-wrap">
        <OverviewChart />
        <CustomersChart />
      </div>

     
      
    </div>
  )
}

export default Dashboard