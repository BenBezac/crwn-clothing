import React from 'react';
import {Route} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";

function App() {
    return (
        <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
        </div>
    );
}

export default App;
