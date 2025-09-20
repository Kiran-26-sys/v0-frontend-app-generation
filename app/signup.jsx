"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "./utils/icons.jsx"

export default function SignUpPage({ setCurrentPage, setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSignUp = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!")
      return
    }

    setIsLoading(true)

    // Mock signup process
    setTimeout(() => {
      setIsLoading(false)
      setIsLoggedIn(true)
      setCurrentPage("upload")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gold-light flex items-center justify-center">
      <Card className="w-full max-w-md p-8 animate-fadeInUp bg-white/90 backdrop-blur-sm">
        <CardContent>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gold-dark animate-typewriter">Join AI-FinAdvisor</h2>
            <p className="text-gold-medium mt-2 animate-slideInLeft" style={{ animationDelay: "2s" }}>
              Create your account to get started
            </p>
          </div>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
              <label className="block text-sm font-medium text-gold-dark mb-2">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>

            <div className="animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
              <label className="block text-sm font-medium text-gold-dark mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>

            <div className="animate-fadeInUp" style={{ animationDelay: "0.7s" }}>
              <label className="block text-sm font-medium text-gold-dark mb-2">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>

            <div className="animate-fadeInUp" style={{ animationDelay: "0.9s" }}>
              <label className="block text-sm font-medium text-gold-dark mb-2">Confirm Password</label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: "1.1s" }}
            >
              {isLoading ? (
                <>
                  <Icons.Spinner />
                  <span className="ml-2">Creating Account...</span>
                </>
              ) : (
                "Create Account"
              )}
            </Button>
          </form>

          <div className="text-center mt-6 animate-fadeInUp" style={{ animationDelay: "1.3s" }}>
            <p className="text-gold-medium">
              Already have an account?{" "}
              <button
                onClick={() => setCurrentPage("login")}
                className="text-amber-600 hover:text-amber-700 font-medium"
              >
                Sign in
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
