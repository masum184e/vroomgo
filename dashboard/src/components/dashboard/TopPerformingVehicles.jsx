import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TopPerformingVehicles = () => {
  const topVehicles = [
    { make: "Tesla", model: "Model 3", bookings: 45, revenue: "$12,450" },
    { make: "BMW", model: "X5", bookings: 38, revenue: "$15,200" },
    { make: "Mercedes", model: "C-Class", bookings: 32, revenue: "$9,600" },
    { make: "Audi", model: "A4", bookings: 28, revenue: "$8,400" },
    { make: "Toyota", model: "Camry", bookings: 25, revenue: "$6,250" },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Performing Vehicles</CardTitle>
        <CardDescription>Most booked vehicles this month</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topVehicles.map((vehicle, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg border"
            >
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
                <div>
                  <p className="font-medium">
                    {vehicle.make} {vehicle.model}
                  </p>
                  <p className="text-sm text-gray-600">
                    {vehicle.bookings} bookings
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{vehicle.revenue}</p>
                <p className="text-sm text-gray-600">Revenue</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopPerformingVehicles;
