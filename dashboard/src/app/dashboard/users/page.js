import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Eye, Edit, Ban, CheckCircle, Mail, Phone, Calendar, Car } from "lucide-react"

const page = () => {

    const users = [
        {
            id: "1",
            name: "John Doe",
            email: "john@example.com",
            phone: "+1 (555) 123-4567",
            role: "customer",
            status: "active",
            joinDate: "2023-06-15",
            totalBookings: 12,
            totalSpent: 2450,
            avatar: "/placeholder.svg?height=40&width=40",
            lastLogin: "2024-01-14",
        },
        {
            id: "2",
            name: "Jane Smith",
            email: "jane@example.com",
            phone: "+1 (555) 234-5678",
            role: "driver",
            status: "active",
            joinDate: "2023-08-22",
            totalBookings: 8,
            totalSpent: 1890,
            avatar: "/placeholder.svg?height=40&width=40",
            lastLogin: "2024-01-13",
        },
        {
            id: "3",
            name: "Mike Johnson",
            email: "mike@example.com",
            phone: "+1 (555) 345-6789",
            role: "customer",
            status: "inactive",
            joinDate: "2023-04-10",
            totalBookings: 3,
            totalSpent: 675,
            avatar: "/placeholder.svg?height=40&width=40",
            lastLogin: "2023-12-20",
        },
        {
            id: "4",
            name: "Sarah Wilson",
            email: "sarah@example.com",
            phone: "+1 (555) 456-7890",
            role: "customer",
            status: "active",
            joinDate: "2023-09-05",
            totalBookings: 15,
            totalSpent: 3200,
            avatar: "/placeholder.svg?height=40&width=40",
            lastLogin: "2024-01-15",
        },
        {
            id: "5",
            name: "Admin User",
            email: "admin@vroomgo.com",
            phone: "+1 (555) 567-8901",
            role: "admin",
            status: "active",
            joinDate: "2023-01-01",
            totalBookings: 0,
            totalSpent: 0,
            avatar: "/placeholder.svg?height=40&width=40",
            lastLogin: "2024-01-15",
        },
    ]

    const getRoleColor = (role) => {
        switch (role) {
            case "admin":
                return "bg-purple-100 text-purple-800"
            case "driver":
                return "bg-blue-100 text-blue-800"
            case "customer":
                return "bg-green-100 text-green-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    const getStatusColor = (status) => {
        switch (status) {
            case "active":
                return "bg-green-100 text-green-800"
            case "inactive":
                return "bg-gray-100 text-gray-800"
            case "suspended":
                return "bg-red-100 text-red-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }
    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Total Users</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{users.length}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Active Users</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{users.filter((u) => u.status === "active").length}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Customers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{users.filter((u) => u.role === "customer").length}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Drivers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{users.filter((u) => u.role === "driver").length}</div>
                    </CardContent>
                </Card>
            </div>

            {/* Filters */}
            <Card>
                <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                                placeholder="Search users..."
                                className="pl-10"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button variant="default">
                                All Roles
                            </Button>
                            <Button
                            variant="outline"
                            >
                                Customers
                            </Button>
                            <Button variant="outline"
                            >
                                Drivers
                            </Button>
                            <Button variant="outline"
                            >
                                Admins
                            </Button>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="default"
                            >
                                All Status
                            </Button>
                            <Button
variant="outline"
                            >
                                Active
                            </Button>
                            <Button
variant="outline"                            >
                                Inactive
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Users List */}
            <div className="space-y-4">
                {users.map((user) => (
                    <Card key={user.id}>
                        <CardContent className="p-6">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                                <div className="flex items-center space-x-4">
                                    <Avatar className="h-12 w-12">
                                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                        <AvatarFallback>
                                            {user.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-2 mb-1">
                                            <h3 className="text-lg font-semibold">{user.name}</h3>
                                            <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                                            <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                                            <div className="flex items-center">
                                                <Mail className="h-4 w-4 mr-2" />
                                                {user.email}
                                            </div>
                                            <div className="flex items-center">
                                                <Phone className="h-4 w-4 mr-2" />
                                                {user.phone}
                                            </div>
                                            <div className="flex items-center">
                                                <Calendar className="h-4 w-4 mr-2" />
                                                Joined {new Date(user.joinDate).toLocaleDateString()}
                                            </div>
                                            <div className="flex items-center">
                                                <Car className="h-4 w-4 mr-2" />
                                                {user.totalBookings} bookings • ${user.totalSpent}
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
                                    {user.status === "active" ? (
                                        <Button variant="outline" size="sm">
                                            <Ban className="h-4 w-4 mr-2" />
                                            Suspend
                                        </Button>
                                    ) : (
                                        <Button variant="outline" size="sm">
                                            <CheckCircle className="h-4 w-4 mr-2" />
                                            Activate
                                        </Button>
                                    )}
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