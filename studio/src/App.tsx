import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
export default function App() {
  return (
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
        </Routes>
      </Router>
    </NextUIProvider>
  )
}
