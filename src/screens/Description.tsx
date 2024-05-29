import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {hp, wp} from '../utils/ScreenDimensions';
import backBtn from '../assets/images/backbtn.png';
import bookmark from '../assets/images/bookmark.png';
import bookmarkActive from '../assets/images/bookmarkActive.png';
import owner from '../assets/images/owner.jpg';
import contact from '../assets/images/call.png';
import message from '../assets/images/message.png';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Houses} from '../constants/Houses';

const Description = () => {
  const Gallery = [
    {
      image: require('../assets/images/inhome1.jpg'),
    },
    {
      image: require('../assets/images/inhome2.jpg'),
    },
    {
      image: require('../assets/images/inhome3.jpg'),
    },
    {
      image: require('../assets/images/inhome4.jpg'),
    },
    {
      image: require('../assets/images/inhome5.jpg'),
    },
  ];

  const [selected, setSelected] = useState(false);

  const [expanded, setExpanded] = useState(false);

  const navigation = useNavigation();

  const [popUp, setPopUp] = useState(false);

  const route = useRoute();

  const {id} = route.params;

  const house = Houses.find(house => house.id === id);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <Image source={backBtn} style={styles.backImg} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected(!selected);
          }}>
          <Image
            source={selected ? bookmarkActive : bookmark}
            style={styles.bookmark}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Image source={house.image} style={styles.house} />
        <View style={styles.Box}>
          <Text style={styles.title}>{house.name}</Text>
          <Text style={styles.address}>{house.address}</Text>
          <View style={styles.detailBox}>
            <Text style={styles.details}>🛏️ {house.bedroom} Bedrooms</Text>
            <Text style={styles.details}>🛁 {house.bathroom} Bathrooms</Text>
          </View>
        </View>
        <View style={styles.descriptionBox}>
          <Text style={styles.heading}>Description</Text>
          <Text style={styles.description}>
            {expanded
              ? 'The three-level house boasts a modern design, featuring expansive living spaces and sleek architectural elements. It includes a large pool perfect for relaxation and entertainment, as well as a spacious garage accommodating up to four cars. This luxurious residence offers both style and functionality, ideal for contemporary living.'
              : 'The 3 level house that has a modern design, has a large pool and a garage that fits up to four cars...'}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setExpanded(!expanded);
            }}>
            <Text style={styles.blueText}>
              {expanded ? 'See less' : 'See more'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ownerContainer}>
          <Image source={owner} style={styles.ownerImg} />
          <View style={{paddingHorizontal: 20}}>
            <Text style={styles.heading}>Madhu</Text>
            <Text style={styles.description}>Owner</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 30,
            }}>
            <LinearGradient
              colors={['#A0DAFB', '#65BCEE']}
              start={{x: 0, y: 0}}
              end={{x: 0.5, y: 0.5}}
              style={styles.contactBox}>
              <TouchableOpacity>
                <Image source={contact} style={styles.contact} />
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={['#A0DAFB', '#65BCEE']}
              start={{x: 0, y: 0}}
              end={{x: 0.5, y: 0.5}}
              style={styles.contactBox}>
              <TouchableOpacity>
                <Image source={message} style={styles.contact} />
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        <Text style={styles.heading}>Gallery</Text>
        <FlatList
          data={Gallery}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.descriptionBox}>
              <Image source={item.image} style={styles.gallery} />
            </View>
          )}
        />
      </ScrollView>
      <View style={styles.priceBox}>
        <View>
          <Text style={styles.description}>Price</Text>
          <Text style={styles.heading}>{house.housePackage}</Text>
        </View>
        <LinearGradient
          colors={['#A0DAFB', '#65BCEE']}
          start={{x: 0, y: 0}}
          end={{x: 0.5, y: 0.5}}
          style={styles.button}>
          <TouchableOpacity onPress={() => setPopUp(true)}>
            <Text style={{color: 'white'}}>Rent Now</Text>
            <Modal
              animationType="slide"
              transparent={true}
              visible={popUp}
              onRequestClose={() => setPopUp(false)}>
              <View style={styles.PopupBox}>
                <View style={styles.Content}>
                  <Text style={styles.title}>{house.name}</Text>
                  <Text style={styles.address}>{house.address}</Text>
                  <LinearGradient
                    colors={['#A0DAFB', '#65BCEE']}
                    start={{x: 0, y: 0}}
                    end={{x: 0.5, y: 0.5}}
                    style={styles.finalPriceBox}>
                    <Text style={styles.description}>Final Price: </Text>
                    <Text style={styles.heading}>{house.housePackage}</Text>
                  </LinearGradient>
                  <Text style={styles.description}>
                    For further more Contact Details:
                  </Text>

                  <View style={styles.contactDetails}>
                    <LinearGradient
                      colors={['#A0DAFB', '#65BCEE']}
                      start={{x: 0, y: 0}}
                      end={{x: 0.5, y: 0.5}}
                      style={styles.contactBox}>
                      <TouchableOpacity>
                        <Image source={contact} style={styles.contact} />
                      </TouchableOpacity>
                    </LinearGradient>
                    <LinearGradient
                      colors={['#A0DAFB', '#65BCEE']}
                      start={{x: 0, y: 0}}
                      end={{x: 0.5, y: 0.5}}
                      style={styles.contactBox}>
                      <TouchableOpacity>
                        <Image source={message} style={styles.contact} />
                      </TouchableOpacity>
                    </LinearGradient>
                  </View>
                  <LinearGradient
                    colors={['#A0DAFB', '#65BCEE']}
                    start={{x: 0, y: 0}}
                    end={{x: 0.5, y: 0.5}}
                    style={styles.payBtn}>
                    <TouchableOpacity onPress={() => setPopUp(false)}>
                      <Text style={{color: 'white'}}>Agree and Pay</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
              </View>
            </Modal>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: wp(100),
    height: hp(100),
    color: 'black',
    fontFamily: 'JosefinSans-Medium',
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
  bookmark: {
    height: 26,
    width: 26,
  },
  house: {
    height: hp(30),
    width: wp(90),
    borderRadius: 20,
  },
  PopupBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  Box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Content: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontFamily: 'JosefinSans-Bold',
    color: 'black',
    fontSize: 20,
  },
  address: {
    fontFamily: 'JosefinSans-Regular',
    color: 'gray',
    fontSize: 13,
  },
  detailBox: {
    flexDirection: 'row',
  },
  details: {
    fontFamily: 'JosefinSans-Regular',
    color: 'black',
    fontSize: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  descriptionBox: {
    fontFamily: 'JosefinSans-Bold',
    color: 'black',
    fontSize: 15,
  },
  heading: {
    fontFamily: 'JosefinSans-SemiBold',
    color: 'black',
    fontSize: 18,
  },
  description: {
    fontFamily: 'JosefinSans-Regular',
    color: 'gray',
    fontSize: 13,
  },
  ownerContainer: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ownerImg: {
    height: hp(7),
    width: wp(15),
    borderRadius: 999,
  },
  contactBox: {
    backgroundColor: '#BFEFFF',
    width: 38,
    height: 38,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contact: {
    width: 20,
    height: 20,
  },
  gallery: {
    width: 80,
    height: 80,
    marginRight: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  priceBox: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  button: {
    width: 100,
    backgroundColor: '#BFEFFF',
    padding: 10,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  blueText: {
    color: '#65BCEE',
    textDecorationLine: 'underline',
    fontSize: 13,
    fontFamily: 'JosefinSans-Regular',
  },
  finalPriceBox: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 10,
    justifyContent: 'center',
  },
  contactDetails: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'center',
  },
  payBtn: {
    width: wp(40),
    padding: 10,
    // marginVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
  },
});
