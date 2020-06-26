import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: Constants.statusBarHeight + 30,
    },

    imgLogo: {
        resizeMode: "contain", height: 110, width: 90
    },
    body: {
        marginTop: 10,
        alignItems: 'center'
    },  
    header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 20,
        flexDirection: 'row'
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
    imgFooter:{
        resizeMode: "contain",
        height: 300,
        width: 250,
        
    },
    txtName: {
        height: 50, 
        width: 300,
        borderColor: 'gray', 
        borderWidth: 1 ,
        borderRadius: 20,
        fontSize: 20,
        marginBottom: 30,
        paddingHorizontal: 15,
        backgroundColor: '#FFFFFF'
    },
    txtName2: {
        height: 50, 
        width: 300,
        borderColor: 'gray', 
        borderWidth: 1 ,
        borderRadius: 20,
        fontSize: 20,
        marginBottom: 10,
        paddingHorizontal: 15,
        backgroundColor: '#FFFFFF'
    },
    txtHello: {
        color: '#149445',
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 30
    },
    txtLosePassword: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 50
    },
    txtCadastro: {
        color: 'green',
        textAlign: 'center',
        marginTop: 20
        
    },


});