import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import React from 'react';
import {BadgesData} from '../constant/BadgesData';
import {Colors} from '../constant/Color';

const Badges = () => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Image
        source={require('../../assets/images/badge.png')}
        style={{height: 60, width: 60}}
      />
      <View style={{flexDirection: 'column'}}>
        <View style={styles.headingContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={{fontWeight: '600', fontSize: 17, color: Colors.GOLD}}>
            {item.multiply}
          </Text>
        </View>
        <Text style={styles.content}>{item.content}</Text>
      </View>
    </View>
  );
  return (
    <View>
      <FlatList
        data={BadgesData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Badges;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 10,
    backgroundColor: 'transparent',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    borderColor: Colors.BORDER_COLOR,
    borderWidth: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 17,
    color: Colors.BLACK2,
    fontWeight: '600',
    paddingLeft: 20,
  },
  content: {
    fontSize: 14,
    color: Colors.DARK_GREY,
    fontWeight: '500',
    paddingLeft: 20,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
