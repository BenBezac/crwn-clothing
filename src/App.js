import React from 'react';
import {Route, Switch} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/shop" component={ShopPage} />
                <Route exact path="/sign-in" component={SignInAndSignUpPage} />
            </Switch>
        </div>
    );
}

export default App;
