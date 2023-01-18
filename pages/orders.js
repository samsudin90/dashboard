import Header from "@/components/Header";
import { data } from "@/data/data";
import {FaShoppingBag} from "react-icons/fa"
import {BsThreeDotsVertical} from "react-icons/bs"

export default function Orders() {
    return(
        <div className="bg-gray-100 h-screen">
            <Header title={"Orders"} />
            <div className="p-4">
                <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto ">
                    <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-4 grid-cols-2 items-center justify-between cursor-pointer">
                        <span>Order</span>
                        <span className="sm:text-left text-right">Status</span>
                        <span className="hidden md:grid">Last Order</span>
                        <span className="hidden sm:grid">Method</span>
                    </div>
                    <ul>
                        {data.map((o, i) => (
                            <li key={i} className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
                                <div className="flex">
                                    <div className="bg-purple-100 p-3 rounded-lg">
                                        <FaShoppingBag className="text-purple-800"/>
                                    </div>
                                    <div className="pl-4">
                                        <p className="text-gray-800 font-bold">Rp. {o.total.toLocaleString()}</p>
                                        <p className="text-gray-800 text-sm">{o.name.first}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 sm:text-left text-right">
                                    <span className={o.status === 'Processing' ? 'bg-green-200 p-2 rounded-lg' : o.status === 'Completed' ? 'bg-blue-200 p-2 rounded-lg' : 'bg-yellow-200 p-2 rounded-lg'}>{o.status}</span>
                                </p>
                                <p className="hidden md:flex">{o.date}</p>
                                <div className="hidden sm:flex justify-between items-center">
                                    <p>{o.method}</p>
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