import React from 'react';
import { Image, Dimensions } from 'react-native';

class DynamicHeightImage extends React.PureComponent {
  state = { imageHeight: 0 };

  componentDidMount() {
    this.calculateImageHeight();
  }

  componentDidUpdate(prevProps) {
    if (this.props.source !== prevProps.source) {
      this.calculateImageHeight();
    }
  }

  calculateImageHeight() {
    const { source } = this.props;

    if (source) {
      const src = typeof source === 'number' ? source : source.uri;

      Image.getSize(
        src,
        (width, height) => {
          // calculate image width and height
          const screenWidth = Dimensions.get('window').width;
          const scaleFactor = width / screenWidth;
          const imageHeight = height / scaleFactor;

          this.setState({ imageHeight });
        },
        (...p) => console.log(p, src)
      );
    }
  }

  render() {
    const { imageHeight } = this.state;
    const { style, ...props } = this.props;

    return <Image {...props} style={[style, { height: imageHeight }]} />;
  }
}

export { DynamicHeightImage };
