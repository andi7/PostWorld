import React from 'react';
import { Image, Dimensions } from 'react-native';

class DynamicHeightImage extends React.PureComponent {
  state = { imageHeight: 0 };

  componentDidMount() {
    const { source } = this.props;

    if (source) {
      Image.getSize(source, (width, height) => {
        // calculate image width and height
        const screenWidth = Dimensions.get('window').width;
        const scaleFactor = width / screenWidth;
        const imageHeight = height / scaleFactor;

        this.setState({ imageHeight });
      });
    }
  }

  render() {
    const { imageHeight } = this.state;
    const { style, ...props } = this.props;

    return <Image {...props} style={[style, { height: imageHeight }]} />;
  }
}

export { DynamicHeightImage };
