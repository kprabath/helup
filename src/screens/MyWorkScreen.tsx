import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import ScreenHeader from '../components/HeaderView';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import IconView from '../components/IconView';
import {IconSet} from '../utils/Types';
import {TouchableOpacity} from 'react-native';
import colors from '../theme/colors';

const MyworkScreen = () => {
  const {top, bottom} = useSafeAreaInsets();

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
      <ScrollView
        style={{
          backgroundColor: colors.background,
          paddingHorizontal: 16,
          paddingVertical: 20,
        }}>
        <View>
          <Text style={{fontWeight: 'bold', marginBottom: 10, fontSize: 16}}>
            Upcomming Events
          </Text>
          <View
            style={{
              backgroundColor: colors.lightGrey,
              padding: 10,
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{fontWeight: '500', fontSize: 16}}>
                Foster Cordinator
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 4,
                }}>
                <IconView
                  iconStyle={{marginRight: 10}}
                  size={15}
                  type={IconSet.MATERIAL}
                  name="access-time"
                />
                <Text style={{fontSize: 12}}>12.30 PM - 2.00 PM</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <IconView
                  name="map-marker-outline"
                  type={IconSet.MATERIAL_COMMUNITY}
                  size={15}
                  iconStyle={{marginRight: 10}}
                />
                <Text style={{fontSize: 12}}>Colombo, Waredens Place</Text>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text>May</Text>
              <Text style={{fontWeight: 'bold'}}>12</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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

export default MyworkScreen;
