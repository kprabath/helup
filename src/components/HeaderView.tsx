import React, {ReactElement, ReactNode} from 'react';
import {
  StyleProp,
  TextStyle,
  ViewStyle,
  View,
  StyleSheet,
  LayoutChangeEvent,
  Text,
} from 'react-native';
import {DEFAULT_APPBAR_HEIGHT} from '../utils/Util';
import colors from '../theme/colors';

type Elements = ReactElement | ReactElement[] | null;
export type ScreenHeaderProps = {
  mainContainerStyles?: StyleProp<ViewStyle>;
  leftView?: Elements;
  rightView?: Elements;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  customTitle?: Elements;
  iconContainerStyles?: StyleProp<ViewStyle>;
  onScreenLayout?: (event: LayoutChangeEvent) => void;
  headerFooter?: ReactNode;
  headerStyles?: StyleProp<ViewStyle>;
};

const ScreenHeader = ({
  mainContainerStyles,
  leftView,
  rightView,
  title,
  titleStyle,
  customTitle,
  iconContainerStyles,
  onScreenLayout,
  headerFooter,
  headerStyles,
}: ScreenHeaderProps) => {
  return (
    <View style={[styles.mainContainer, headerStyles]}>
      <View
        onLayout={onScreenLayout}
        style={[styles.container, mainContainerStyles]}>
        <View style={[styles.iconContainer, iconContainerStyles]}>
          {leftView}
          {rightView}
        </View>
        {customTitle ?? <Text style={titleStyle}>{title}</Text>}
      </View>
      {headerFooter}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: DEFAULT_APPBAR_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    paddingHorizontal: 14,
    left: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  mainContainer: {
    borderBottomWidth: 1,
    borderColor: colors.toolbarBorder,
  },
});

export default ScreenHeader;
