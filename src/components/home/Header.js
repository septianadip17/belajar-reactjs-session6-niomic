import React, { Component } from "react";
import "./header.css"
const judul = {
  color: "orange",
  backgroundColor: "blue",
  marginTop: "100px",
};

class Header extends Component {
  //  ini adalah state dan props
  constructor(props) {
    super(props);
    this.state = {
      daftar: "Daftar Makanan Nusantara",
      dataList: this.props.list,
      statusRendering: true,
      date: new Date(),
    };
    this.handlePesan = this.handlePesan.bind(this);
    this.handleElement = this.handleElement.bind(this);
  }

  handlePesan(value, e) {
    e.preventDefault(); //agar tidak reload
    alert(this.state.daftar);
    alert(value);
  }

  componentDidMount() {
    console.log("Jalan: componentDidMount");
  }

  handleElement() {
    this.setState((state, props) => {
      return { statusRendering: !state.statusRendering };
    });
  }

  render() {
    console.log("Jalan : render");
    console.log(this.state.statusRendering);
    return (
      <div>
        {this.state.statusRendering === true ? (
          <div>
            <h1
              style={{
                color: "blue",
                backgroundColor: "orange",
                marginTop: "100px",
              }}
            >
              Selamat Datang
            </h1>
            <h2 style={judul}>Silakan Pilih Makanan</h2>
          </div>
        ) : (
          <div>
            <h1 id="judulKedua">Selamat Tinggal</h1>
            <h2 className="judulInfo">Jangan Lupa Datang Kembali</h2>
          </div>
        )}
        <button onClick={this.handleElement}>Change</button>
      </div>
    );
    // return  (
    //   <div>
    //     <h2>Makanan Khas Indonesia</h2>
    //     <p>{this.state.daftar}</p>
    //     <p>{this.state.dataList}</p>
    //     <a href="/" onClick={e => this.handlePesan("Pesan Dari Header", e)}>Halaman Header</a>
    //   </div>
    // )
  }
}

export default Header;
