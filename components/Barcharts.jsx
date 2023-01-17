import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2"
import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

ChartJs.register(
    CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
)

const BarChart = () => {

    const chartData = {
        datasets: [{
            label: 'Sales $',
            data: [1250000, 1300000, 1250000, 1100000, 1400000, 1300000, 1050000],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgb(53, 162, 235, 0.4)'
        }],
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
    }

    const chartOptions = {
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Daily Revenue'
            }
        },
        maintainAspectRatio: false,
        responsive: true
    }


    return (
        <>
            <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    )
}

export default BarChart

export async function getServerSideProps(context) {
    const { projectId } = context.params
    const i = parseInt(projectId)
    const d = Data
    if (i > d.length) return {props : {data : "tidak ada"}}
    const data = d.find(c => c.id === i)
    // Pass data to the page via props
    return { props: { data } }
}