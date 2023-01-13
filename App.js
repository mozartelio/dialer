// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
// For enabling portrait mode only content of this article was used
// https://stackoverflow.com/questions/34078354/how-to-disable-landscape-mode-in-react-native-android-dev-mode

import React, {useState} from 'react';
import {Col, Row, Grid} from 'react-native-easy-grid';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Image,
  Alert,
  Animated,
  Vibration,
} from 'react-native';


const DURATION = 100;

export default function App() {
  const startVibration = () => {
    //To start the vibration for the defined Duration
    Vibration.vibrate(DURATION);
  };

  const [number, setNumber] = useState('');
  // const [isCalling, setCalling] = useState('');


  function numberFieldManager(sign) {
    //limit of digits: 50
    if (number.length >= 50) {
      Alert.alert('Warning!', '50 signs is maximum length of phone number!');
      return;
    }
    startVibration();
    setNumber(number + sign);

  }

  return (
      <View>
        <View style={styles.topBox}>
          <Text style={styles.phoneWord}>Phone</Text>
        </View>
        <View style={styles.centralNumberField}>
          <Text style={styles.centralNumberText}>{number}</Text>
          {/*<View>*/}
            <Pressable
                style={number.length!==0? styles.removeBtnContainerShown : styles.removeBtnContainerHidden}

                onPress={() => {
                 if(number.length===0)return;
                  setNumber(number.substring(0, number.length - 1));
                }}
               onLongPress={() => setNumber('')}>
             <Image
                  style={styles.removeBtn}
                  source={require('./assets/delete_number.png')}>
             </Image>

           </Pressable>
          {/*</View>*/}

        </View>
        <View style={styles.container}>
          <Grid>
            <Col size={1}>
              <Row style={styles.cell}>
                <TouchableOpacity
                    style={styles.bar}
                    onPress={() => {
                      numberFieldManager('1');
                    }}>
                  <View style={styles.bar}>
                    <Text style={styles.cellMainNumber}>1</Text>
                    <Text style={styles.cellLetters}>o_o</Text>
                  </View>
                </TouchableOpacity>
              </Row>

              <Row style={styles.cell}>
                <TouchableOpacity
                    style={styles.bar}
                    onPress={() => {
                      numberFieldManager('4');
                    }}>
                  <View style={styles.bar}>
                    <Text style={styles.cellMainNumber}>4</Text>
                    <Text style={styles.cellLetters}>GHI</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.cell}>
                <TouchableOpacity
                    style={styles.bar}
                    onPress={() => {
                      numberFieldManager('7');
                    }}>
                  <View style={styles.bar}>
                    <Text style={styles.cellMainNumber}>7</Text>
                    <Text style={styles.cellLetters}>PQRST</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.cell}>
                <TouchableOpacity
                    style={styles.bar}
                    onPress={() => {
                      numberFieldManager('*');
                    }}>
                  <Text style={styles.cellMainNumber}>*</Text>
                </TouchableOpacity>
              </Row>
            </Col>

            <Col size={1}>
              <Row style={styles.cell}>
                <TouchableOpacity
                    style={styles.bar}
                    onPress={() => {
                      numberFieldManager('2');
                    }}>
                  <View style={styles.bar}>
                    <Text style={styles.cellMainNumber}>2</Text>
                    <Text style={styles.cellLetters}>ABC</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.cell}>
                <TouchableOpacity
                    style={styles.bar}
                    onPress={() => {
                      numberFieldManager('5');
                    }}>
                  <View style={styles.bar}>
                    <Text style={styles.cellMainNumber}>5</Text>
                    <Text style={styles.cellLetters}>JKL</Text>
                  </View>
                </TouchableOpacity>
              </Row>

              <Row style={styles.cell}>
                <TouchableOpacity
                    style={styles.bar}
                    onPress={() => {
                      numberFieldManager('8');
                    }}>
                  <View style={styles.bar}>
                    <Text style={styles.cellMainNumber}>8</Text>
                    <Text style={styles.cellLetters}>TUV</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.cell}>
                <Pressable
                    style={styles.bar}
                    onPress={() => {
                      numberFieldManager('0');
                    }}
                    onLongPress={() => {
                      if (number.length >= 1) {
                        Alert.alert(
                            'Warning!',
                            '+ sign can be only in the beginning',
                        );
                        return;
                      }
                      numberFieldManager('+');
                    }}>
                  <Animated.View style={styles.bar}>
                    <Text style={styles.cellMainNumber}>0</Text>
                    <Text style={styles.cellLetters}>+</Text>
                  </Animated.View>
                </Pressable>
              </Row>
            </Col>

            <Col size={1}>
              <Row style={styles.cell}>
                <TouchableOpacity
                    style={styles.bar}
                    onPress={() => {
                      numberFieldManager('3');
                    }}>
                  <View style={styles.bar}>
                    <Text style={styles.cellMainNumber}>3</Text>
                    <Text style={styles.cellLetters}>DEF</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.cell}>
                <TouchableOpacity
                    style={styles.bar}
                    onPress={() => {
                      numberFieldManager('6');
                    }}>
                  <View style={styles.bar}>
                    <Text style={styles.cellMainNumber}>6</Text>
                    <Text style={styles.cellLetters}>MNO</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.cell}>
                <TouchableOpacity
                    style={styles.bar}
                    onPress={() => {
                      numberFieldManager('9');
                    }}>
                  <View style={styles.bar}>
                    <Text style={styles.cellMainNumber}>9</Text>
                    <Text style={styles.cellLetters}>WXYZ</Text>
                  </View>
                </TouchableOpacity>
              </Row>
              <Row style={styles.cell}>
                <TouchableOpacity
                    style={styles.bar}
                    onPress={() => {
                      numberFieldManager('#');
                    }}>
                  <Text style={styles.cellMainNumber}>#</Text>
                </TouchableOpacity>
              </Row>
            </Col>
          </Grid>
        </View>

        <View style={styles.callBtnContainer}>
          <TouchableOpacity
              style={styles.callBtn}
              onPress={() => {
                // if(!isCalling) {
                if (
                    number.length === 0 ||
                    (number.length === 1 && number === '+') ||
                    number.substring(0, 1) === '*' ||
                    number.substring(0, 1) === '#'
                ) {
                  // Alert.alert('Warning!', 'This is not a phone number to call');
                  return;
                }
                RNImmediatePhoneCall.immediatePhoneCall(number);

                // }
                // else{
                //
                // }
              }}>
            {/*Image was taken from https://icons8.com/icons/set/phone--white */}
            <Image
                source={require('./assets/icons8-phone-60.png')}
                style={styles.callPicture}
            />
          </TouchableOpacity>
        </View>

        {/*<Button title="clear" onPress={() => setNumber('')} />*/}
      </View>
  );
}

