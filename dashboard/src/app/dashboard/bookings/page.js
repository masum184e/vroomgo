import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Eye, Edit, Calendar, User, Car, DollarSign } from "lucide-react"

const page = () => {
    const bookings = [
        {
            id: "1",
            bookingNumber: "BK001",
            customerName: "John Doe",
            customerEmail: "john@example.com",
            vehicleMake: "Tesla",
            vehicleModel: "Model 3",
            vehicleLicense: "ABC123",
            startDate: "2024-01-15",
            endDate: "2024-01-20",
            totalAmount: 445,
            status: "active",
            paymentStatus: "paid",
            createdAt: "2024-01-10",
        },
        {
            id: "2",
            bookingNumber: "BK002",
            customerName: "Jane Smith",
            customerEmail: "jane@example.com",
            vehicleMake: "BMW",
            vehicleModel: "X5",
            vehicleLicense: "XYZ789",
            startDate: "2024-01-18",
            endDate: "2024-01-25",
            totalAmount: 875,
            status: "confirmed",
            paymentStatus: "paid",
            createdAt: "2024-01-12",
        },
        {
            id: "3",
            bookingNumber: "BK003",
            customerName: "Mike Johnson",
            customerEmail: "mike@example.com",
            vehicleMake: "Mercedes",
            vehicleModel: "C-Class",
            vehicleLicense: "DEF456",
            startDate: "2024-01-22",
            endDate: "2024-01-28",
            totalAmount: 570,
            status: "pending",
            paymentStatus: "pending",
            createdAt: "2024-01-14",
        },
        {
            id: "4",
            bookingNumber: "BK004",
            customerName: "Sarah Wilson",
            customerEmail: "sarah@example.com",
            vehicleMake: "Audi",
            vehicleModel: "A4",
            vehicleLicense: "GHI789",
            startDate: "2024-01-05",
            endDate: "2024-01-10",
            totalAmount: 425,
            status: "completed",
            paymentStatus: "paid",
            createdAt: "2024-01-01",
        },
    ]

    const getStatusColor = (status) => {
        switch (status) {
            case "pending":
                return "bg-yellow-100 text-yellow-800"
            case "confirmed":
                return "bg-blue-100 text-blue-800"
            case "active":
                return "bg-green-100 text-green-800"
            case "completed":
                return "bg-gray-100 text-gray-800"
            case "cancelled":
                return "bg-red-100 text-red-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    const getPaymentStatusColor = (status) => {
        switch (status) {
            case "paid":
                return "bg-green-100 text-green-800"
            case "pending":
                return "bg-yellow-100 text-yellow-800"
            case "failed":
                return "bg-red-100 text-red-800"
            case "refunded":
                return "bg-blue-100 text-blue-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }
    return (
        <div className="space-y-6">
            {/* Filters */}
            <Card>
                <CardContent>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                                placeholder="Search bookings..."
                                className="pl-10"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button variant="default"
                            >
                                All
                            </Button>
                            <Button
                                variant="outline"
                            >
                                Pending
                            </Button>
                            <Button
                                variant="outline"
                            >
                                Confirmed
                            </Button>
                            <Button
                                variant="outline"
                            >
                                Active
                            </Button>
                            <Button
                                variant="outline"
                            >
                                Completed
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Bookings List */}
            <div className="space-y-4">
                {bookings.map((booking) => (
                    <Card key={booking.id}>
                        <CardContent className="p-6">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center space-x-4">
                                        <h3 className="text-lg font-semibold">#{booking.bookingNumber}</h3>
                                        <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
                                        <Badge className={getPaymentStatusColor(booking.paymentStatus)}>{booking.paymentStatus}</Badge>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <User className="h-4 w-4 mr-2" />
                                            <div>
                                                <p className="font-medium text-gray-900">{booking.customerName}</p>
                                                <p>{booking.customerEmail}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <Car className="h-4 w-4 mr-2" />
                                            <div>
                                                <p className="font-medium text-gray-900">
                                                    {booking.vehicleMake} {booking.vehicleModel}
                                                </p>
                                                <p>{booking.vehicleLicense}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            <div>
                                                <p className="font-medium text-gray-900">
                                                    {new Date(booking.startDate).toLocaleDateString()} -{" "}
                                                    {new Date(booking.endDate).toLocaleDateString()}
                                                </p>
                                                <p>
                                                    {Math.ceil(
                                                        (new Date(booking.endDate).getTime() - new Date(booking.startDate).getTime()) /
                                                        (1000 * 60 * 60 * 24),
                                                    )}{" "}
                                                    days
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <DollarSign className="h-4 w-4 mr-2" />
                                            <div>
                                                <p className="font-medium text-gray-900">${booking.totalAmount}</p>
                                                <p>Total amount</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex space-x-2">
                                    <Button variant="outline" size="sm" >
                                        <Eye className="h-4 w-4 mr-2" />
                                        View
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <Edit className="h-4 w-4 mr-2" />
                                        Edit
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default page