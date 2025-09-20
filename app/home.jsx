"use client"

import { Button } from "@/components/ui/button"
import { Icons } from "./utils/icons.jsx"

export default function HomePage({ setCurrentPage }) {
  return (
    <div className="min-h-screen bg-gold-light">
      <nav className="bg-gradient-to-r from-amber-50 to-yellow-50 shadow-sm border-b border-amber-200 animate-fadeInUp">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 animate-slideInRight">
              <Icons.User />
              <span className="font-bold text-xl gradient-text">AI-FinAdvisor</span>
            </div>

            <div className="flex items-center space-x-8">
              <button
                onClick={() => setCurrentPage("home")}
                className="text-gold-dark hover:text-amber-800 transition-all duration-300 hover:scale-105 animate-fadeInUp font-medium"
              >
                HOME
              </button>
              <button
                onClick={() => setCurrentPage("login")}
                className="text-gold-dark hover:text-amber-800 transition-all duration-300 hover:scale-105 animate-fadeInUp font-medium"
                style={{ animationDelay: "0.1s" }}
              >
                LOGIN
              </button>
              <button
                onClick={() => setCurrentPage("signup")}
                className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white px-6 py-2 rounded-lg hover:from-yellow-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 animate-fadeInUp font-medium"
                style={{ animationDelay: "0.2s" }}
              >
                SIGN UP
              </button>
              <button
                onClick={() => setCurrentPage("contact")}
                className="text-gold-dark hover:text-amber-800 transition-all duration-300 hover:scale-105 animate-fadeInUp font-medium"
                style={{ animationDelay: "0.3s" }}
              >
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="min-h-screen flex items-center justify-center bg-gold-gradient relative overflow-hidden py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse-custom"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse-custom"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl sm:text-7xl font-bold text-gold-dark mb-8 animate-letterSpacing">
            AI-<span className="gradient-text">FinAdvisor</span>
          </h1>
          <p
            className="text-xl sm:text-2xl text-gold-medium mb-16 max-w-4xl mx-auto leading-relaxed animate-slideInLeft"
            style={{ animationDelay: "0.5s" }}
          >
            Transform your financial future with AI-powered insights. Get personalized recommendations, smart budgeting,
            and investment strategies tailored just for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {[
              {
                icon: Icons.Brain,
                title: "AI-Powered Analysis",
                desc: "Advanced algorithms analyze your spending patterns and provide intelligent insights",
              },
              {
                icon: Icons.ShieldAlt,
                title: "Bank-Level Security",
                desc: "Your financial data is encrypted and protected with industry-standard security",
              },
              {
                icon: Icons.ChartBar,
                title: "Personalized Insights",
                desc: "Get tailored financial recommendations based on your unique spending habits",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center hover-lift animate-fadeInUp bg-white/20 backdrop-blur-sm rounded-xl p-8 border border-amber-200 h-full flex flex-col justify-between"
                style={{ animationDelay: `${0.8 + index * 0.2}s` }}
              >
                <div>
                  <div
                    className="text-5xl mb-6 flex justify-center floating text-amber-600"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <item.icon />
                  </div>
                  <h3
                    className="text-xl font-semibold mb-4 text-gold-dark animate-slideInRight"
                    style={{ animationDelay: `${1 + index * 0.1}s` }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  className="text-gold-medium animate-fadeInUp leading-relaxed"
                  style={{ animationDelay: `${1.2 + index * 0.1}s` }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="text-lg px-10 py-4 animate-fadeInUp hover-lift transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 rounded-xl"
            style={{ animationDelay: "1.5s" }}
            onClick={() => setCurrentPage("signup")}
          >
            Get Started - Join AI-FinAdvisor
          </Button>
        </div>
      </div>

      <div className="py-24 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-4xl sm:text-5xl font-bold text-gold-dark mb-8 animate-typewriter">
              Why Choose AI-FinAdvisor?
            </h2>
            <p
              className="text-xl text-gold-medium max-w-4xl mx-auto leading-relaxed animate-slideInLeft"
              style={{ animationDelay: "3.5s" }}
            >
              Our comprehensive financial platform combines cutting-edge AI technology with user-friendly design to help
              you make smarter financial decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Icons.Upload,
                title: "Smart Upload",
                desc: "Upload bank statements and get instant AI analysis of your financial patterns",
              },
              {
                icon: Icons.Calculator,
                title: "Financial Calculators",
                desc: "Plan your retirement, loans, and investments with our advanced calculators",
              },
              {
                icon: Icons.ChartLine,
                title: "Stock Analysis",
                desc: "Get real-time stock insights and investment recommendations",
              },
              {
                icon: Icons.Newspaper,
                title: "Financial News",
                desc: "Stay updated with the latest financial news and market trends",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center hover-lift animate-fadeInUp bg-white rounded-xl p-8 shadow-lg border border-amber-100 h-full flex flex-col justify-between"
                style={{ animationDelay: `${4 + index * 0.2}s` }}
              >
                <div>
                  <div className="text-5xl mb-6 flex justify-center text-amber-600 floating">
                    <feature.icon />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gold-dark">{feature.title}</h3>
                </div>
                <p className="text-gold-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-24 bg-gradient-to-r from-yellow-100 to-amber-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gold-dark mb-12 animate-typewriter">
            About AI-FinAdvisor
          </h2>
          <div className="space-y-8 text-lg sm:text-xl text-gold-medium max-w-4xl mx-auto">
            <p className="animate-slideInLeft leading-relaxed" style={{ animationDelay: "0.5s" }}>
              AI-FinAdvisor is your personal financial companion, designed to democratize financial planning and make
              expert-level financial advice accessible to everyone.
            </p>
            <p className="animate-slideInRight leading-relaxed" style={{ animationDelay: "1s" }}>
              Our platform uses advanced machine learning algorithms to analyze your financial data, identify spending
              patterns, and provide personalized recommendations to help you achieve your financial goals.
            </p>
            <p className="animate-fadeInUp leading-relaxed" style={{ animationDelay: "1.5s" }}>
              Whether you're planning for retirement, managing debt, or looking to invest, AI-FinAdvisor provides the
              insights and tools you need to make informed financial decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
