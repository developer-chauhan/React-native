import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const IMAGE_SIZE = SCREEN_WIDTH - 80;

class CustomButton extends Component {
  constructor() {
    super();
    this.state = {
      selected: false,
    };
  }

  componentDidMount() {
    const { selected } = this.props;

    this.setState({
      selected,
    });
  }
}

export default class ProfileScreen extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <View style={{ flex: 1, backgroundColor: 'rgba(47,44,60,1)' }}>
          <View style={styles.statusBar} />
          <ScrollView style={{ flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../../assets/images/corona.jpeg')}
                style={{
                  width: IMAGE_SIZE,
                  height: IMAGE_SIZE,
                  borderRadius: 10,
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: 20,
                marginHorizontal: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  flex: 1,
                  fontSize: 26,
                  color: 'white',
                  fontFamily: 'bold',
                }}
              >
                Corona Virus
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                marginTop: 20,
                width: SCREEN_WIDTH - 80,
                marginLeft: 40,
              }}
            >
              <Text
                style={{
                  flex: 1,
                  fontSize: 15,
                  color: 'white',
                  fontFamily: 'regular',
                  justifyContent: "center"
                }}
              >
                The disease causes respiratory illness (like the flu) with symptoms such as a cough, fever, and in more severe cases, difficulty breathing. You can protect yourself by washing your hands frequently, avoiding touching your face, and avoiding close contact (1 meter or 3 feet) with people who are unwell.
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontSize: 26,
                  color: 'green',
                  fontFamily: 'bold',
                  textAlign: 'left',
                  marginTop: 20
                }}
              >
                Do
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontSize: 15,
                  color: 'white',
                  fontFamily: 'regular',
                  justifyContent: "center"
                }}
              >
                Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub
                Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze
                Avoid close contact (1 meter or 3 feet) with people who are unwell
                Stay home and self-isolate from others in the household if you feel unwell
                </Text>
              <Text
                style={{
                  flex: 1,
                  fontSize: 26,
                  color: 'red',
                  fontFamily: 'bold',
                  textAlign: 'left',
                  marginTop: 20
                }}
              >
                Don't
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontSize: 15,
                  color: 'white',
                  fontFamily: 'regular',
                  justifyContent: "center",
                  marginBottom: 20
                }}
              >
                Touch your eyes, nose, or mouth if your hands are not clean
              </Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    height: 10,
  },
  navBar: {
    height: 60,
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignContent: 'center',
  },
  nameHeader: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
  infoTypeLabel: {
    fontSize: 15,
    textAlign: 'right',
    color: 'rgba(126,123,138,1)',
    fontFamily: 'regular',
    paddingBottom: 10,
  },
  infoAnswerLabel: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'regular',
    paddingBottom: 10,
  },
});
