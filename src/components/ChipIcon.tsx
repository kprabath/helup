import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import colors from '../theme/colors';

const ChipIcon = ({title, style}: {title: any; style?: any}) => (
  <TouchableOpacity
    style={[
      {
        borderRadius: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.border,
        marginRight: 5,
        minWidth: 70,
        alignItems: 'center',
        justifyContent: 'center',
      },
      style,
    ]}>
    <Text style={{fontWeight: 'bold', fontSize: 12}}>
      {title || 'Animal Rescue'}
    </Text>
  </TouchableOpacity>
);

export default ChipIcon;
