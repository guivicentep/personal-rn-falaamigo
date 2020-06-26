import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: Constants.statusBarHeight + 2,

    },
    arrow:{
        marginLeft: 250
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    imgLogo: {
        resizeMode: "contain", height: 180, width: 160
    },
    body: {
        marginTop: 40,
        alignItems: 'center',
        marginBottom: 30
    },  
    
    findFriendsButton: {
        backgroundColor: '#149445',
        borderRadius: 20,
        height: 80,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    findFriendsButtonText: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold'
    },
    createVoluntary: {
        alignItems: 'center',
        marginTop: 30
    },

    createVoluntaryText: {
        color: '#149445',
        fontSize: 16,
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
    retrieveText:{
        fontSize: 25,
        marginBottom: 10
    },
    emailText: {
        fontSize: 20, 

        textAlign: 'center', 
        marginBottom: 70
    },

});