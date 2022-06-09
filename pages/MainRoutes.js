import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LeftMenu from './components/applications/leftMenu/LeftMenu'

function MainRoutes() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/applications" element={<LeftMenu />} />
                </Routes>
            </Router>
        </div>

    )
}

export default MainRoutes