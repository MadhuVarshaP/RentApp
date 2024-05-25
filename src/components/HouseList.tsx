import {Image, StyleSheet, Text, View, ImageSourcePropType} from 'react-native';
import React from 'react';
import {hp, wp} from '../utils/ScreenDimensions';

type HouseListProps = {
  image: ImageSourcePropType;
  name: string;
  housePackage: string;
  bedroom: string;
  bathroom: string;
};
const HouseList = ({
  image,
  name,
  housePackage,
  bedroom,
  bathroom,
}: HouseListProps) => {
  return (
    <View style={styles.recommended}>
      <Image source={image} style={styles.house3} />
      <View>
        <Text style={styles.houseName}>{name}</Text>
        <Text style={styles.note}>{housePackage}</Text>
        <Text style={styles.subheading1}>🛏️ {bedroom} Bedrooms</Text>
        <Text style={styles.subheading1}>🛁 {bathroom} Bathrooms</Text>
      </View>
    </View>
  );
};

export default HouseList;

const styles = StyleSheet.create({
  subheading1: {
    color: '#71797E',
    fontSize: 14,
    fontFamily: 'JosefinSans-Italic',
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
