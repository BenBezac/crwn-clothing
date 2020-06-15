import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector, Selector} from 'reselect/lib';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';

import Header from './components/header/header.component';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';

import {firestore, Unsubscribe, User as FirebaseUser} from 'firebase';
import {User, UserActionTypes, UserState} from './redux/user/types';
import {State} from './redux/root-reducer';
import {Dispatch} from 'redux';

interface AppProps {
    setCurrentUser: Function;
    currentUser: User | null;
}

class App extends Component<AppProps> {
    unsubscribeFromAuth: Unsubscribe | null = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(
            async (userAuth: FirebaseUser | null) => {
                if (userAuth) {
                    const userRef: firestore.DocumentReference = await createUserProfileDocument(
                        userAuth
                    );
                    userRef.onSnapshot((snapshot: firestore.DocumentData) => {
                        setCurrentUser({
                            id: snapshot.id,
                            ...snapshot.data(),
                        });
                    });
                }

                setCurrentUser(userAuth);
            }
        );
    }

    componentWillUnmount() {
        if (this.unsubscribeFromAuth) {
            this.unsubscribeFromAuth();
        }
    }

    render() {
        const { currentUser } = this.props;
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route exact path="/checkout" component={CheckoutPage} />
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

const mapStateToProps: Selector<State, UserState> = createStructuredSelector<
    State,
    UserState
>({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
    setCurrentUser: (user: User) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
