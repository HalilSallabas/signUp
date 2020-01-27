import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default class Input extends Component {
    state = {
        text: ''
    };
    render() {
        return (
            <View>
                <TextInput
                    keyboardType='phone-pad'
                    {...this.props}
                    placeholderTextColor="#60656b"
                    style={styles.input}
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
                ></TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 35,
        width: 250,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        color: '#999',
        fontSize: 12,
        fontWeight: '600',
        marginTop: 10,
        elevation: 2
    }
});
