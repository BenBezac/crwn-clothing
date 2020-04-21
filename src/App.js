import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage";

import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";

class App extends React.Component {
    state = {
        currentUser: null,
    };

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapshot) => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data(),
                        },
                    });
                });

            }

            this.setState({ currentUser: userAuth });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/shop" component={ShopPage} />
                    <Route
                        exact
                        path="/sign-in"
                        component={SignInAndSignUpPage}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
