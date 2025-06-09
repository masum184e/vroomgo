import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"

export default function RecentBookings() {
  const bookings = [
    {
      id: "BK001",
      customer: "John Doe",
      vehicle: "Toyota Camry 2023",
      startDate: "2024-01-15",
      endDate: "2024-01-18",
      status: "active",
      amount: "$240",
    },
    {
      id: "BK002",
      customer: "Jane Smith",
      vehicle: "Honda Civic 2022",
      startDate: "2024-01-14",
      endDate: "2024-01-16",
      status: "completed",
      amount: "$180",
    },
    {
      id: "BK003",
      customer: "Mike Johnson",
      vehicle: "BMW X5 2023",
      startDate: "2024-01-16",
      endDate: "2024-01-20",
      status: "pending",
      amount: "$480",
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "default"
      case "completed":
        return "secondary"
      case "pending":
        return "outline"
      default:
        return "outline"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Recent Bookings
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">{booking.customer}</h3>
                  <p className="text-sm text-gray-500">{booking.vehicle}</p>
                  <div className="flex items-center text-xs text-gray-400 mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    {booking.startDate} - {booking.endDate}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">{booking.amount}</div>
                <Badge variant={getStatusColor(booking.status)} className="mt-1">
                  {booking.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
