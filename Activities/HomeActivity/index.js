import React, { Component } from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Octicons';

const styles = StyleSheet.create({
    FullView: {
        height: '100%'
    },
    TopView: {
        height: '50%',
    },
    BottomView: {
        flex: 1,
        height: '50%'
    },
    design: {
        height: '80%',
        width: '140%',
        marginTop: -wp('14%'),
        marginLeft: -wp('20%'),
        backgroundColor: '#ee5253',
        borderBottomLeftRadius: hp('150%'),
        borderBottomRightRadius: hp('150%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleBar: {
        flexDirection: 'row',
        height: '15%',
        backgroundColor: '#fff',
        marginTop: 25,
        marginBottom: 40,
        padding: 10,
        elevation: 20,
        shadowColor: '#002',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 2
    },
    searchBox: { 
        position: 'absolute',
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '20%',
        width: '100%',
        marginBottom: hp('20%'),
    },
    search: {
        height: '100%',
        width: '60%',
        backgroundColor: '#fff',
        borderRadius: hp('20%'),
        paddingLeft: 30,
        fontSize: 18,
        shadowColor: '#fff',
        shadowRadius: 5,
        elevation: 20
    },
    ButtonRows: {
        flex: 1,
        flexDirection: 'row',
        height: '16.7%',
        paddingTop: hp('1%'),
        paddingBottom: hp('1%')
    },
    BoxButtonLeft: {
        height: '90%',
        width: '35%',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10%',
        marginRight: '5%',
        elevation: 3,
        position: 'relative',
        borderWidth: 0.8,
        borderColor: '#e9eaea'
    },
    BoxButtonRight: {
        height: '90%',
        width: '35%',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5%',
        marginRight: '10%',
        elevation: 3,
        position: 'relative',
        borderWidth: 0.8,
        borderColor: '#e9eaea'
    },
    ButtonText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#2c2c2c'
    }
})

class Home extends Component {

    render(){
        return (
            <View style={styles.FullView}>
                <View style={styles.TopView}>

                    <View style={styles.titleBar}>
                        <Icon 
                            name='three-bars'
                            size={30}
                            color='#ee5253'
                        />
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ee5253', marginLeft: 20, marginTop: 2}}>Home</Text>
                    </View>

                    <View style={styles.design}>
                        <View style={styles.searchBox}>
                            <TextInput 
                                style={styles.search}
                                value="Search"
                                onFocus={() => this.props.navigation.navigate('Search')}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.BottomView}>
                    <View 
                        style={styles.ButtonRows}
                        onTouchStart={() => this.props.navigation.navigate('DoctorProfile')}
                    >
                        <View style={styles.BoxButtonLeft}>
                            <Text style={styles.ButtonText}>Opthalmology</Text>
                        </View>
                        <View style={styles.BoxButtonRight}>
                            <Text style={styles.ButtonText}>Dental</Text>
                        </View>
                    </View>
                    <View 
                        style={styles.ButtonRows}
                        onTouchStart={() => this.props.navigation.navigate('DoctorProfile')}
                    >
                        <View style={styles.BoxButtonLeft}>
                            <Text style={styles.ButtonText}>Cardiology</Text>
                        </View>
                        <View style={styles.BoxButtonRight}>
                            <Text style={styles.ButtonText}>Neurology</Text>
                        </View>
                    </View>
                    <View
                        style={styles.ButtonRows}
                        onTouchStart={() => this.props.navigation.navigate('DoctorProfile')}
                    >
                        <View style={styles.BoxButtonLeft}>
                            <Text style={styles.ButtonText}>Dermatology</Text>
                        </View>
                        <View style={styles.BoxButtonRight}>
                            <Text style={styles.ButtonText}>Pediatric</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

}

export default Home;