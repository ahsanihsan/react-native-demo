import React, {Component} from 'react';
import Layout from '../Layout/Layout';
import { Card, TextInput, Button, Snackbar} from 'react-native-paper';
import { loginStyles } from '../Styles/login';
import { Drawer } from '../../Navigator/DrawerNavigator';

export default class Login extends Component {

    state = {
        userName: '',
        password: '',
        visible: false
    }

    componentDidMount(){
        
    }

    handleSubmit = () => {
        if(this.state.userName === 'user', this.state.password === 'user123'){
            this.props.navigation.navigate("DashboardScreen")
        }else{
            this.setState({ visible: true })
        }
    }

    render() {
        return (
        <Layout header = "Login">
            <Card style = {loginStyles.loginFormContent}>
                <Card.Content>
                    <TextInput
                        style = {loginStyles.inputMargins}
                        label = "Username"
                        mode = "outlined"
                        value = {this.state.userName}
                        onChangeText = {(value) => this.setState({ userName: value })}
                    />
                    <TextInput
                        style = {loginStyles.inputMargins}
                        label = "Password"
                        textContentType = "password"
                        mode = "outlined"
                        value = {this.state.password}
                        onChangeText = {(value) => this.setState({ password: value })}
                    />
                    <Button mode = "contained" onPress = {() => this.handleSubmit()}>Login</Button>
                </Card.Content>
            </Card>
            <Snackbar
                visible={this.state.visible}
                onDismiss={() => this.setState({ visible: false })}
            >
                Invalid username or password!
            </Snackbar>
        </Layout>
        );
    }
}