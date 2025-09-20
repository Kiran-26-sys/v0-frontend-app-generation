"use client"

import { useState } from "react"
import HomePage from "./home.jsx"
import LoginPage from "./login.jsx"
import SignUpPage from "./signup.jsx"
import ContactPage from "./contact.jsx"
import UploadPage from "./upload.jsx"
import Dashboard from "./dashboard.jsx"
import Calculator from "./calculator.jsx"
import StockAnalyzer from "./stocks.jsx"
import News from "./news.jsx"
import Navigation from "./navigation.jsx"
import PersistentChatbot from "./chatbot.jsx"
import "./styles.css"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [uploadedData, setUploadedData] = useState(null)
  const [showChatbot, setShowChatbot] = useState(false)

  const renderCurrentPage = () => {
    const pageProps = {
      setCurrentPage,
      isLoggedIn,
      setIsLoggedIn,
      uploadedData,
      setUploadedData,
    }

    switch (currentPage) {
      case "home":
        return <HomePage {...pageProps} />
      case "login":
        return <LoginPage {...pageProps} />
      case "signup":
        return <SignUpPage {...pageProps} />
      case "contact":
        return <ContactPage {...pageProps} />
      case "upload":
        return isLoggedIn ? <UploadPage {...pageProps} /> : <LoginPage {...pageProps} />
      case "dashboard":
        return uploadedData ? (
          <Dashboard {...pageProps} />
        ) : isLoggedIn ? (
          <UploadPage {...pageProps} />
        ) : (
          <LoginPage {...pageProps} />
        )
      case "calculator":
        return uploadedData ? (
          <Calculator {...pageProps} />
        ) : isLoggedIn ? (
          <UploadPage {...pageProps} />
        ) : (
          <LoginPage {...pageProps} />
        )
      case "stocks":
        return uploadedData ? (
          <StockAnalyzer {...pageProps} />
        ) : isLoggedIn ? (
          <UploadPage {...pageProps} />
        ) : (
          <LoginPage {...pageProps} />
        )
      case "news":
        return uploadedData ? (
          <News {...pageProps} />
        ) : isLoggedIn ? (
          <UploadPage {...pageProps} />
        ) : (
          <LoginPage {...pageProps} />
        )
      default:
        return <HomePage {...pageProps} />
    }
  }

  return (
    <div className="min-h-screen bg-gold-light">
      {uploadedData && (
        <Navigation
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          uploadedData={uploadedData}
          setUploadedData={setUploadedData}
        />
      )}
      <main>{renderCurrentPage()}</main>
      <PersistentChatbot showChatbot={showChatbot} setShowChatbot={setShowChatbot} />
    </div>
  )
}
