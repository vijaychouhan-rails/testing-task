import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles'
import mainStyle from '../common/mainStyles';

const Home = (props) => {
  const {navigation} = props;

  return(
    <View style={styles.container} >
      <TouchableOpacity onPress={() => navigation.navigate('profile')}>
        <Text style={{fontSize: 20}}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

Home.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default Home;