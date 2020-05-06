import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/Header/Header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';

import { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { setCurrentUser } from './redux/user/userActions';

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapshot) => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data(),
                    });
                });
            }

            setCurrentUser(userAuth);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        const { currentUser } = this.props;
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route
                        exact
                        path="/sign-in"
                        render={() =>
                            currentUser ? (
                                <Redirect to="/" />
                            ) : (
                                <SignInAndSignUpPage />
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
