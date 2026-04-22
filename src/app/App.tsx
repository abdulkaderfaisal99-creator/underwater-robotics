import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Sponsor from "./pages/Sponsor";
import RoboSub from "./pages/RoboSub";
import RoboSub2026 from "./pages/RoboSub2026";
import WFSA2023 from "./pages/WFSA2023";
import WFSA2023Team from "./pages/WFSA2023Team";
import WFSA2024 from "./pages/WFSA2024";
import WFSA2024Team from "./pages/WFSA2024Team";
import WFSA2025 from "./pages/WFSA2025";
import WFSA2025Team from "./pages/WFSA2025Team";
import ContactUs from "./pages/ContactUs";
import Stories from "./pages/Stories";
import Papers from "./pages/Papers";
import Members from "./pages/Members";
import Donate from "./pages/Donate";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/papers" element={<Papers />} />
            <Route path="/sponsor" element={<Sponsor />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/robosub" element={<RoboSub />} />
            <Route
              path="/robosub-2026"
              element={<RoboSub2026 />}
            />
            <Route path="/wfsa-2026" element={<WFSA2023 />} />
            <Route
              path="/wfsa-2026-team"
              element={<WFSA2023Team />}
            />
            <Route path="/wfsa-2024" element={<WFSA2024 />} />
            <Route
              path="/wfsa-2024-team"
              element={<WFSA2024Team />}
            />
            <Route path="/wfsa-2025" element={<WFSA2025 />} />
            <Route
              path="/wfsa-2025-team"
              element={<WFSA2025Team />}
            />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}