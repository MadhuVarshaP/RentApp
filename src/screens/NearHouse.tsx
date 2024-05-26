import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import backBtn from '../assets/images/backbtn.png';
import {hp, wp} from '../utils/ScreenDimensions';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import house from '../assets/images/house4.jpg';
import house1 from '../assets/images/house3.jpg';
import house2 from '../assets/images/house2.jpg';
import House from '../components/House';

const NearHouse = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <Image source={backBtn} style={styles.backImg} />
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Houses near you</Text>
      <ScrollView style={styles.houseList}>
        <TouchableOpacity onPress={() => navigation.navigate('description')}>
          <House
            image={house}
            name="Chill house"
            address="4km from here"
            housePackage="Rs.200,000/Year"
            bedroom={3}
            bathroom={2}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('description')}>
          <House
            image={house1}
            name="Lux house"
            address="500m from here"
            housePackage="Rs.150,000/Year"
            bedroom={4}
            bathroom={2}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('description')}>
          <House
            image={house2}
            name="Guest house"
            address="2km from here"
            housePackage="Rs.500,000/Year"
            bedroom={6}
            bathroom={4}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('description')}>
          <House
            image={house}
            name="Arch house"
            address="5km from here"
            housePackage="Rs.110,000/Year"
            bedroom={2}
            bathroom={2}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('description')}>
          <House
            image={house1}
            name="Orchad house"
            address="200m from here"
            housePackage="Rs.400,000/Year"
            bedroom={5}
            bathroom={2}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NearHouse;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: wp(100),
    height: hp(100),
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backImg: {
    height: 30,
    width: 30,
  },
  heading: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'JosefinSans-Bold',
    textAlign: 'center',
  },
  houseList: {},
});
