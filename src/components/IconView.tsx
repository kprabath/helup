import React from 'react';
import {StyleProp, TextStyle, View} from 'react-native';
import {Icon} from 'react-native-elements';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesomePro from 'react-native-vector-icons/FontAwesome5Pro';
import {IconSet} from '../utils/Types';
import Colors from '../theme/colors';
import {isEmpty} from '../utils/Util';

interface PropTypes {
  name: string;
  type?: any;
  iconStyle?: TextStyle | StyleProp<TextStyle>;
  color?: string;
  size?: number;
}

const getProType = (type: IconSet) => {
  let proType: any = {regular: true};
  if (type === IconSet.FONT_AWESOME_5_PRO_LIGHT) {
    proType = {light: true};
  } else if (type === IconSet.FONT_AWESOME_5_PRO_SOLID) {
    proType = {solid: true};
  } else if (type === IconSet.FONT_AWESOME_5_PRO_BRAND) {
    proType = {brand: true};
  }
  return proType;
};

const IconView: React.FC<PropTypes> = ({
  name,
  type = IconSet.FONT_AWESOME,
  iconStyle,
  color = Colors.primary,
  size = 14,
}) => {
  if (isEmpty(type) || isEmpty(name)) {
    return <View />;
  }
  if (type === IconSet.FONT_AWESOME_5) {
    return (
      <IconFontAwesome
        name={name}
        style={iconStyle}
        color={color}
        size={size}
      />
    );
  } else if (type.startsWith(IconSet.FONT_AWESOME_5_PRO)) {
    const proType = getProType(type);
    return (
      <IconFontAwesomePro
        name={name}
        style={iconStyle}
        color={color}
        size={size}
        {...proType}
      />
    );
  }
  return (
    <Icon
      name={name}
      type={type}
      iconStyle={iconStyle as TextStyle}
      color={color}
      size={size}
    />
  );
};

export default IconView;
