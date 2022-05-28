import {Main} from "./Main/Main";
import React from "react";
import {Nav} from "./Nav/Nav";

export function Container() {
    return (
        <div>
            <Nav />
            <Main/>
        </div>
    )
}