const styles = StyleSheet.create({
  removeBtn: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  removeBtnContainerShown: {
    width: '15%',
    height: '15%',
  },
  removeBtnContainerHidden: {
    width: '15%',
    height: '15%',
    display: 'none',
  },
  callPicture: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 33,
    height: 33,
  },
  callBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  callBtn: {
    backgroundColor: 'green',
    borderRadius: 30,
    padding: 5,
    marginTop: 20,
    marginBottom: 10,
    shadowColor: '#303838',
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 10,
    shadowOpacity: 0.35,
    width: '30%',
    // float: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  app: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cellLetters: {
    color: 'gray',
    fontSize: 15,
    marginBottom: 7,
  },
  cellMainNumber: {
    color: 'black',
    fontSize: 25,
    marginBottom: 0,
    marginVertical: 10,
    // justifyContent: 'center',
    // textAlign: "center",
    paddingBottom: 0,
  },
  container: {
    width: '100%',
    height: 250,
    // padding: 16,
    // paddingTop: 100,
    backgroundColor: '#fff',
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  centralNumberText: {
    color: 'black',
    fontSize: 33,
    fontWeight: 'bold',
    marginVertical: 10,

    textAlign: 'center',
  },
  centralNumberField: {
    height: '33%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBox: {
    backgroundColor: '#008000',
    height: '14%',
  },
  phoneWord: {
    color: 'white',
    fontSize: 18,
    marginVertical: 10,
    marginHorizontal: 10,
    textAlign: 'left',
  },
});
