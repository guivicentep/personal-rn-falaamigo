import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: Constants.statusBarHeight + 6,

    },
    headerLogo:{
        alignItems: 'center'
    },
    headerFeather:{
        alignItems: 'flex-end'
    },

    firstImage: {
        resizeMode: "contain", height: 180, width: 160, 
    },
    profile:{
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    body:{
        alignItems: 'center'
    },
    txtName: {
        height: 50, 
        width: 300,
        borderColor: 'gray', 
        borderWidth: 1 ,
        borderRadius: 20,
        fontSize: 20,
        marginBottom: 25,
        paddingHorizontal: 15,
        backgroundColor: '#FFFFFF'
    },
    continueButton: {
        backgroundColor: '#149445',
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: '#808080',
        height: 70,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 35
    },
    continueButtonText: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold'
    },
});