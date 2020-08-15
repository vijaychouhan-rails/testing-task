import React from 'react';
import {Image, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';

import mainStyle from '../../components/common/mainStyles'
import styles from './styles'

const UserImages = props => {

  const {images, setActive} = props;

  const renderItem = images => {
     const {item} = images;

    return (
      <View style={styles.imagesView}>
        {item.map((item, index) => {
          return( <Image key={index} source={{uri: item.image}} style={styles.imageStyle}/>)
        })
      }
     </View>
    );
  };

  return (
    <View style={[mainStyle.alignSelfCenter,mainStyle.whiteBgColor]}>
      <Carousel
        keyboardShouldPersistTaps='handled'
        sliderHeight={150}
        sliderWidth={400}
        itemHeight={50}
        itemWidth={400}
        data={images}
        renderItem={renderItem}
        onSnapToItem={index => setActive(index)}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

UserImages.propTypes = {
  images: PropTypes.array.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default UserImages;
