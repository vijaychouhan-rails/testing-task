import {StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const mainStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  mL30: {
    marginLeft: 30,
  },
  pT5: {
    paddingTop: 5,
  },
   pT7: {
    paddingTop: 7,
  },
   pR10: {
    paddingRight: 10,
  },
   pR35: {
    paddingRight: 35,
  },
   pL40: {
    paddingLeft: 40,
  },
  pL40: {
    paddingLeft: 40,
  },
  whiteBgColor: {
    backgroundColor: colors.white,
    paddingBottom: 15,
  },
  fBlack: {
    color: colors.black,
  },
  fBold: {
    fontWeight: 'bold',
  },
  alignSelfEnd: {
    alignSelf: 'flex-end',
  },
  alignMeCenter: {
    alignSelf: 'center',
  },
  alignSelfCenter: {
    alignItems: 'center',
  },
  jContentCenter: {
    justifyContent: 'center',
  },
  flex1: {
    flex: 1,
  },
});

export default mainStyle;
