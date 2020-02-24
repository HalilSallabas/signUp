import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Input from '../components/Input';
import MyButton from '../components/MyButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class SignUp extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity>
              <View style={styles.closeButton}>
                <Text style={styles.closeText}>X</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            <Text style={[styles.contentItem, styles.title]}>
              SENİ HEMEN KAYDEDİYORUZ
            </Text>
            <Text style={[styles.contentItem, styles.phone]}>
              CEP TELEFONUN
            </Text>
            <Input placeholder="INPUT" />
            <MyButton></MyButton>
            <TouchableOpacity>
              <Text style={[styles.contentItem, styles.signIn]}>GİRİŞ YAP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
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
    height: hp('47%'), // 350,
    width: wp('67%'),
    // maxHeight: hp('53%'), // 350,
    // maxWidth: wp('67%'), // 280,
    padding: 10,
    paddingTop: 0,
    borderRadius: 10,
    elevation: 12,

    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  header: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 7,
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
    elevation: 10,
  },
  closeText: {
    color: '#79808d',
    fontSize: 13,
  },
  contentItem: {
    paddingTop: 8,
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
    color: '#333435',
  },
});
