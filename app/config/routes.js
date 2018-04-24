import React from 'react';
import {StyleSheet} from 'react-native';
import {Scene, Router, ActionConst, Stack, Modal, Tabs} from 'react-native-router-flux';

//Splash Component
import Splash from '../components/Splash/Splash';

//Authentication Scenes
import Welcome from '../modules/auth/scenes/Welcome';
import Register from '../modules/auth/scenes/Register';
import CompleteProfile from '../modules/auth/scenes/CompleteProfile';
import Login from '../modules/auth/scenes/Login';
import ForgotPassword from '../modules/auth/scenes/ForgotPassword';
import Home from '../modules/home/scenes/Home';
import Profile from "../modules/profile/scenes/Profile/Profile";

//Import Store, actions
import store from '../redux/store'
import {checkLoginStatus} from "../modules/auth/actions";

import {color, navTitleStyle} from "../styles/theme";


let tabBarStyle = StyleSheet.create({
    container: {
        backgroundColor: color.brandPrimary,
        opacity: 1
    }
});

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            isReady: false,
            isLoggedIn: false
        }
    }

    componentDidMount() {
        let _this = this;
        store.dispatch(checkLoginStatus((isLoggedIn) => {
            _this.setState({isReady: true, isLoggedIn});
        }));
    }

    render() {
        if (!this.state.isReady) {
            return <Splash/>;
        }

        return (
            <Router>
                <Scene key="root" hideNavBar
                       navigationBarStyle={{backgroundColor: "#fff"}}
                       titleStyle={navTitleStyle}
                       backButtonTintColor={color.black}>
                    <Stack key="Auth" initial={!this.state.isLoggedIn}>
                        <Scene key="Welcome" component={Welcome} title="" initial={true} hideNavBar/>
                        <Scene key="Register" component={Register} title="Register" back/>
                        <Scene key="CompleteProfile" component={CompleteProfile} title="Select Username"/>
                        <Scene key="Login" component={Login} title="Login"/>
                        <Scene key="ForgotPassword" component={ForgotPassword} title="Forgot Password"/>
                    </Stack>

                    <Stack key="Main" initial={this.state.isLoggedIn}>
                        <Scene key='MainRoot' tabs={true} tabBarStyle={tabBarStyle.container}>
                            <Scene key="Home" component={Home} title="Home" initial={true} type={ActionConst.REPLACE}/>
                            <Scene key="Profile" component={Profile} title="Profile" type={ActionConst.REPLACE}/>
                        </Scene>
                    </Stack>
                </Scene>
            </Router>
        )
    }
}