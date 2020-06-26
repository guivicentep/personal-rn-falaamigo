import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import imgLogo from '../../assets/logo2.png';
import imgFooter from '../../assets/vovos_login.png';

import styles from './styles';

import { TextInput } from 'react-native-gesture-handler';

export default function LoginSenior() {
    const navigation = useNavigation();

    function navigateToHome() {
        navigation.navigate('Home');
    }

    function navigateToVoluntaryList() {
        navigation.navigate('VoluntaryList');
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={imgLogo} style={styles.imgLogo} />
                <TouchableOpacity onPress={navigateToHome}>
                    <Feather name="arrow-left" size={40}/>
                </TouchableOpacity>
            </View>

            <View style={styles.body}>
                <Text style={styles.txtHello}>olá!</Text>
                <TextInput  style={styles.txtName} placeholder="Qual seu nome?"/>
                <TextInput  style={styles.txtName} keyboardType={'numeric'} placeholder="Qual sua idade?"/>
    
                <TouchableOpacity style={styles.continueButton} 
                onPress={navigateToVoluntaryList}>
                    <Text style={styles.continueButtonText}>Continuar</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.footer}>
                <Image source={imgFooter} style={styles.imgFooter}/>               
            </View>     
        </ScrollView>




    )
}