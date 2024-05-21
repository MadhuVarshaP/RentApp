import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
// import LinearGradient from 'react-native-linear-gradient';
import {wp, hp} from './utils/ScreenDimensions';
import dropdown from './src/assets/images/dropdown.png';
import bell from './src/assets/images/bell.png';
import search from './src/assets/images/search.png';
import settings from './src/assets/images/settings.png';
import house3 from './src/assets/images/house3.jpg';
import house4 from './src/assets/images/house4.jpg';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
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

  const Houses = [
    {
      image: require('./src/assets/images/house1.jpg'),
    },
    {
      image: require('./src/assets/images/house2.jpg'),
    },
    {
      image: require('./src/assets/images/house1.jpg'),
    },
    {
      image: require('./src/assets/images/house2.jpg'),
    },
    {
      image: require('./src/assets/images/house1.jpg'),
    },
    {
      image: require('./src/assets/images/house2.jpg'),
    },
  ];

  const [active, setActive] = useState('House');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.location}>Location</Text>
      <View style={styles.header}>
        <View style={styles.chooselocation}>
          <Text style={styles.place}>Bangalore</Text>
          <Image source={dropdown} style={styles.dropdown} />
        </View>
        <Image source={bell} style={styles.bell} />
      </View>
      <View style={styles.headertitle}>
        <View style={styles.inputcontainer}>
          <Image source={search} style={styles.search} />
          <Text style={styles.searchinput}>Search address, or near you</Text>
        </View>
        <LinearGradient
          colors={['#A0DAFB', '#65BCEE']}
          start={{x: 0, y: 0}}
          end={{x: 0.5, y: 0.5}}
          style={styles.settingsbox}>
          <Image source={settings} style={styles.settings} />
        </LinearGradient>
        {/* <View style={styles.settingsbox}>
          <Image source={settings} style={styles.settings} />
        </View> */}
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
                active === item.name ? {color: 'white'} : {color: '#71797E'}
              }>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.headingBox}>
        <Text style={styles.heading1}>Near from you</Text>
        <Text style={styles.subheading1}>See more</Text>
      </View>
      <FlatList
        data={Houses}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.imgList}>
            <Image source={item.image} style={styles.house1} />
          </View>
        )}
      />
      <View style={styles.headingBox}>
        <Text style={styles.heading1}>Best for you</Text>
        <Text style={styles.subheading1}>See more</Text>
      </View>
      <ScrollView style={styles.forUs}>
        <View style={styles.recommended}>
          <Image source={house3} style={styles.house3} />
          <View>
            <Text style={styles.heading1}>Orchad House</Text>
            <Text style={styles.note}>Rs.2,500,000 / Year</Text>
            <Text style={styles.subheading1}>🛏️ 6 Bedroom</Text>
            <Text style={styles.subheading1}>🛁 2 Bathroom</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: wp(100),
    height: hp(100),
    color: 'black',
    fontFamily: 'JosefinSans-Medium',
  },
  location: {
    fontFamily: 'JosefinSans-Medium',
    margin: 15,
    fontSize: 14,
    color: 'gray',
  },
  chooselocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  place: {
    color: 'black',
    fontFamily: 'JosefinSans-Medium',
    fontSize: 18,
    marginHorizontal: 20,
  },
  dropdown: {
    height: 18,
    width: 18,
  },
  bell: {
    width: 25,
    height: 25,
    marginHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
    height: 20,
    width: 20,
    paddingRight: 20,
  },
  inputcontainer: {
    backgroundColor: '#E6E7E7',
    width: 260,
    margin: 20,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
  },
  searchinput: {
    color: '#4B4B4B',
    paddingLeft: 10,
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
    marginRight: 20,
  },
  buildlist: {
    // width: 80,
    height: 45,
    marginVertical: 10,
    marginHorizontal: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#E5E4E2',
  },
  buildlistActive: {
    // width: 80,
    height: 45,
    marginVertical: 10,
    marginHorizontal: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#65BCEE',
  },
  headingBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  heading1: {
    color: 'black',
    fontSize: 18,
  },
  subheading1: {
    color: '#71797E',
    fontSize: 14,
  },
  imgList: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  house1: {
    height: 200,
    width: 250,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  // forUs: {
  //   paddingVertical: 20,
  // },
  recommended: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  house3: {
    height: 120,
    width: 170,
    margin: 20,
    borderRadius: 20,
  },
  note: {
    color: '#0A8ED9',
    paddingVertical: 10,
    fontFamily: 'PlayfairDisplay-Regular',
  },
});
