import App from "./App";
import React from "react";

class AppChild extends App {
    render() {
        return(
            <App />
        );
    };

}

export default AppChild;