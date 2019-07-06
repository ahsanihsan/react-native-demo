import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';


const Layout = (props: any) => {
    return (
        <React.Fragment>
            <Header title = {props.header}/>
            <Footer/>
        </React.Fragment>
    );
}

export default Layout;