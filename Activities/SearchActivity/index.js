import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Octicons';

import DetailsCard from './DetailsCard';

const styles = StyleSheet.create({
    FullView: {
        height: '100%'
    },
    titleBar: {
        flexDirection: 'row',
        height: '30%',
        backgroundColor: '#fff',
        marginTop: 25,
        padding: 10,
        elevation: 20,
        shadowColor: '#002',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 2
    },
    SortArea:{
        height: '50%',
        marginTop: 14,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    DetailsCard: {
        height: '30%',
    },
    SortButtonRow: {
        flexDirection: 'row',
    },
    SortButton: {
        height: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#00a661',
        borderWidth: 2,
        borderRadius: 5,
        marginRight: 15,
        padding: 2,
        paddingLeft: 20,
        paddingRight: 20,
    },
    Selected: {
        backgroundColor: '#00a661',
        color: '#fff'
    },
    NotSelected: {
        color: '#00a661'
    },
    ScrollableArea: {
        // height: '60%',
        // position: 'absolute',
        
    }
});

class SearchActivity extends Component {

    render(){
        return(
            <View style={{ height: '100%'}}> 
                <View style={{ height: '30%' }}>
                    <View style={styles.titleBar}>
                        <Icon
                            name='three-bars'
                            size={30}
                            color='#ee5253'
                        />
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ee5253', marginLeft: 20, marginTop: 2 }}>Search</Text>
                    </View>
                    <View style={styles.SortArea}>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '40%', padding: 20 }}>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Sort By Stars</Text>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Sort By Experience</Text>
                        </View>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', alignContent: 'center'}}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}> 
                                
                                <View style={styles.SortButtonRow}>
                                    <View style={[styles.SortButton, styles.Selected]}>
                                        <Text style={styles.Selected}>Ascending</Text>
                                    </View>
                                    <View style={styles.SortButton}>
                                        <Text style={styles.NotSelected}>Descending</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <View style={styles.SortButtonRow}>
                                    <View style={[styles.SortButton, styles.Selected]}>
                                        <Text style={styles.Selected}>Ascending</Text>
                                    </View>
                                    <View style={styles.SortButton}>
                                        <Text style={styles.NotSelected}>Descending</Text>
                                    </View>
                                </View>
                                
                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView style={styles.ScrollableArea}>
                    <DetailsCard 
                        properties={{
                            docInfo: {
                                name: 'Dr. John Doe',
                                experience: 'Dentist (5 Years)',
                                qualification: 'MBBS, BDS'
                            },
                            date: '28/10/2018',
                            hospitalInfo: {
                                name: 'XYZ Hospital',
                                address: 'Vasant Vihar, Delhi'
                            },
                            price: '700'
                        }}
                    />
                    <DetailsCard 
                        properties={{
                            docInfo: {
                                name: 'Dr. John Doe',
                                experience: 'Dentist (5 Years)',
                                qualification: 'MBBS, BDS'
                            },
                            date: '28/10/2018',
                            hospitalInfo: {
                                name: 'XYZ Hospital',
                                address: 'Vasant Vihar, Delhi'
                            },
                            price: '700'
                        }}
                    />
                    <DetailsCard 
                        properties={{
                            docInfo: {
                                name: 'Dr. John Doe',
                                experience: 'Dentist (5 Years)',
                                qualification: 'MBBS, BDS'
                            },
                            date: '28/10/2018',
                            hospitalInfo: {
                                name: 'XYZ Hospital',
                                address: 'Vasant Vihar, Delhi'
                            },
                            price: '700'
                        }}
                    />
                    <DetailsCard 
                        properties={{
                            docInfo: {
                                name: 'Dr. John Doe',
                                experience: 'Dentist (5 Years)',
                                qualification: 'MBBS, BDS'
                            },
                            date: '28/10/2018',
                            hospitalInfo: {
                                name: 'XYZ Hospital',
                                address: 'Vasant Vihar, Delhi'
                            },
                            price: '700'
                        }}
                    />
                    <DetailsCard 
                        properties={{
                            docInfo: {
                                name: 'Dr. John Doe',
                                experience: 'Dentist (5 Years)',
                                qualification: 'MBBS, BDS'
                            },
                            date: '28/10/2018',
                            hospitalInfo: {
                                name: 'XYZ Hospital',
                                address: 'Vasant Vihar, Delhi'
                            },
                            price: '700'
                        }}
                    />
                    <DetailsCard 
                        properties={{
                            docInfo: {
                                name: 'Dr. John Doe',
                                experience: 'Dentist (5 Years)',
                                qualification: 'MBBS, BDS'
                            },
                            date: '28/10/2018',
                            hospitalInfo: {
                                name: 'XYZ Hospital',
                                address: 'Vasant Vihar, Delhi'
                            },
                            price: '700'
                        }}
                    />
                </ScrollView>
            </View>
            
        );
    }

}

export default SearchActivity;