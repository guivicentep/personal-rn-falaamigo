import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: Constants.statusBarHeight + 15,

    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    buttonClose: {
    alignItems:'flex-end'
        
    },
    body:{
        alignItems: 'center'
    },


    headerTextBold: {
        fontWeight: 'bold',
        textAlign: 'center'
    },

    title: {
        fontSize: 25,
        marginBottom: 16,
        marginTop: 20,
        color: '#149445',
       
    },
    imgTopo:{
        resizeMode: "contain",
        height: 110,
        width: 90
    },

    description: {
        fontSize: 20,
        lineHeight: 24,
        marginBottom: 10,
        marginTop: 30,
        textAlign: "center"
    },

    name: {
        fontSize: 20,
        color: '#41414d',
        fontWeight: 'bold',
        textAlign: "center"
    },
    allTexts: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center'
    },
    findFriendsButton: {
        backgroundColor: '#F46524',
        borderRadius: 40,
        height: 50,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    findFriendsButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    findFriendsButton2: {
        backgroundColor: '#149445',
        borderRadius: 40,
        height: 50,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    findFriendsButtonText2: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    findFriendsButton3: {
        backgroundColor: '#4040ff',
        borderRadius: 40,
        height: 50,
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 50
    },

    findFriendsButtonText3: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    },

    imgPerson:{
        height: 160, width: 130
    },

    imgStars:{
        height: 50, width: 250
    },
});