import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <>
            <Header/>
            <div className='app-wrapper'>
                <Navbar/>
                {/*<Profile/>*/}
                <div className='app-wrapper-content'>
                    <Dialogs/>
                </div>
            </div>
        </>
    );
}

export default App;
