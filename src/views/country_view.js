import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import _ from 'lodash';
import { Text, Icon, Divider, SearchBar } from 'react-native-elements';
import colors from '../config/colors';
import covidServices from '../services/covidServices';

class CountryView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            result: []
        }
    }

    componentWillMount() {
        this.getAllCountry();
    }
    searchUpdated = (term) => {
        this.setState({
            searchTerm: term
        })
    }
    getAllCountry = async dispatch => {
        let res = await covidServices.get('/countries');
        this.setState({
            result: res.data
        })
    }

    filterdCountry = (result, text) => {
        if (text && text.searchTerm != '') {
            let searchText = text.toLowerCase();
            return result.filter(item => item.country.toString().toLowerCase() == searchText)
        } else {
            return result;
        }
    }
    render() {
        return (
            <View>
                <View style={styles.headerContainer}>
                    <Icon color="white" name="invert-colors" size={62} />
                    <Text style={styles.heading}>Country Wise Information</Text>
                </View>
                <SearchBar
                    placeholder="Search Country"
                    value={this.state.searchTerm}
                    onChangeText={term => {
                        this.setState({
                            searchTerm: term
                        })
                    }}
                />
                <ScrollView onScroll={this.getAllCountry}>
                    {this.filterdCountry(this.state.result, this.state.searchTerm).map((c, i) => (
                        <View key={i} style={styles.countryContainer}>
                            <Text>
                                <Text style={styles.country}>{c.country}</Text>
                            </Text>
                            <View>
                                <Text>Cases: {c.cases} | Today: {c.todayCases} | Active: {c.active}</Text>
                                <Text>Deaths: {c.deaths} | Today: {c.todayDeaths}</Text>
                                <Text>Recovered: {c.recovered} | Critical: {c.critical}</Text>
                            </View>
                            <Divider style={{ backgroundColor: 'black', marginTop: 5 }} />
                        </View>

                    ))}
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    countryContainer: {
        padding: 25
    },
    country: {
        fontWeight: "bold",
        fontSize: 20
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
    heading: {
        color: 'white',
        marginTop: 10,
        fontSize: 22,
    },
    fonts: {
        marginBottom: 8,
    },
    name: {
        fontSize: 16,
        marginTop: 5,
    }
});

export default CountryView;