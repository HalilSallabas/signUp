import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
                    placeholderStyle={styles.placeholder}
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
        height: hp('5.3%'), // 35,
        width: wp('60%'), // 250,
        maxHeight: 35,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        color: '#999',
        fontSize: wp('2.8%'), // 12,
        fontWeight: 'bold',
        marginTop: 10,
        elevation: 2,
    },
    placeholder: {
        color: '#60656b',
        marginLeft: 10,
        paddingLeft: 15
    }
});
