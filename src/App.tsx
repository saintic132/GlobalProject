import React from 'react';
import {Container} from "./components/Container/Container";
import style from './App.module.css'

function App() {
    return (
        <div className={style.app__container}>
            <Container/>
        </div>
    );
}

export default App;
