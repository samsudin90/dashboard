import React from "react";

const TopCard = () => {
    return(
        <div className="grid lg:grid-cols-5 gap-4 p-4">
            <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
                <div className="flex flex-col w-full pb-4">
                    <p className="text-2xl font-bold">Rp. 1,800,000</p>
                    <p className="text-gray-600">Daily Reveneu</p>
                </div>
                <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                    <span className="text-green-700 text-lg">+27%</span>
                </p>
            </div>
            <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
                <div className="flex flex-col w-full pb-4">
                    <p className="text-2xl font-bold">Rp. 220,980,000</p>
                    <p className="text-gray-600">YTD Reveneu</p>
                </div>
                <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                    <span className="text-green-700 text-lg">+19%</span>
                </p></div>
            <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
                <div className="flex flex-col w-full pb-4">
                    <p className="text-2xl font-bold">850</p>
                    <p className="text-gray-600">Customers</p>
                </div>
                <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
                    <span className="text-green-700 text-lg">+37%</span>
                </p></div>
        </div>
    )
}

export default TopCard