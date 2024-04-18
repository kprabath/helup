import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import ScreenHeader from '../components/HeaderView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import IconView from '../components/IconView';
import {IconSet} from '../utils/Types';
import {TouchableOpacity} from 'react-native';
import colors from '../theme/colors';
import ChipIcon from '../components/ChipIcon';
import EventView from '../components/EventView';

const HomeScreen = () => {
  const {top, bottom} = useSafeAreaInsets();

  const volunteerTypes = [
    {title: 'Discovery'},
    {title: 'Animal Rescue'},
    {title: 'Arts'},
    {title: 'Children'},
    {title: 'Disaster'},
  ];

  return (
    <View style={styles.container(top, 0)}>
      <ScreenHeader
        leftView={
          <View style={styles.row}>
            <IconView
              name="map-marker-outline"
              type={IconSet.MATERIAL_COMMUNITY}
              size={30}
            />
            <Text style={styles.text}>Colombo, Sri Lanka</Text>
          </View>
        }
        rightView={
          <TouchableOpacity>
            <IconView type={IconSet.MATERIAL} name="search" size={30} />
          </TouchableOpacity>
        }
      />
      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={{paddingHorizontal: 16}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.card}>
            <View>
              <Text style={styles.txt1}>HelpUp</Text>
              <Text style={styles.txt2}>
                {'Be Part of\nsomething Bigger !!'}
              </Text>
            </View>
            <View style={styles.imageWrapperStyles}>
              <Image source={require('../assets/images/leaves.png')} />
            </View>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{flexDirection: 'row'}}>
            {volunteerTypes.map(el => (
              <ChipIcon key={el.title} title={el.title} />
            ))}
          </ScrollView>

          {/* intersts section */}
          <View style={{marginTop: 10}}>
            <Text style={{fontWeight: 'bold'}}>Based on your interests</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <EventView />
              <EventView />
              <EventView />
            </ScrollView>
          </View>

          {/* others section */}
          <View style={{marginTop: 10}}>
            <Text style={{fontWeight: 'bold'}}>Others</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <EventView />
              <EventView />
              <EventView />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: (top: number, bottom: number): any => ({
    backgroundColor: 'white',
    flex: 1,
    paddingTop: top,
    paddingBottom: bottom,
  }),
  text: {
    fontSize: 15,
    paddingLeft: 10,
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  card: {
    backgroundColor: colors.white,
    marginVertical: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00CC76',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageWrapperStyles: {
    padding: 10,
    backgroundColor: '#C2F9DA',
    borderRadius: 40,
  },
  txt1: {color: '#2ACD73', fontWeight: 'bold', fontSize: 24},
  txt2: {fontWeight: 'bold', marginTop: 10, fontSize: 18},
  content: {
    backgroundColor: colors.background,
    flex: 1,
  },
});

export default HomeScreen;
