"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "./utils/icons.jsx"
import { mockAPI } from "./utils/mockAPI.jsx"
import { SimpleLineChart } from "./components/SimpleLineChart.jsx"

export default function Dashboard({ uploadedData }) {
  const [dashboardData, setDashboardData] = useState(null)

  useEffect(() => {
    const loadDashboardData = async () => {
      const data = await mockAPI("/dashboard/data", { uploadedData })
      setDashboardData(data)
    }
    loadDashboardData()
  }, [uploadedData])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6 bg-gold-light min-h-screen">
      <div className="flex items-center justify-between animate-fadeInUp">
        <h1 className="text-3xl font-bold text-gold-dark animate-letterSpacing">Welcome back!</h1>
        {uploadedData && (
          <div className="flex items-center gap-2 text-green-600 animate-slideInRight">
            <Icons.CheckCircle />
            <span className="text-sm animate-fadeInUp">Statement analyzed</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Total Savings",
            color: "text-green-600",
            value: uploadedData ? (uploadedData.totalIncome - uploadedData.totalExpenses).toLocaleString() : "15,400",
            subtitle: uploadedData ? `${uploadedData.savingsRate}% savings rate` : "+12% from last month",
          },
          {
            title: "Monthly Expenses",
            color: "text-blue-600",
            value: uploadedData ? uploadedData.totalExpenses.toLocaleString() : "2,300",
            subtitle: uploadedData ? `Top: ${uploadedData.topCategories[0]}` : "-5% from last month",
          },
          {
            title: "Investment Growth",
            color: "text-purple-600",
            value: "+8.5%",
            subtitle: "This year",
          },
        ].map((card, index) => (
          <Card
            key={index}
            className="hover-lift animate-fadeInUp bg-white/90 backdrop-blur-sm border-amber-200"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <CardTitle
                className={`${card.color} animate-slideInLeft`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p
                className="text-2xl font-bold text-gold-dark animate-glow"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                ${card.value}
              </p>
              <p
                className="text-sm text-gold-medium animate-fadeInUp"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                {card.subtitle}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card
        className="hover-lift animate-fadeInUp bg-white/90 backdrop-blur-sm border-amber-200"
        style={{ animationDelay: "0.4s" }}
      >
        <CardHeader>
          <CardTitle className="text-gold-dark animate-slideInRight">Savings vs Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          {dashboardData ? (
            <SimpleLineChart
              data={dashboardData.savingsData}
              lines={[
                { key: "savings", color: "#10b981", label: "Savings" },
                { key: "expenses", color: "#ef4444", label: "Expenses" },
              ]}
            />
          ) : (
            <div className="flex items-center justify-center h-64">
              <Icons.Spinner />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
