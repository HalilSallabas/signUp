import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class MyButton extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.button}>
                <View style={styles.view}>
                    <Text style={styles.text}>DEVAM</Text>
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    button: {
        height: hp('6%'), //40,
        width: wp('60%'), // 250,
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: '#d1f28a',
        marginTop: 10,
    },
    view: {
        flex:1,
        margin: 4,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2
    },
    text: {
        color: '#60656b',
        fontWeight: 'bold',
        fontSize: wp('3.2%'), // 12
    }
});
