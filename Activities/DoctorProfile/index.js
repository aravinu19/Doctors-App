import React, { Component } from 'react';
import { Text, View, ImageBackground, ScrollView, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
    view: {
        height: '100%'
    },
    titleBar: {
        flexDirection: 'row',
        height: '8%',
        backgroundColor: '#fff',
        marginTop: 25,
        padding: 10,
        elevation: 20,
        shadowColor: '#002',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 2
    },
});

class DoctorProfile extends Component {

    render(){
        return(
            <View style={styles.view}>
                <View style={styles.titleBar}>
                    <Icon
                        name='three-bars'
                        size={30}
                        color='#ee5253'
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ee5253', marginLeft: 20, marginTop: 2 }}>Doctor's Profile</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15 }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <ImageBackground 
                            style={{
                                width: 200,
                                height: 200,
                                backgroundColor: '#ee5253',
                                borderRadius: 15,
                                flexDirection: 'row',
                                padding: 10
                            }}
                        >
                            <Icon2 
                                name="star"
                                size={25}
                                color='#fad87b'
                            />
                            <Text style={{ color:'#fff', paddingLeft: 5, paddingTop: 3, fontSize: 15 }}>4.5/5.0</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Dr. John Doe</Text>
                        <Text>Dentist</Text>
                        <Text>BDS, MBBS</Text>
                        <Text>5 years of experience</Text>
                        <Text>120 Consultations</Text>
                        <Text style={{ color: '#00a661', marginTop: 5 }}>XYZ Hospital</Text>
                        <Text style={{ fontSize: 12 }} >Vasant Vihar, Delhi</Text>
                        <View style={{ flexDirection: 'row', marginTop: 3}}>
                            <Icon 
                                name='calendar'
                                size={18}
                                color='#00a661'
                            />
                            <Text style={{ fontSize: 14, fontWeight: 'bold', marginLeft: 2 }}>28/10/2018</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 3}}>
                            <Text style={{ color: '#00a661', fontSize: 20 }}>{'\u20B9'}</Text>
                            <Text style={{ marginLeft: 5, fontSize: 18 }}>700</Text>
                        </View>
                    </View>
                </View>
                <ScrollView>
                    <Text style={{
                        fontSize: 18, 
                        fontWeight: 'bold', 
                        color: '#ee5253', 
                        marginLeft: 20,
                        marginTop: 20
                    }}>
                        About the hospital
                    </Text>
                    <Text 
                        style={{
                            textAlign: 'auto',
                            margin: 10,
                            marginLeft: 20
                        }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries remaining essentially unchanged. 
                    </Text>
                    <Text style={{
                        fontSize: 18, 
                        fontWeight: 'bold', 
                        color: '#ee5253', 
                        marginLeft: 20,
                        marginTop: 10, 
                        marginBottom: 10
                    }}>
                        XYZ Hospital
                    </Text>
                    <ScrollView horizontal={true} style={{ margin: 10}}>
                        <Image 
                            style={{
                                width: 75,
                                height: 75,
                                backgroundColor: '#ee5253',
                                borderRadius: 5,
                                margin: 5
                            }}
                        />
                        <Image 
                            style={{
                                width: 75,
                                height: 75,
                                backgroundColor: '#ee5253',
                                borderRadius: 5,
                                margin: 5
                            }}
                        />
                        <Image 
                            style={{
                                width: 75,
                                height: 75,
                                backgroundColor: '#ee5253',
                                borderRadius: 5,
                                margin: 5
                            }}
                        />
                        <Image 
                            style={{
                                width: 75,
                                height: 75,
                                backgroundColor: '#ee5253',
                                borderRadius: 5,
                                margin: 5
                            }}
                        />
                        <Image 
                            style={{
                                width: 75,
                                height: 75,
                                backgroundColor: '#ee5253',
                                borderRadius: 5,
                                margin: 5
                            }}
                        />
                        <Image 
                            style={{
                                width: 75,
                                height: 75,
                                backgroundColor: '#ee5253',
                                borderRadius: 5,
                                margin: 5
                            }}
                        />
                        <Image 
                            style={{
                                width: 75,
                                height: 75,
                                backgroundColor: '#ee5253',
                                borderRadius: 5,
                                margin: 5
                            }}
                        />
                        <Image 
                            style={{
                                width: 75,
                                height: 75,
                                backgroundColor: '#ee5253',
                                borderRadius: 5,
                                margin: 5
                            }}
                        />
                        <Image 
                            style={{
                                width: 75,
                                height: 75,
                                backgroundColor: '#ee5253',
                                borderRadius: 5,
                                margin: 5
                            }}
                        />
                        <Image 
                            style={{
                                width: 75,
                                height: 75,
                                backgroundColor: '#ee5253',
                                borderRadius: 5,
                                margin: 5
                            }}
                        />
                        <Image 
                            style={{
                                width: 75,
                                height: 75,
                                backgroundColor: '#ee5253',
                                borderRadius: 5,
                                margin: 5
                            }}
                        />
                        <Image 
                            style={{
                                width: 75,
                                height: 75,
                                backgroundColor: '#ee5253',
                                borderRadius: 5,
                                margin: 5
                            }}
                        />
                        <Image 
                            style={{
                                width: 75,
                                height: 75,
                                backgroundColor: '#ee5253',
                                borderRadius: 5,
                                margin: 5
                            }}
                        />
                        <Image 
                            style={{
                                width: 75,
                                height: 75,
                                backgroundColor: '#ee5253',
                                borderRadius: 5,
                                margin: 5
                            }}
                        />
                    </ScrollView>
                    <Text
                        style={{
                            fontSize: 18, 
                            fontWeight: 'bold', 
                            color: '#ee5253', 
                            marginLeft: 20,
                            marginTop: 10, 
                            marginBottom: 10
                        }}
                    >
                        Review
                    </Text>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginRight: 20 }}>
                        <Image 
                            style={{
                                height: 60,
                                width: 60,
                                backgroundColor: '#ee5253',
                                borderRadius: 60/2
                            }}
                        />
                        <Text style={{ marginTop: 15, marginLeft: 15 }}>XYZ Person</Text>
                    </View>
                    <Text 
                        style={{
                            textAlign: 'auto',
                            margin: 10,
                            marginLeft: 20
                        }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries remaining essentially unchanged. 
                    </Text>
                </ScrollView>
                <View style={{
                    flexDirection: 'row',
                    margin: 10
                }}>
                    <View
                        style={{
                            backgroundColor: '#ee5253',
                            height: 30,
                            width: 180,
                            borderRadius: 15,
                            marginLeft: 5,
                            marginRight: 5
                        }}
                    >
                        <Text 
                            style={{
                                color: '#fff',
                                textAlign: 'center',
                                paddingTop: 5
                            }}
                        >
                            Book Online Consultation
                        </Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: '#ee5253',
                            height: 30,
                            width: 180,
                            borderRadius: 15,
                            marginLeft: 5,
                            marginRight: 5
                        }}
                    >
                        <Text 
                            style={{
                                color: '#fff',
                                textAlign: 'center',
                                paddingTop: 5
                            }}
                        >
                            Book Direct Visit
                        </Text>
                    </View>
                </View>
            </View>
        );
    }

}

export default DoctorProfile;