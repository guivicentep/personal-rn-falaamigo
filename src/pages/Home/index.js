import React, {useState, useEffect} from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import styles from './styles';
import api from '../../services/api';
import logoTecban from '../../assets/logoTecban.png';


export default function Home() {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        api.get('persons').then(response => {
            setPersons(response.data);
        })
    }, []);


    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoTecban} style={styles.logoTecban}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>8 funcionários</Text>.
                </Text>
            </View>
            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.description}>Escolha um dos funcionários e conheça seu trabalho!</Text>

            <FlatList 
                style={styles.incidentList}
                showsVerticalScrollIndicator={false}
                data={persons}
                keyExtractor={person => person.id}

                renderItem={({item: person}) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>Funcionário: </Text>
                        <Text style={styles.incidentValue}>{person.name}</Text>
    
                        <Text style={styles.incidentProperty}>Idade </Text>
                        <Text style={styles.incidentValue}>{person.age}</Text>
    
                        <Text style={styles.incidentProperty}>Área </Text>
                        <Text style={styles.incidentValue}>{person.area}</Text>
    
                        <TouchableOpacity 
                        style={styles.detailsButton} 
                        /*onPress={() => navigateToDetail(incident)}>*/>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#e02041"></Feather>
                        </TouchableOpacity>
                    </View>
                    
                    )}
            />
                
            

            
        </View>
        
    );
}