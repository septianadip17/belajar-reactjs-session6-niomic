import React, { Component } from "react";
import Image from "./Image";

class List extends Component {
  render() {
    return (
      <ol>
        <Image linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" lebar="500"/>
        <li>Nasi Padang</li>
        <Image linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" lebar="400"/>
        <li>Nasi Bebek Madura</li>
        <Image linkGambar="https://asset.kompas.com/crops/sc8723qfYHY4j9g87bdmF29CSKE=/0x0:1000x667/750x500/data/photo/2021/10/13/6166694d71a38.jpg" lebar="300"/>
        <li>Ayam Goreng</li>
        <Image linkGambar="https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/24/2022/06/lead-99.jpg" lebar="200"/>
      </ol>
    );
  }
}

export default List;
