import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Login from "./routes/Login";
import QuizSheet from "./routes/QuizSheet";
import ExamHistory from "./routes/ExamHistory";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/" element={<Home/>}/>
                // TODO 실제 용어집 이름 전달 필요
                <Route path="/glossaries/:id" element={<Detail title={"테스트"}/>}/>
                <Route path="/glossaries/:glossaryId/quiz" element={<QuizSheet/>}/>
                <Route path="/exam-histories/:examHistoryId" element={<ExamHistory/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
