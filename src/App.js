import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider, theme } from 'antd';
import Signup from "./signup";
import Login from "./login";

function App() {

    
    return (
        // <ConfigProvider
        //     theme={{
        //         algorithm: change.light ? theme.defaultAlgorithm :theme.darkAlgorithm,
        //         components: {
        //             Radio: {
        //                 colorPrimary: '#000000',
        //             },
        //         },
        //         token: {
        //             colorPrimary: change.color,
        //             colorTextBase: change.color,
        //         }
        //     }}
        // >
             <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Signup/>} />
                    <Route exact path="/signinDemo" element={<Login/>} />
                </Routes>
            </BrowserRouter>
        // </ConfigProvider>
    );
}

export default App;