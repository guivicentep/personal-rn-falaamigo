import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import imgLogo from '../../assets/logo2.png';
import imgFooter from '../../assets/pessoas.png';

import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

export default function LoginVoluntary() {
    const navigation = useNavigation();

    function navigateToHome() {
        navigation.navigate('Home');
    }

    function navigateToRetrievePassword() {
        navigation.navigate('RetrievePassword');
    }

    function navigateToVoluntaryRegister() {
        navigation.navigate('VoluntaryRegister');
    }

    function navigateToVoluntaryProfile() {
        navigation.navigate('VoluntaryProfile');
    }

    return (
        <ScrollView style={styles.container}>
           <View style={styles.header}>
                <Image source={imgLogo} style={styles.imgLogo}/>
                <TouchableOpacity onPress={navigateToHome}>
                <Feather name="arrow-left" size={40}/>
                </TouchableOpacity>
            </View>   
            
            <View style={styles.body}>
                <Text style={styles.txtHello}>{'olá,\n'}voluntário!</Text>
                <TextInput  style={styles.txtName}placeholder="Informe seu login"/>
                <TextInput  style={styles.txtName2}secureTextEntry={true} placeholder="Informe sua senha"/>
                <TouchableOpacity onPress= {navigateToRetrievePassword}>
                <Text style={styles.txtLosePassword}>Esqueci minha senha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.continueButton} 
                onPress={navigateToVoluntaryProfile}>
                    <Text style={styles.continueButtonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToVoluntaryRegister}>
                <Text style={styles.txtCadastro}>Quero me cadastrar</Text>
                </TouchableOpacity>
  
                <Image source={imgFooter} style={styles.imgFooter}/>   
        
            </View>
        </ScrollView>
    )
}
