import React, { useState, useEffect } from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import logoImg from '../../assets/logo2.png'



import styles from './styles'


export default function ListaVoluntarios(){

    const navigation = useNavigation();

    function navigateToLoginVoluntary (){
        navigation.navigate('LoginVoluntary');
    }
    return(
        <ScrollView style={styles.container}>

            <View style={styles.header}>
                <Image source={logoImg} style={styles.imgTopo}/>
                
            </View>
            <Text style={styles.title}>{'Agradecemos seu cadastro!'}</Text>
            <Text style={styles.description}>Aqui vão algumas dicas para você conversar com os seus amigos: </Text>
            
            <Text style={styles.allTexts}>- Seja paciente</Text>
            <Text style={styles.allTexts}>- Demonstre empatia</Text>
            <Text style={styles.allTexts}>- Mais do que falar, ouça</Text>
            <Text style={styles.allTexts}>- Seja simpático e receptivo</Text>
            <Text style={styles.allTexts}>- Troque histórias e experiências</Text>

            <TouchableOpacity style={styles.findFriendsButton2} 
                  onPress={navigateToLoginVoluntary}>
                      <Text style={styles.findFriendsButtonText2}>Deixa comigo!</Text>
            </TouchableOpacity>
                
        </ScrollView>
        
    );

}