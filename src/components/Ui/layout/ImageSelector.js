import React, { Component } from "react";

import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";


import img1 from "../../../../src/img/product/p1.jpg";
import img2 from "../../../../src/img/product/p1.jpg";
import img3 from "../../../../src/img/product/p1.jpg";
import img4 from "../../../../src/img/product/p1.jpg";
import img5 from "../../../../src/img/product/p1.jpg";
import img6 from "../../../../src/img/product/p1.jpg";
import img7 from "../../../../src/img/product/p1.jpg";
import img8 from "../../../../src/img/product/p1.jpg";

const imageList = [img1, img2, img3, img4, img5, img6, img7, img8];

class ImageSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
    this.onPick = this.onPick.bind(this);
  }

  onPick(image) {
    console.log(image);

    this.setState({ image });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <ImagePicker
          images={imageList.map((image, i) => ({ src: image, value: i }))}
          onPick={this.onPick}
        />
        <button type="button" onClick={() => console.log(this.state.image)}>
          OK
        </button>
      </div>
    );
  }
}

export default ImageSelector
