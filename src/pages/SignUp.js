import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Input from '../components/Input';
import MyButton from '../components/MyButton';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class SignUp extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <View style={styles.headerLeft}>
                            <View style={styles.headerLeftArea}></View>
                        </View>
                        <View style={styles.headerMid}>
                            <View style={styles.whiteArea}></View>
                        </View>
                        <View style={styles.headerRight}>
                            <View style={styles.headerRightArea}>
                                <View style={styles.closeButton}>
                                    <Text style={styles.closeText}>X</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <Text style={[styles.contentItem, styles.title]}> SENİ HEMEN KAYDEDİYORUZ </Text>
                        <Text style={[styles.contentItem, styles.phone]}> CEP TELEFONUN </Text>
                        <Input placeholder="INPUT" />
                        <MyButton></MyButton>
                        <TouchableOpacity>
                            <Text style={[styles.contentItem, styles.signIn]}> GİRİŞ YAP </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffcb27',
        marginVertical: hp('5%'), // 20,
        marginHorizontal: wp('15%'), // 15,
        height: hp('53%'), // 350,
        width: wp('67%'),
        // maxHeight: hp('53%'), // 350,
        // maxWidth: wp('67%'), // 280,
        padding: 10,
        paddingTop: 0,
        borderRadius: 10,

        // shadowColor: 'black',
        // shadowOpacity: .2,
        // shadowRadius: 3,
        // shadowOffset: {
        //     width: 0,
        //     height: 10
        // },
    },
    header: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerRight: {
        flex: 2,
        backgroundColor: '#ffffff',
    },
    headerRightArea: {
        flex: 1,
        backgroundColor: '#ffcb27',
        borderTopLeftRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 14,
    },
    headerMid: {
        flex: 10,
        backgroundColor: '#ffcb27',
    },
    whiteArea: {
        flex: 1,
        backgroundColor: '#ffffff',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginBottom: 2,
    },
    headerLeft: {
        flex: 2,
        backgroundColor: '#ffffff',
    },
    headerLeftArea: {
        flex: 1,
        backgroundColor: '#ffcb27',
        borderTopRightRadius: 10,
    },
    content: {
        flex: 15,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    closeButton: {
        height: 28,
        width: 28,
        borderRadius: 56,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
    closeText: {
        color: '#79808d',
        fontSize: 13,
    },
    contentItem: {
        paddingTop: 8
    },
    title: {
        fontSize: wp('3.77%'), // 15,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'justify',
        letterSpacing: 2,
    },
    phone: {
        fontSize: wp('2.4%'), // 10,
        fontWeight: 'bold',
    },
    signIn: {
        fontSize: wp('2.8%'), // 11,
        textDecorationLine: 'underline',
        color: '#333435'
    }
});