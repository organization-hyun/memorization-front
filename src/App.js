import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Login from "./routes/Login";
import QuizSheet from "./routes/QuizSheet";
import QuizHistories from "./routes/QuizHistories";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/" element={<Home/>}/>
                // TODO title 전달 방법 알아보기
                <Route path="/glossaries/:id/:title" element={<Detail/>}/>
                <Route path="/glossaries/:glossaryId/quiz/:examType" element={<QuizSheet/>}/>
                <Route path="/exam-histories/:examHistoryId" element={<QuizHistories/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
