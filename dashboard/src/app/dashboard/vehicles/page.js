import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Plus, Search, Edit, Trash2, Eye, Car, MapPin, DollarSign } from "lucide-react"
import Image from "next/image"

const page = () => {
    const vehicles = [
        {
            id: "1",
            make: "Tesla",
            model: "Model 3",
            year: 2023,
            type: "Electric",
            licensePlate: "ABC123",
            status: "available",
            pricePerDay: 89,
            location: "San Francisco, CA",
            mileage: 15000,
            fuelType: "Electric",
            transmission: "Automatic",
            seats: 5,
            image: "/images/placeholder.svg?height=200&width=300",
        },
        {
            id: "2",
            make: "BMW",
            model: "X5",
            year: 2022,
            type: "SUV",
            licensePlate: "XYZ789",
            status: "rented",
            pricePerDay: 125,
            location: "Los Angeles, CA",
            mileage: 25000,
            fuelType: "Gasoline",
            transmission: "Automatic",
            seats: 7,
            image: "/images/placeholder.svg?height=200&width=300",
        },
        {
            id: "3",
            make: "Mercedes",
            model: "C-Class",
            year: 2023,
            type: "Sedan",
            licensePlate: "DEF456",
            status: "maintenance",
            pricePerDay: 95,
            location: "New York, NY",
            mileage: 8000,
            fuelType: "Gasoline",
            transmission: "Automatic",
            seats: 5,
            image: "/images/placeholder.svg?height=200&width=300",
        },
        {
            id: "4",
            make: "Audi",
            model: "A4",
            year: 2022,
            type: "Sedan",
            licensePlate: "GHI789",
            status: "available",
            pricePerDay: 85,
            location: "Chicago, IL",
            mileage: 18000,
            fuelType: "Gasoline",
            transmission: "Automatic",
            seats: 5,
            image: "/images/placeholder.svg?height=200&width=300",
        },
    ]
    const getStatusColor = (status) => {
        switch (status) {
            case "available":
                return "bg-green-100 text-green-800"
            case "rented":
                return "bg-blue-100 text-blue-800"
            case "maintenance":
                return "bg-yellow-100 text-yellow-800"
            case "inactive":
                return "bg-gray-100 text-gray-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <div className="space-y-6">
            {/* Filters */}
            <Card>
                <CardContent className="">
                    <div className="flex flex-col sm:flex-row gap-4 bg-card">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                                placeholder="Search vehicles..."
                                className="pl-10"
                            />
                        </div>
                        <div className="flex gap-2">
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="All" />
                                </SelectTrigger>
                                <SelectContent className="bg-card">
                                    <SelectGroup>
                                        <SelectItem value="all">All</SelectItem>
                                        <SelectItem value="available">Available</SelectItem>
                                        <SelectItem value="rented">Rented</SelectItem>
                                        <SelectItem value="maintenance">Maintenance</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Button >
                                <Plus className="h-4 w-4 mr-2" />
                                Add Vehicle
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Vehicle Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehicles.map((vehicle) => (
                    <Card key={vehicle.id} className="overflow-hidden pt-0">
                        <div className="aspect-video bg-blue-900 h-60">
                            <Image
                                src={vehicle.image || "/placeholder.svg"}
                                alt={`${vehicle.make} ${vehicle.model}`}
                                width={100}
                                height={100}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-lg">
                                        {vehicle.make} {vehicle.model}
                                    </CardTitle>
                                    <CardDescription>
                                        {vehicle.year} • {vehicle.licensePlate}
                                    </CardDescription>
                                </div>
                                <Badge className={getStatusColor(vehicle.status)}>{vehicle.status}</Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-gray-600">
                                    <Car className="h-4 w-4 mr-2" />
                                    {vehicle.type} • {vehicle.seats} seats • {vehicle.transmission}
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <MapPin className="h-4 w-4 mr-2" />
                                    {vehicle.location}
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <DollarSign className="h-4 w-4 mr-2" />${vehicle.pricePerDay}/day
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-4 pt-4 border-t">
                                <span className="text-sm text-gray-500">{vehicle.mileage.toLocaleString()} miles</span>
                                <div className="flex space-x-2">
                                    <Button variant="ghost" size="sm">
                                        <Eye className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                        <Edit className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                        <Trash2 className="h-4 w-4" />
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