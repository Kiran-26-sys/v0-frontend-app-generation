"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "./utils/icons.jsx"
import { mockAPI } from "./utils/mockAPI.jsx"

export default function Calculator() {
  const [calcData, setCalcData] = useState({
    currentAge: "",
    retirementAge: "",
    currentSavings: "",
    monthlyContribution: "",
    returnRate: "",
  })
  const [result, setResult] = useState(null)
  const [calculating, setCalculating] = useState(false)

  const handleCalculate = async (e) => {
    e.preventDefault()
    setCalculating(true)

    try {
      const response = await mockAPI("/calculator/retirement", {
        currentAge: Number.parseInt(calcData.currentAge),
        retirementAge: Number.parseInt(calcData.retirementAge),
        currentSavings: Number.parseFloat(calcData.currentSavings),
        monthlyContribution: Number.parseFloat(calcData.monthlyContribution),
        returnRate: Number.parseFloat(calcData.returnRate),
      })
      setResult(response)
    } catch (error) {
      console.error("Calculation error:", error)
    } finally {
      setCalculating(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold animate-fadeInUp">Retirement Calculator</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="hover-lift animate-fadeInUp">
          <CardHeader>
            <CardTitle>Input Your Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCalculate} className="space-y-4">
              {[
                { id: "currentAge", label: "Current Age", type: "number" },
                { id: "retirementAge", label: "Retirement Age", type: "number" },
                { id: "currentSavings", label: "Current Savings ($)", type: "number" },
                { id: "monthlyContribution", label: "Monthly Contribution ($)", type: "number" },
                { id: "returnRate", label: "Expected Annual Return (%)", type: "number", step: "0.1" },
              ].map((field, index) => (
                <div key={field.id} className="animate-slideInRight" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <Input
                    id={field.id}
                    type={field.type}
                    step={field.step}
                    value={calcData[field.id]}
                    onChange={(e) => setCalcData({ ...calcData, [field.id]: e.target.value })}
                    required
                    className="transition-all duration-300 focus:scale-105"
                  />
                </div>
              ))}
              <Button type="submit" className="w-full hover-lift" disabled={calculating}>
                {calculating ? <Icons.Spinner /> : "Calculate"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="hover-lift animate-fadeInUp">
          <CardHeader>
            <CardTitle>Retirement Projection</CardTitle>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="text-center space-y-4 animate-fadeInUp">
                <div className="text-4xl font-bold text-green-600 animate-pulse-custom">
                  ${result.futureValue.toLocaleString()}
                </div>
                <p className="text-muted-foreground">Estimated retirement savings at age {calcData.retirementAge}</p>
                <div className="bg-blue-50 p-4 rounded-lg hover-lift">
                  <p className="text-sm">
                    Based on your current savings of $
                    {Number.parseFloat(calcData.currentSavings || "0").toLocaleString()}
                    and monthly contributions of $
                    {Number.parseFloat(calcData.monthlyContribution || "0").toLocaleString()}, with an expected{" "}
                    {calcData.returnRate}% annual return.
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                <div className="text-4xl mb-4 flex justify-center floating">
                  <Icons.Calculator />
                </div>
                <p>Enter your details to see your retirement projection</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
