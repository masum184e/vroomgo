import Navbar from '@/components/common/Navbar'
import OverviewCards from '@/components/pages/dashboard/OverviewCards'
import ProfileCard from '@/components/pages/dashboard/ProfileCard'

const Dashboard = () => {
  return (
    <div className='p-4'>
      <Navbar pageName="Dashboard" />
      <OverviewCards />
      <div className="flex gap-4 w-full">
        <div className="w-3/4">

        </div>
        <div className="w-1/4">
          <ProfileCard />
        </div>
      </div>
    </div>
  )
}

export default Dashboard