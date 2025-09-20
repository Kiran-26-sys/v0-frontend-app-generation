"use client"

import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"
import SignUpPage from "./components/SignUpPage"
import ContactPage from "./components/ContactPage"
import UploadPage from "./components/UploadPage"
import Dashboard from "./components/Dashboard"
import Calculator from "./components/Calculator"
import StockAnalyzer from "./components/StockAnalyzer"
import News from "./components/News"
import Navigation from "./components/Navigation"
import PersistentChatbot from "./components/PersistentChatbot"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [uploadedData, setUploadedData] = useState(null)
  const [showChatbot, setShowChatbot] = useState(false)

  const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />
    }
    if (!uploadedData) {
      return <Navigate to="/upload" replace />
    }
    return children
  }

  const AuthRoute = ({ children }) => {
    return !isLoggedIn ? children : <Navigate to="/upload" replace />
  }

  const commonProps = {
    isLoggedIn,
    setIsLoggedIn,
    uploadedData,
    setUploadedData,
  }

  return (
    <div className="min-h-screen bg-gold-light">
      {uploadedData && <Navigation uploadedData={uploadedData} setUploadedData={setUploadedData} />}

      <main>
        <Routes>
          <Route path="/" element={<HomePage {...commonProps} />} />
          <Route
            path="/login"
            element={
              <AuthRoute>
                <LoginPage {...commonProps} />
              </AuthRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRoute>
                <SignUpPage {...commonProps} />
              </AuthRoute>
            }
          />
          <Route path="/contact" element={<ContactPage {...commonProps} />} />
          <Route
            path="/upload"
            element={isLoggedIn ? <UploadPage {...commonProps} /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard {...commonProps} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/calculator"
            element={
              <ProtectedRoute>
                <Calculator {...commonProps} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/stocks"
            element={
              <ProtectedRoute>
                <StockAnalyzer {...commonProps} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/news"
            element={
              <ProtectedRoute>
                <News {...commonProps} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <PersistentChatbot showChatbot={showChatbot} setShowChatbot={setShowChatbot} />
    </div>
  )
}

export default App
