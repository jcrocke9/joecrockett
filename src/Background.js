import React, { Component } from 'react';
import WorldMap from './WorldMap';

export class Background extends React.Component {
    render() {
      return (
        <Image source={require('image!background')} style={styles.container}>
          <WorldMap />
        </Image>
      );
    }
  }
  
  var styles = StyleSheet.create({
    container: {
      flex: 1,
      // remove width and height to override fixed static size
      width: null,
      height: null,
    }
  });
