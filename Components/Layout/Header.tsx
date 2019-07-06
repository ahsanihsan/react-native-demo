import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { Appbar } from 'react-native-paper';


const Header = (props: any) => {
    return (
      <Appbar.Header>
        <Appbar.BackAction
        />
        <Appbar.Content
          title={props.title}
        />
      </Appbar.Header>
    );
}

export default Header;