import React, { Component } from "react";
import Header from "./Header"
import Top from "./Top";
import CustomInput from "./Custominput"
import Footer from "./Footer";


class App extends Component {
  render() {
    return (
      <div>
        <Header list="3 Terbaik" judul='Belajar 6' />
        <Top />
        <CustomInput/>
        {/* <Main /> */
        // <Form/>
        /* <List/> */}
        <Footer name="Makanan Nusantara" tahun="1998" />
      </div>
    );
  }
}

export default App;
