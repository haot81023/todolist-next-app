"use client"

import React, {useState, useEffect} from "react"
import { Card, CardContent } from "@/components/ui/card";

export default function DemoUseEffect() {

    const [visitCount, setVisitCount] = useState(0)
    const [sesiontime, setSesionTime] = useState(0)

    useEffect(() => {
        const savedCount = parseInt(localStorage.getItem("visitCount")) || 0;
        setVisitCount(savedCount + 1);
        localStorage.setItem("visitCount", savedCount +1);

        //Dem thoi gian phien
        const startTime = Date.now();
        const interval = setInterval(() => {
            setSesionTime(Math.floor(Date.now() - startTime) / 1000)
        }, 1000)
    }, [])
    return (
        <div className="p-8 space-y-4">
            <card className="bg-blue-100 shadow-md rounded-2xl p-6">
                <cardContent>
                    <h2 className="text-2xl font-bold text-blue-900 mb-2">Bộ đếm lượt truy cập</h2>
                    <p className="text-lg text-blue-700">Số lượt truy cập: {visitCount}</p>
                    <p className="text-lg text-blue-700">Thời gian phiên hiện tại: {sesiontime} giây</p>
                </cardContent>
            </card>
        </div>
    )
}