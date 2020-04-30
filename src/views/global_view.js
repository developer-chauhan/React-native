import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import covidServices from '../services/covidServices';
import colors from '../config/colors';


class GlobalView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cases: '',
            deaths: '',
            recovered: ''
        }
    }

    componentWillMount() {
        this.getAll();
    }
    getAll = async dispatch => {
        await covidServices.get('/all').then((res) => {
            this.setState({
                cases: res.data.cases,
                deaths: res.data.deaths,
                recovered: res.data.recovered
            })
        });
    }
    render() {
        return (
            <ScrollView onScroll={this.getAll}>
                <View style={styles.headerContainer}>
                    <Icon color="white" name="invert-colors" size={62} />
                    <Text style={styles.heading}>{this.props.banner}</Text>
                </View>
                <View style={[styles.cardContainer, { backgroundColor: '#FF9800' }, { marginTop: 8 }]}>
                    <Text style={styles.heading}>Coronavirus Cases</Text>
                    <Text style={styles.subheading}>{this.state.cases}</Text>
                </View>
                <View style={[styles.cardContainer, { backgroundColor: '#E91E63' }, { marginTop: 8 }]}>
                    <Text style={styles.heading}>Deaths</Text>
                    <Text style={styles.subheading}>{this.state.deaths}</Text>
                </View>
                <View style={[styles.cardContainer, { backgroundColor: '#8BC34A' }, { marginTop: 8 }]}>
                    <Text style={styles.heading}>Recovered</Text>
                    <Text style={styles.subheading}>{this.state.recovered}</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        marginTop: 20,
        borderTopWidth: 1,
        borderColor: colors.greyOutline,
        backgroundColor: '#fff',
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        backgroundColor: '#FD6B78',
    },
    cardContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 40,
        backgroundColor: '#FD6B78',
    },
    subheading: {
        color: 'white',
        marginTop: 15,
        fontSize: 40,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    heading: {
        color: 'white',
        marginTop: 10,
        fontSize: 30,
    },
    fonts: {
        marginBottom: 8,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    }
});

export default GlobalView;