import {
    Search,
    MessageSquare,
    Clock,
    CheckCircle,
    XCircle,
    AlertTriangle,
    User,
    Car,
    Calendar,
    Eye,
    MessageCircle,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const page = () => {
    const complaints = [
        {
            id: "CMP-001",
            title: "Vehicle not clean upon pickup",
            description:
                "The car interior was dirty with food crumbs and stains on the seats. This is unacceptable for the premium price paid.",
            customer: {
                name: "John Smith",
                email: "john.smith@email.com",
                phone: "+1 234 567 8900",
            },
            vehicle: {
                make: "Toyota",
                model: "Camry",
                year: 2023,
                plate: "ABC-123",
            },
            booking: "BK-2024-001",
            status: "open",
            priority: "medium",
            category: "vehicle_condition",
            createdAt: "2024-01-15T10:30:00Z",
            updatedAt: "2024-01-15T10:30:00Z",
            assignedTo: null,
            responses: [],
        },
        {
            id: "CMP-002",
            title: "Overcharged for fuel",
            description:
                "I was charged $80 for fuel when I returned the car with more fuel than when I picked it up. This seems like an error.",
            customer: {
                name: "Sarah Johnson",
                email: "sarah.j@email.com",
                phone: "+1 234 567 8901",
            },
            vehicle: {
                make: "Honda",
                model: "Civic",
                year: 2022,
                plate: "XYZ-789",
            },
            booking: "BK-2024-002",
            status: "in_progress",
            priority: "high",
            category: "billing",
            createdAt: "2024-01-14T14:20:00Z",
            updatedAt: "2024-01-15T09:15:00Z",
            assignedTo: "Admin User",
            responses: [
                {
                    id: 1,
                    author: "Admin User",
                    message:
                        "Thank you for bringing this to our attention. We are reviewing your fuel charges and will get back to you within 24 hours.",
                    timestamp: "2024-01-15T09:15:00Z",
                    isInternal: false,
                },
            ],
        },
        {
            id: "CMP-003",
            title: "Rude customer service",
            description:
                "The staff member at pickup location was very rude and unprofessional. Made me wait 45 minutes without explanation.",
            customer: {
                name: "Mike Davis",
                email: "mike.davis@email.com",
                phone: "+1 234 567 8902",
            },
            vehicle: {
                make: "Ford",
                model: "Focus",
                year: 2021,
                plate: "DEF-456",
            },
            booking: "BK-2024-003",
            status: "resolved",
            priority: "medium",
            category: "service",
            createdAt: "2024-01-13T16:45:00Z",
            updatedAt: "2024-01-14T11:30:00Z",
            assignedTo: "Admin User",
            responses: [
                {
                    id: 1,
                    author: "Admin User",
                    message:
                        "We sincerely apologize for the poor service experience. We have addressed this with our staff and implemented additional training.",
                    timestamp: "2024-01-14T11:30:00Z",
                    isInternal: false,
                },
            ],
        },
        {
            id: "CMP-004",
            title: "Vehicle breakdown during rental",
            description:
                "The car broke down on the highway. Had to call roadside assistance and was stranded for 2 hours. Ruined my business meeting.",
            customer: {
                name: "Lisa Wilson",
                email: "lisa.wilson@email.com",
                phone: "+1 234 567 8903",
            },
            vehicle: {
                make: "Nissan",
                model: "Altima",
                year: 2020,
                plate: "GHI-789",
            },
            booking: "BK-2024-004",
            status: "open",
            priority: "high",
            category: "vehicle_issue",
            createdAt: "2024-01-16T08:15:00Z",
            updatedAt: "2024-01-16T08:15:00Z",
            assignedTo: null,
            responses: [],
        },
    ]

    const getStatusColor = (status) => {
        switch (status) {
            case "open":
                return "bg-red-100 text-red-800"
            case "in_progress":
                return "bg-yellow-100 text-yellow-800"
            case "resolved":
                return "bg-green-100 text-green-800"
            case "closed":
                return "bg-gray-100 text-gray-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    const getPriorityColor = (priority) => {
        switch (priority) {
            case "high":
                return "bg-red-100 text-red-800"
            case "medium":
                return "bg-yellow-100 text-yellow-800"
            case "low":
                return "bg-green-100 text-green-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    const getStatusIcon = (status) => {
        switch (status) {
            case "open":
                return <AlertTriangle className="h-4 w-4" />
            case "in_progress":
                return <Clock className="h-4 w-4" />
            case "resolved":
                return <CheckCircle className="h-4 w-4" />
            case "closed":
                return <XCircle className="h-4 w-4" />
            default:
                return <MessageSquare className="h-4 w-4" />
        }
    }

    const stats = [
        {
            title: "Total Complaints",
            value: complaints.length.toString(),
            icon: MessageSquare,
            color: "text-blue-600",
        },
        {
            title: "Open",
            value: complaints.filter((c) => c.status === "open").length.toString(),
            icon: AlertTriangle,
            color: "text-red-600",
        },
        {
            title: "In Progress",
            value: complaints.filter((c) => c.status === "in_progress").length.toString(),
            icon: Clock,
            color: "text-yellow-600",
        },
        {
            title: "Resolved",
            value: complaints.filter((c) => c.status === "resolved").length.toString(),
            icon: CheckCircle,
            color: "text-green-600",
        },
    ]
    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                            <stat.icon className={`h-5 w-5 ${stat.color}`} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Tabs defaultValue="list" className="space-y-6">
                <TabsList>
                    <TabsTrigger value="list">All Complaints</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>

                <TabsContent value="list" className="space-y-6">
                    {/* Filters */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Filters</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                        <Input
                                            placeholder="Search complaints..."
                                            className="pl-10"
                                        />
                                    </div>
                                </div>
                                <Select >
                                    <SelectTrigger className="w-full md:w-48">
                                        <SelectValue placeholder="Filter by status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Status</SelectItem>
                                        <SelectItem value="open">Open</SelectItem>
                                        <SelectItem value="in_progress">In Progress</SelectItem>
                                        <SelectItem value="resolved">Resolved</SelectItem>
                                        <SelectItem value="closed">Closed</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select>
                                    <SelectTrigger className="w-full md:w-48">
                                        <SelectValue placeholder="Filter by priority" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Priority</SelectItem>
                                        <SelectItem value="high">High</SelectItem>
                                        <SelectItem value="medium">Medium</SelectItem>
                                        <SelectItem value="low">Low</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Complaints List */}
                    <div className="grid gap-6">
                        {complaints.map((complaint) => (
                            <Card key={complaint.id} className="hover:shadow-md transition-shadow">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <CardTitle className="text-lg">{complaint.title}</CardTitle>
                                                <Badge variant="outline">{complaint.id}</Badge>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm text-gray-600">
                                                <div className="flex items-center gap-1">
                                                    <User className="h-4 w-4" />
                                                    {complaint.customer.name}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Car className="h-4 w-4" />
                                                    {complaint.vehicle.make} {complaint.vehicle.model}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-4 w-4" />
                                                    {new Date(complaint.createdAt).toLocaleDateString()}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Badge className={getPriorityColor(complaint.priority)}>{complaint.priority}</Badge>
                                            <Badge className={getStatusColor(complaint.status)}>
                                                {getStatusIcon(complaint.status)}
                                                <span className="ml-1">{complaint.status.replace("_", " ")}</span>
                                            </Badge>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-700 mb-4">{complaint.description}</p>

                                    <Separator className="my-4" />

                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4 text-sm text-gray-600">
                                            <span>
                                                Category: <strong>{complaint.category.replace("_", " ")}</strong>
                                            </span>
                                            <span>
                                                Booking: <strong>{complaint.booking}</strong>
                                            </span>
                                            {complaint.assignedTo && (
                                                <span>
                                                    Assigned to: <strong>{complaint.assignedTo}</strong>
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm" >
                                                <Eye className="h-4 w-4 mr-1" />
                                                View Details
                                            </Button>
                                            <Select >
                                                <SelectTrigger className="w-32">
                                                    <SelectValue placeholder="Update Status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="open">Open</SelectItem>
                                                    <SelectItem value="in_progress">In Progress</SelectItem>
                                                    <SelectItem value="resolved">Resolved</SelectItem>
                                                    <SelectItem value="closed">Closed</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {complaints.length === 0 && (
                        <Card>
                            <CardContent className="text-center py-12">
                                <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-lg font-medium text-gray-900 mb-2">No complaints found</h3>
                                <p className="text-gray-600">No complaints match your current filters.</p>
                            </CardContent>
                        </Card>
                    )}
                </TabsContent>

                <TabsContent value="analytics" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Complaints by Category</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {["vehicle_condition", "billing", "service", "vehicle_issue"].map((category) => {
                                        const count = complaints.filter((c) => c.category === category).length
                                        const percentage = (count / complaints.length) * 100
                                        return (
                                            <div key={category} className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span className="capitalize">{category.replace("_", " ")}</span>
                                                    <span>
                                                        {count} ({percentage.toFixed(1)}%)
                                                    </span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Response Time Analytics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Average Response Time</span>
                                        <span className="font-semibold">2.5 hours</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Resolution Rate</span>
                                        <span className="font-semibold">75%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Customer Satisfaction</span>
                                        <span className="font-semibold">4.2/5</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default page