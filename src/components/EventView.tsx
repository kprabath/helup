import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Image, View} from 'react-native';
import IconView from './IconView';
import {IconSet} from '../utils/Types';
import colors from '../theme/colors';
import {ScrollView} from 'react-native';
import ChipIcon from './ChipIcon';

const EventView = () => {
  const volunteerTypes = [
    {title: 'Animal Rescue'},
    {title: 'Children'},
    {title: 'Disaster'},
    {title: 'Disasters'},
  ];

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.join}>
          <IconView size={15} color="" name="heart-o" />
        </View>
        <Image
          style={styles.imageWall}
          source={require('../assets/images/gardening.jpg')}
        />
        <View style={styles.chipList}>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            {volunteerTypes.map(el => (
              <ChipIcon
                style={{backgroundColor: '#C2F9DA'}}
                key={el.title}
                title={el.title}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={{marginTop: 10, paddingHorizontal: 4}}>
        <Text style={{fontSize: 14, fontWeight: '500'}}>
          Community Gardning Volunteering
        </Text>
        <View style={{flexDirection: 'row', marginVertical: 5}}>
          <IconView
            name="map-marker-outline"
            type={IconSet.MATERIAL_COMMUNITY}
          />
          <Text style={{fontSize: 12, fontWeight: '500'}}>
            Colombo , Galle Face
          </Text>
        </View>
        <Text style={{fontSize: 12, fontWeight: '500', color: colors.textDark}}>
          Wed, 15th March - 9.30 AM
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 4}}>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/images/leaves.png')} />
          </View>
          <Text
            style={{fontSize: 12, fontWeight: '500', color: colors.textDark}}>
            Luka , Foundation
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#00CC76',
    borderWidth: 1,
    marginRight: 10,
  },
  chipList: {
    position: 'absolute',
    right: 10,
    top: 70,
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingLeft: 20,
  },
  imageWall: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  join: {
    position: 'absolute',
    right: 10,
    top: 10,
    height: 30,
    width: 30,
    backgroundColor: '#00CC76',
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 0.6,
  },
  container: {
    width: 300,
    marginTop: 10,
    marginRight: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    paddingBottom: 10,
  },
});

export default EventView;
