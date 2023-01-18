import Header from "@/components/Header";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs"
import { data } from "@/data/data";

export default function Customers() {
    return (
        <div className="bg-gray-100 h-screen">
            <Header title={"Customers"} />
            <div className="p-4">
                <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
                    <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                        <span>Name</span>
                        <span className="sm:text-left text-right">Email</span>
                        <span className="hidden md:grid">Last Order</span>
                        <span className="hidden sm:grid">Method</span>
                    </div>
                    <ul className="w-full">
                        {data.map((p, i) => (
                            <li key={i} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                                <div className="flex items-center">
                                    <div className="bg-purple-100 p-3 rounded-lg">
                                        <BsPersonFill className="text-purple-800" />
                                    </div>
                                    <p className="pl-4 capitalize">{p.name.first + ' ' + p.name.last}</p>
                                </div>
                                <p className="sm:text-left text-right text-blue-400 cursor-pointer text-sm sm:text-base">{p.name.first}@gmail.com</p>
                                <p className="hidden md:flex">{p.date}</p>
                                <div className="hidden sm:flex justify-between items-center">
                                    <p>{p.method}</p>
                                    <BsThreeDotsVertical />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}