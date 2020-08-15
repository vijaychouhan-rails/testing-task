import {StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
    profileView: {
      flex: 1,
      backgroundColor: colors.lightWhite,
      paddingHorizontal: 3,
    },
    nameStyle:{
      fontWeight: 'bold',
      fontSize: 30,
      color: colors.darkgray,
      paddingRight: 5
    },
    profileStyle: {
      paddingVertical: 5,
      paddingHorizontal: 20,
      backgroundColor: colors.white,
    },
    infoStyle: {
      fontSize: 16,
      paddingTop: 2,
      paddingLeft: 15,
      color: colors.gray,
    },
    infoView: {
      padding: 20,
      backgroundColor: colors.white,
      marginTop: 2,
    },
    infoText: {
      fontSize: 18,
      color: colors.gray
    },
    imagesView: {
      flexDirection: 'row',
      width: '100%',
      flexWrap: 'wrap',
      justifyContent: 'center',
      backgroundColor: colors.white,
    },
    imageStyle:{
      height: 122,
      width: 122,
      margin: 5,
      borderRadius: 15,
    },
    recentStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 15,
      color: colors.darkgray,
    },
    iconView: {
      flexDirection: "row",
      justifyContent: 'center',
      backgroundColor: colors.white,
      width: '100%',
      marginTop: 2,
    },
    dotView: {
      padding: 5,
      backgroundColor: colors.white,
      marginTop:2,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    dotStyle: {
      height: 15,
      width: 15 ,
      borderRadius:13,
      marginRight: 12,
    },
});

export default styles;
