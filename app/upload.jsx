"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "./utils/icons.jsx"
import { mockAPI } from "./utils/mockAPI.jsx"

export default function UploadPage({ setCurrentPage, setIsLoggedIn, setUploadedData }) {
  const [uploadedFile, setUploadedFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const handleFileUpload = async (e) => {
    e.preventDefault()
    if (!uploadedFile) return

    setUploading(true)
    try {
      const response = await mockAPI("/upload/statement", { file: uploadedFile })
      if (response.success) {
        setUploadedData(response.insights)
        setUploadSuccess(true)
        setTimeout(() => {
          setUploadSuccess(false)
          setCurrentPage("dashboard")
        }, 2000)
      }
    } catch (error) {
      console.error("Upload error:", error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gold-light">
      {/* Navigation for logged-in users */}
      <nav className="bg-gradient-to-r from-amber-50 to-yellow-50 shadow-sm border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Icons.User />
              <span className="font-bold text-xl gradient-text">AI-FinAdvisor</span>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setIsLoggedIn(false)
                setCurrentPage("home")
              }}
              className="border-amber-300 text-gold-dark hover:bg-amber-100"
            >
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-12">
        <div className="max-w-2xl mx-auto px-4 w-full">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl font-bold text-gold-dark mb-6 animate-typewriter">Upload Your Bank Statement</h2>
            <p className="text-xl text-gold-medium animate-slideInLeft" style={{ animationDelay: "3.5s" }}>
              Get instant AI-powered insights from your financial data. We support PDF, CSV, and Excel formats.
            </p>
          </div>

          <Card
            className="p-8 hover-lift animate-fadeInUp bg-white/80 backdrop-blur-sm border-amber-200"
            style={{ animationDelay: "4s" }}
          >
            <CardContent>
              <form onSubmit={handleFileUpload} className="space-y-6">
                <div className="border-2 border-dashed border-amber-300 rounded-lg p-8 text-center hover:border-yellow-500 transition-all duration-300 hover:bg-yellow-50">
                  <div className="text-4xl text-amber-400 mb-4 flex justify-center animate-bounce-custom">
                    <Icons.Upload />
                  </div>
                  <div className="space-y-2">
                    <p
                      className="text-lg font-medium text-gold-dark animate-slideInRight"
                      style={{ animationDelay: "4.2s" }}
                    >
                      {uploadedFile ? uploadedFile.name : "Choose your bank statement"}
                    </p>
                    <p className="text-sm text-gold-medium animate-fadeInUp" style={{ animationDelay: "4.4s" }}>
                      PDF, CSV, or Excel files accepted
                    </p>
                    <input
                      type="file"
                      onChange={(e) => setUploadedFile(e.target.files?.[0] || null)}
                      className="hidden"
                      id="file-upload"
                      accept="*"
                    />
                    <label
                      htmlFor="file-upload"
                      className="inline-block bg-gradient-to-r from-yellow-600 to-amber-600 text-white px-6 py-2 rounded-md cursor-pointer hover:from-yellow-700 hover:to-amber-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Browse Files
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!uploadedFile || uploading}
                  className="w-full py-3 text-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700"
                >
                  {uploading ? (
                    <>
                      <Icons.Spinner />
                      <span className="ml-2 animate-pulse">Analyzing Your Data...</span>
                    </>
                  ) : (
                    <span className="animate-glow">Upload & Get AI Insights</span>
                  )}
                </Button>
              </form>

              {uploadSuccess && (
                <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md text-center animate-fadeInUp">
                  <Icons.CheckCircle />
                  <span className="ml-2 animate-typewriter">
                    Upload successful! Redirecting to your personalized dashboard...
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
