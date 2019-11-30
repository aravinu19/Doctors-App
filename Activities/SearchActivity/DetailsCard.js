import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
    DetailsCard: {
        backgroundColor: '#fff',
        position: 'relative',
        margin: 15,
        padding: 10,
        borderRadius: 5,
        borderWidth: 0.8,
        borderColor: '#e9eaea',
        elevation: 5
    },
    Buttons: {
        backgroundColor: '#ee5253',
        width: '45%',
        // margin: 10,
        padding: 10,
        borderRadius: 20,
        elevation: 2
    }
});

class DetailsCard extends Component {

    constructor(props) {
        super();
        this.DocInfo = props.properties.docInfo;
        this.date = props.properties.date;
        this.hospitalInfo = props.properties.hospitalInfo;
        this.price = props.properties.price;
    }

    render(){
        return(
            <View style={styles.DetailsCard}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        // alignItems: 'center'
                    }}
                >
                    <View style={{ flexDirection: 'column', width: '30%', height: '50%' }}>
                        <View>
                            <Image 
                                // source={{uri: ''}}
                                style={{ width: 90, height: 90, borderRadius: 90/2, backgroundColor: '#ee5253' }}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontWeight: 'bold'}}>{this.DocInfo.name}</Text>
                        <Text style={{ fontWeight: 'bold'}}>{this.DocInfo.experience}</Text>
                        <Text style={{ fontSize: 12 }}>{this.DocInfo.qualification}</Text>
                        <Text></Text>
                        <Text style={{ color: '#00a661' }}>{this.hospitalInfo.name}</Text>
                        <Text style={{ fontSize: 12 }}>{this.hospitalInfo.address}</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 10 }}>First Available Date</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Icons 
                                name='calendar'
                                size={20}
                                color='#00a661'
                            />
                            <Text style={{ paddingLeft: 10, fontSize: 16 }}>{this.date}</Text>
                        </View>
                        <Text></Text>
                        <Text></Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#00a661', fontSize: 20 }}>{'\u20B9'}</Text>
                            <Text style={{ fontSize: 18, paddingLeft: 10 }}>{this.price}</Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        marginTop: 10
                    }}
                >
                    <View style={ styles.Buttons }>
                        <Text style={{ fontSize: 12, color: '#fff', textAlign: 'center' }}>Book Online Consultation</Text>
                    </View>
                    <View style={ styles.Buttons }>
                        <Text style={{ fontSize: 12, color: '#fff', textAlign: 'center' }}>Book Direct Visit</Text>
                    </View>
                </View>
            </View>
        );
    }

}

export default DetailsCard;