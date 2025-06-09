import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Eye, CheckCircle, XCircle, Calendar, User, Car, FileText, Clock } from "lucide-react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const page = () => {
    const verificationRequests = [
        {
            id: "1",
            requestNumber: "VR001",
            driverName: "Michael Brown",
            driverEmail: "michael@example.com",
            driverPhone: "+1 (555) 123-4567",
            vehicleMake: "Toyota",
            vehicleModel: "Camry",
            vehicleYear: 2022,
            licensePlate: "ABC123",
            registrationNumber: "REG12345",
            insurancePolicy: "INS98765",
            documents: {
                driverLicense: "/placeholder.svg?height=300&width=500",
                vehicleRegistration: "/placeholder.svg?height=300&width=500",
                insuranceProof: "/placeholder.svg?height=300&width=500",
                vehiclePhotos: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
            },
            status: "pending",
            submittedAt: "2024-01-15T10:30:00Z",
        },
        {
            id: "2",
            requestNumber: "VR002",
            driverName: "Jennifer Wilson",
            driverEmail: "jennifer@example.com",
            driverPhone: "+1 (555) 234-5678",
            vehicleMake: "Honda",
            vehicleModel: "Accord",
            vehicleYear: 2021,
            licensePlate: "XYZ789",
            registrationNumber: "REG67890",
            insurancePolicy: "INS12345",
            documents: {
                driverLicense: "/placeholder.svg?height=300&width=500",
                vehicleRegistration: "/placeholder.svg?height=300&width=500",
                insuranceProof: "/placeholder.svg?height=300&width=500",
                vehiclePhotos: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
            },
            status: "approved",
            submittedAt: "2024-01-12T14:45:00Z",
            notes: "All documents verified and approved.",
        },
        {
            id: "3",
            requestNumber: "VR003",
            driverName: "Robert Johnson",
            driverEmail: "robert@example.com",
            driverPhone: "+1 (555) 345-6789",
            vehicleMake: "Ford",
            vehicleModel: "Mustang",
            vehicleYear: 2023,
            licensePlate: "DEF456",
            registrationNumber: "REG54321",
            insurancePolicy: "INS67890",
            documents: {
                driverLicense: "/placeholder.svg?height=300&width=500",
                vehicleRegistration: "/placeholder.svg?height=300&width=500",
                insuranceProof: "/placeholder.svg?height=300&width=500",
                vehiclePhotos: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
            },
            status: "rejected",
            submittedAt: "2024-01-10T09:15:00Z",
            notes: "Insurance document expired. Please provide updated insurance proof.",
        },
        {
            id: "4",
            requestNumber: "VR004",
            driverName: "Sarah Miller",
            driverEmail: "sarah@example.com",
            driverPhone: "+1 (555) 456-7890",
            vehicleMake: "Chevrolet",
            vehicleModel: "Malibu",
            vehicleYear: 2022,
            licensePlate: "GHI789",
            registrationNumber: "REG13579",
            insurancePolicy: "INS24680",
            documents: {
                driverLicense: "/placeholder.svg?height=300&width=500",
                vehicleRegistration: "/placeholder.svg?height=300&width=500",
                insuranceProof: "/placeholder.svg?height=300&width=500",
                vehiclePhotos: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
            },
            status: "pending",
            submittedAt: "2024-01-14T16:20:00Z",
        },
    ]

    const getStatusColor = (status) => {
        switch (status) {
            case "pending":
                return "bg-yellow-100 text-yellow-800"
            case "approved":
                return "bg-green-100 text-green-800"
            case "rejected":
                return "bg-red-100 text-red-800"
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
                                placeholder="Search requests..."
                                className="pl-10"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Button
                                variant="default"
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
                                Approved
                            </Button>
                            <Button
                                variant="outline"
                            >
                                Rejected
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Verification Requests List */}
            <div className="space-y-4">
                {verificationRequests.map((request) => (
                    <Card key={request.id}>
                        <CardContent className="p-6">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center space-x-4">
                                        <h3 className="text-lg font-semibold">#{request.requestNumber}</h3>
                                        <Badge className={getStatusColor(request.status)}>{request.status}</Badge>
                                        <span className="text-sm text-gray-500 flex items-center">
                                            <Clock className="h-4 w-4 mr-1" />
                                            {new Date(request.submittedAt).toLocaleDateString()}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                                        <div className="flex items-center">
                                            <User className="h-4 w-4 mr-2" />
                                            <div>
                                                <p className="font-medium text-gray-900">{request.driverName}</p>
                                                <p>{request.driverEmail}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <Car className="h-4 w-4 mr-2" />
                                            <div>
                                                <p className="font-medium text-gray-900">
                                                    {request.vehicleMake} {request.vehicleModel} ({request.vehicleYear})
                                                </p>
                                                <p>{request.licensePlate}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <FileText className="h-4 w-4 mr-2" />
                                            <div>
                                                <p className="font-medium text-gray-900">Registration #{request.registrationNumber}</p>
                                                <p>Insurance #{request.insurancePolicy}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            <div>
                                                <p className="font-medium text-gray-900">Submitted</p>
                                                <p>{new Date(request.submittedAt).toLocaleString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex space-x-2">
                                    <Button variant="outline" size="sm">
                                        <Eye className="h-4 w-4 mr-2" />
                                        View
                                    </Button>
                                    {request.status === "pending" && (
                                        <>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="text-red-600"
                                            >
                                                <XCircle className="h-4 w-4 mr-2" />
                                                Reject
                                            </Button>
                                            <Button
                                                size="sm"
                                                className="bg-green-600 text-white hover:bg-green-700"
                                            >
                                                <CheckCircle className="h-4 w-4 mr-2" />
                                                Approve
                                            </Button>
                                        </>
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