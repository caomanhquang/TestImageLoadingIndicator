import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const URL_IMG1 = "http://i.imgur.com/Z0NN5.jpg";
const URL_IMG2 = "http://google.com:81";
const URL_IMG3 = "http://not_existed/image.png";

export default class TestImage extends Component {
  _renderImage(image_url) {
    return <Image style = {styles.image}
                  source = {{ uri: image_url }}
                  showLoadingIndicator = {true}
                  loadingIndicatorSize = 'small' 
                  loadingIndicatorColor = 'blue'
                  failureImageSource = {require('./noimage.png')}
                  resizeMethod = 'resize'
                  resizeMode = 'cover' />
  }

  render() {
    return (
      <View style = { styles.container }>
        {this._renderImage(URL_IMG1)}
        {this._renderImage(URL_IMG2)}
        {this._renderImage(URL_IMG3)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',   // vertical alignment
    alignItems: 'center',       // horizontal alignment
    backgroundColor: '#F5FCFF',
  },

  image: {
    width: 150, height: 100
  }
});

AppRegistry.registerComponent('TestImage', () => TestImage);