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
import {Houses} from '../constants/Houses';

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
        {Houses.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('description', {id: item.id})}>
            <HouseList
              image={item.image}
              name={item.name}
              address={item.address}
              housePackage={item.housePackage}
              bedroom={item.bedroom}
              bathroom={item.bathroom}
            />
          </TouchableOpacity>
        ))}
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
