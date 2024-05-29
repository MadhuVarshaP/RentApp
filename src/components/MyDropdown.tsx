import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const MyDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const options = [
    {label: 'Chennai', value: 'Chennai'},
    {label: 'Bangalore', value: 'Bangalore'},
    {label: 'Salem', value: 'Salem'},
  ];
  const handleChangeItem = item => {
    setSelectedValue(item.value);
  };
  return (
    <View style={styles.container}>
      <DropDownPicker
        items={options}
        value={selectedValue}
        placeholder="Select"
        placeholderStyle={styles.placeholder}
        containerStyle={[styles.containerBox, {zIndex: 999}]}
        style={styles.dropdown}
        itemStyle={{justifyContent: 'flex-start'}}
        open={open}
        setOpen={setOpen}
        onChangeItem={handleChangeItem}
      />
    </View>
  );
};

export default MyDropdown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    width: 120,
  },
  placeholder: {
    color: 'black',
    fontFamily: 'JosefinSans-Medium',
    textAlign: 'center',
  },
});
