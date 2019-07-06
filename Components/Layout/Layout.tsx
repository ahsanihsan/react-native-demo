import React, {Component} from 'react';
import Header from './Header';


const Layout = (props: any) => {  
    return (
        <React.Fragment>
            <Header title = {props.header}/>
            {props.children}
        </React.Fragment>
    );
}

export default Layout;