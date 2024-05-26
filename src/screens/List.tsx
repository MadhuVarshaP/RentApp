import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import backBtn from '../assets/images/backbtn.png';
import {hp, wp} from '../utils/ScreenDimensions';
import {useNavigation} from '@react-navigation/native';
import HouseList from '../components/HouseList';
import house from '../assets/images/house3.jpg';
import house1 from '../assets/images/house4.jpg';

const List = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <Image source={backBtn} style={styles.backImg} />
        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Best Houses for you</Text>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity onPress={() => navigation.navigate('description')}>
          <HouseList
            image={house}
            name="Guest house"
            housePackage="Rs.200,000/Year"
            bedroom={4}
            bathroom={2}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('description')}>
          <HouseList
            image={house1}
            name="Lux house"
            housePackage="Rs.150,000/Year"
            bedroom={3}
            bathroom={2}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('description')}>
          <HouseList
            image={house}
            name="Chill house"
            housePackage="Rs.500,000/Year"
            bedroom={6}
            bathroom={4}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('description')}>
          <HouseList
            image={house1}
            name="Arch house"
            housePackage="Rs.350,000/Year"
            bedroom={5}
            bathroom={3}
          />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default List;

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
  scrollView: {
    height: hp(30),
  },
});
