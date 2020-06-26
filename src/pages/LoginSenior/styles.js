import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: Constants.statusBarHeight + 6,

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 20
    },
    imgLogo: {
        resizeMode: "contain", height: 110, width: 90
    },
    body: {
        marginTop: 10,
        alignItems: 'center'
    },  
    txtName: {
        height: 50, 
        width: 300,
        borderColor: 'gray', 
        borderWidth: 1 ,
        borderRadius: 20,
        fontSize: 20,
        marginBottom: 40,
        paddingHorizontal: 15
    },
    txtHello: {
        color: '#149445',
        fontSize: 60,
        textAlign: 'center',
        marginBottom: 30
    },

    continueButton: {
        backgroundColor: '#F46524',
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: '#808080',
        height: 70,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',

    },

    continueButtonText: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold'
    },

    footer: {
        alignItems: 'center'
    }, 
    imgFooter:{
        resizeMode: "contain",
        height: 400,
        width: 350,
    },


});