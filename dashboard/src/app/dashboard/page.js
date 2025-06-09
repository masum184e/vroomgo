import BookingTrendsChart from "@/components/dashboard/BookingTrendsChart";
import CustomerSegmentChart from "@/components/dashboard/CustomerSegmentChart";
import RecentBookings from "@/components/dashboard/RecentBookings";
import StatsCardContainer from "@/components/dashboard/StatsCardContainer";
import TopPerformingVehicles from "@/components/dashboard/TopPerformingVehicles";

export default function Dashboard() {

    return (
        <div className="space-y-6">
            <StatsCardContainer />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <CustomerSegmentChart />
                <BookingTrendsChart />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RecentBookings />
                <TopPerformingVehicles />
            </div>
        </div>
    )
}