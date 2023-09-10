import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Dashboard from "./pages/Dashboard";
export default function App() {
  return (
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </NextUIProvider>
  )
}
