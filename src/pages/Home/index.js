import React from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import logoHome from '../../assets/logo2.png';
import imgFooter from '../../assets/vovo2.png';

import styles from './styles';

export default function Home(){
    const navigation = useNavigation();

    function navigateToLoginSenior() {
        navigation.navigate('LoginSenior');
    }

    function navigateToLoginVoluntary() {
        navigation.navigate('LoginVoluntary');
    }


    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={logoHome} style={styles.imgLogo} />
            </View>
            <View style={styles.body}>
                <TouchableOpacity style={styles.findFriendsButton} 
                  onPress={navigateToLoginSenior}>
                    <Text style={styles.findFriendsButtonText}>Encontrar um amigo!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.createVoluntary} onPress={navigateToLoginVoluntary}>
                    <Text style={styles.createVoluntaryText}>Entrar como voluntário</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Image source={imgFooter} style={styles.imgFooter}/>
            </View>
        </ScrollView>
    )
}