export const mockAPI = (endpoint, data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      switch (endpoint) {
        case "/auth/login":
          resolve({ success: true, user: { id: 1, name: "John Doe", email: data.email } })
          break
        case "/auth/register":
          resolve({ success: true, user: { id: 1, name: data.name, email: data.email } })
          break
        case "/upload/statement":
          resolve({
            success: true,
            message: "Bank statement processed successfully",
            insights: {
              totalIncome: 5200,
              totalExpenses: 3800,
              savingsRate: 26.9,
              topCategories: ["Groceries", "Utilities", "Entertainment"],
            },
          })
          break
        case "/dashboard/data":
          resolve({
            savingsData: data?.uploadedData
              ? [
                  { month: "Jan", savings: 2400, expenses: 2000 },
                  { month: "Feb", savings: 2600, expenses: 2100 },
                  { month: "Mar", savings: 2800, expenses: 1900 },
                  { month: "Apr", savings: 3000, expenses: 2200 },
                  { month: "May", savings: 3200, expenses: 2000 },
                  { month: "Jun", savings: 3400, expenses: 2300 },
                ]
              : [
                  { month: "Jan", savings: 1200, expenses: 1800 },
                  { month: "Feb", savings: 1300, expenses: 1900 },
                  { month: "Mar", savings: 1400, expenses: 1700 },
                  { month: "Apr", savings: 1500, expenses: 2000 },
                  { month: "May", savings: 1600, expenses: 1800 },
                  { month: "Jun", savings: 1700, expenses: 2100 },
                ],
          })
          break
        case "/calculator/retirement":
          const { currentAge, retirementAge, currentSavings, monthlyContribution, returnRate } = data
          const years = retirementAge - currentAge
          const months = years * 12
          const monthlyRate = returnRate / 100 / 12
          const futureValue =
            currentSavings * Math.pow(1 + monthlyRate, months) +
            monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
          resolve({ futureValue: Math.round(futureValue) })
          break
        case "/chatbot/message":
          const responses = [
            "Great question! For retirement planning, I recommend saving at least 10-15% of your income.",
            "Consider diversifying your portfolio with a mix of stocks, bonds, and index funds.",
            "Emergency funds should cover 3-6 months of expenses. Start building yours today!",
            "Dollar-cost averaging is a great strategy for consistent investing over time.",
            "Tax-advantaged accounts like 401(k) and IRA can significantly boost your savings.",
          ]
          resolve({
            message: responses[Math.floor(Math.random() * responses.length)],
            timestamp: new Date().toLocaleTimeString(),
          })
          break
        case "/stocks/data":
          const stockData = Array.from({ length: 30 }, (_, i) => ({
            date: `Day ${i + 1}`,
            price: 100 + Math.random() * 50 - 25 + i * 0.5,
          }))
          resolve({ data: stockData, symbol: data.symbol })
          break
        case "/news/headlines":
          resolve({
            articles: [
              {
                id: 1,
                title: "Market Reaches New Highs Amid Economic Recovery",
                source: "Financial Times",
                time: "2 hours ago",
              },
              { id: 2, title: "Fed Announces Interest Rate Decision", source: "Reuters", time: "4 hours ago" },
              {
                id: 3,
                title: "Tech Stocks Show Strong Performance This Quarter",
                source: "Bloomberg",
                time: "6 hours ago",
              },
              { id: 4, title: "Cryptocurrency Market Sees Renewed Interest", source: "CoinDesk", time: "8 hours ago" },
              { id: 5, title: "Real Estate Market Trends for 2024", source: "Wall Street Journal", time: "1 day ago" },
            ],
          })
          break
        default:
          resolve({ error: "Endpoint not found" })
      }
    }, 1000)
  })
}
