import Image from "next/image"
import { PlayCircle } from "lucide-react";

const page = () => {
    return (
        <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-2 items-center">
                    <div className="animate-slide-up ">
                        <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                            Premium
                            <span className="text-[#00d98b]"> Car Rental </span>
                            Experience
                        </h1>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-[#00d98b] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#00b574] hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex gap-2">
                                <svg fill="#fff" width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        <title>ionicons-v5_logos</title>
                                        <path d="M48,59.49v393a4.33,4.33,0,0,0,7.37,3.07L260,256,55.37,56.42A4.33,4.33,0,0,0,48,59.49Z" />
                                        <path d="M345.8,174,89.22,32.64l-.16-.09c-4.42-2.4-8.62,3.58-5,7.06L285.19,231.93Z" />
                                        <path d="M84.08,472.39c-3.64,3.48.56,9.46,5,7.06l.16-.09L345.8,338l-60.61-57.95Z" />
                                        <path d="M449.38,231l-71.65-39.46L310.36,256l67.37,64.43L449.38,281C468.87,270.23,468.87,241.77,449.38,231Z" />
                                    </g>
                                </svg>
                                <span>Download App</span>
                            </button>
                            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-[#00d98b] hover:text-[#00d98b] transition-all duration-300 flex gap-2">
                                <PlayCircle />
                                <span>Watch Demo</span>
                            </button>
                        </div>
                        <div className="flex items-center space-x-8 mt-12">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">50K+</div>
                                <div className="text-gray-600">Happy Customers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">500+</div>
                                <div className="text-gray-600">Premium Cars</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">24/7</div>
                                <div className="text-gray-600">Support</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative animate-float">
                        <div className="relative z-10">
                            <Image
                                src="/images/banner.jpg"
                                alt="Premium luxury car - VroomGo car rental service"
                                width={600}
                                height={400}
                                className="w-[90%] ml-auto h-auto rounded-2xl shadow-2xl"
                                priority
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            />
                        </div>
                        <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#00d98b] opacity-20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-[#33e0a0] opacity-20 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page
