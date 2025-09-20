"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "./utils/icons.jsx"
import { mockAPI } from "./utils/mockAPI.jsx"
import { SimpleLineChart } from "./components/SimpleLineChart.jsx"

export default function StockAnalyzer() {
  const [stockSymbol, setStockSymbol] = useState("")
  const [stockData, setStockData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const analyzeStock = async (e) => {
    e.preventDefault()
    if (!stockSymbol.trim()) return

    setLoading(true)
    setError("")

    try {
      const response = await mockAPI("/stocks/data", { symbol: stockSymbol.toUpperCase() })
      setStockData(response)
    } catch (err) {
      setError("Failed to fetch stock data")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold animate-fadeInUp">Stock Analyzer</h1>

      <Card className="hover-lift animate-fadeInUp">
        <CardHeader>
          <CardTitle>Search Stock</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={analyzeStock} className="flex gap-2">
            <Input
              value={stockSymbol}
              onChange={(e) => setStockSymbol(e.target.value)}
              placeholder="Enter stock symbol (e.g., AAPL, GOOGL)"
              disabled={loading}
              className="transition-all duration-300 focus:scale-105"
            />
            <Button type="submit" disabled={loading || !stockSymbol.trim()} className="hover-lift">
              {loading ? <Icons.Spinner /> : <Icons.Search />}
            </Button>
          </form>
          {error && <p className="text-red-500 text-sm mt-2 animate-fadeInUp">{error}</p>}
        </CardContent>
      </Card>

      {stockData && (
        <Card className="hover-lift animate-fadeInUp">
          <CardHeader>
            <CardTitle>{stockData.symbol} - Historical Data</CardTitle>
          </CardHeader>
          <CardContent>
            <SimpleLineChart data={stockData.data} lines={[{ key: "price", color: "#3b82f6", label: "Price" }]} />
          </CardContent>
        </Card>
      )}
    </div>
  )
}
