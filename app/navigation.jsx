"use client"

import { Button } from "@/components/ui/button"
import { Icons } from "./utils/icons.jsx"

export default function Navigation({ currentPage, setCurrentPage, uploadedData, setUploadedData }) {
  const navItems = uploadedData
    ? [
        { id: "home", label: "Home", icon: Icons.Home },
        { id: "dashboard", label: "Dashboard", icon: Icons.ChartBar },
        { id: "calculator", label: "Calculator", icon: Icons.Calculator },
        { id: "stocks", label: "Stocks", icon: Icons.ChartLine },
        { id: "news", label: "News", icon: Icons.Newspaper },
      ]
    : [{ id: "home", label: "Home", icon: Icons.Home }]

  return (
    <nav className="bg-gradient-to-r from-amber-50 to-yellow-50 shadow-sm border-b border-amber-200 animate-fadeInUp">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 animate-slideInRight">
            <Icons.User />
            <span className="font-bold text-xl gradient-text">AI-FinAdvisor</span>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 animate-fadeInUp ${
                    currentPage === item.id
                      ? "bg-amber-200 text-amber-800"
                      : "text-gold-dark hover:text-amber-800 hover:bg-amber-100"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon />
                  <span className="animate-slideInLeft" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
                    {item.label}
                  </span>
                </button>
              )
            })}
          </div>

          {uploadedData && (
            <Button
              variant="outline"
              onClick={() => {
                setUploadedData(null)
                setCurrentPage("home")
              }}
              className="hover-lift animate-slideInRight border-amber-300 text-gold-dark hover:bg-amber-100"
            >
              Reset
            </Button>
          )}
        </div>

        <div className="md:hidden pb-4">
          <div className="flex flex-wrap gap-2">
            {navItems.map((item, index) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-all duration-300 hover:scale-105 animate-fadeInUp ${
                    currentPage === item.id
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Icon />
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
