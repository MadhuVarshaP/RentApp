import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {wp, hp} from '../utils/ScreenDimensions';
import dropdown from '../assets/images/dropdown.png';
import bell from '../assets/images/bell.png';
import search from '../assets/images/search.png';
import settings from '../assets/images/settings.png';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import HouseList from '../components/HouseList';
import {useNavigation} from '@react-navigation/native';
import {Houses} from '../constants/Houses';
import MyDropdown from '../components/MyDropdown';

const Home = () => {
  const Building = [
    {
      name: 'House',
    },
    {
      name: 'Apartment',
    },
    {
      name: 'Hotel',
    },
    {
      name: 'Villa',
    },
    {
      name: 'Residency',
    },
    {
      name: 'Hostel',
    },
  ];

  const [active, setActive] = useState('House');

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.location}>Location</Text>
      <View style={styles.header}>
        <View style={styles.chooselocation}>
          {/* <Text style={styles.place}>Chennai</Text>
          <Image source={dropdown} style={styles.dropdown} /> */}
          <MyDropdown />
        </View>
        <Image source={bell} style={styles.bell} />
      </View>
      <View style={styles.headertitle}>
        <View style={styles.inputcontainer}>
          <Image source={search} style={styles.search} />
          <TextInput
            style={styles.searchinput}
            placeholder="Search address, or near you "
            placeholderTextColor="#4B4B4B"
          />
        </View>
        <LinearGradient
          colors={['#A0DAFB', '#65BCEE']}
          start={{x: 0, y: 0}}
          end={{x: 0.5, y: 0.5}}
          style={styles.settingsbox}>
          <Image source={settings} style={styles.settings} />
        </LinearGradient>
      </View>
      <FlatList
        data={Building}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            style={
              active === item.name ? styles.buildlistActive : styles.buildlist
            }
            onPress={() => setActive(item.name)}>
            <Text
              style={
                active === item.name
                  ? {
                      color: 'white',
                      fontFamily: 'JosefinSans-Regular',
                      alignItems: 'center',
                    }
                  : {
                      color: '#71797E',
                      fontFamily: 'JosefinSans-Regular',
                      alignItems: 'center',
                    }
              }>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.name}
      />
      <View style={styles.headingBox}>
        <Text style={styles.heading1}>Near from you</Text>
        <TouchableOpacity onPress={() => navigation.navigate('nearhouse')}>
          <Text style={styles.subheading1}>See more</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={Houses}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.imgList}>
            <TouchableOpacity
              onPress={() => navigation.navigate('description', {id: item.id})}>
              <Image source={item.image} style={styles.house1} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={house => house.id}
      />
      <View style={styles.headingBox}>
        <Text style={styles.heading1}>Best for you</Text>
        <TouchableOpacity onPress={() => navigation.navigate('list')}>
          <Text style={styles.subheading1}>See more</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.scrollView}
        data={Houses}
        keyExtractor={(house, index) => index.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
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
        )}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: wp(100),
    color: 'black',
    fontFamily: 'JosefinSans-Medium',
    paddingHorizontal: 20,
  },
  location: {
    fontFamily: 'JosefinSans-Bold',
    marginVertical: 15,
    fontSize: 14,
    color: 'gray',
  },
  chooselocation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
  },
  place: {
    color: 'black',
    fontFamily: 'JosefinSans-Medium',
    fontSize: 18,
  },
  dropdown: {
    height: 18,
    width: 18,
    marginHorizontal: 10,
  },
  bell: {
    width: 25,
    height: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
    height: 20,
    width: 20,
  },
  inputcontainer: {
    backgroundColor: '#E6E7E7',
    width: 260,
    marginVertical: 20,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
  },
  searchinput: {
    color: '#4B4B4B',
    paddingHorizontal: 10,
    height: 40,
    fontFamily: 'JosefinSans-Regular',
    marginVertical: -10,
    fontSize: 14,
  },
  settings: {
    width: 20,
    height: 20,
  },
  settingsbox: {
    backgroundColor: '#BFEFFF',
    padding: 10,
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  headertitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buildlist: {
    // width: 80,
    height: 45,
    marginVertical: 10,
    padding: 10,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#E5E4E2',
  },
  buildlistActive: {
    // width: 80,
    height: 45,
    marginVertical: 10,
    marginRight: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#65BCEE',
  },
  headingBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  heading1: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'JosefinSans-Bold',
  },
  subheading1: {
    color: '#71797E',
    fontSize: 14,
    fontFamily: 'JosefinSans-Italic',
  },
  imgList: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  house1: {
    height: 200,
    width: 250,
    marginRight: 20,
    borderRadius: 20,
  },
  scrollView: {
    height: hp(30),
  },
  recommended: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  house3: {
    // height: 120,
    height: hp(20),
    width: 170,
    marginVertical: 20,
    borderRadius: 20,
  },
  houseName: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'JosefinSans-SemiBold',
  },
  note: {
    color: '#0A8ED9',
    paddingVertical: 10,
    fontFamily: 'JosefinSans-Regular',
  },
});
