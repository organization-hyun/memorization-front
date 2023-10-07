import React from 'react';
import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Main";
import Detail from "./Detail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/detail" element={<Detail/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
