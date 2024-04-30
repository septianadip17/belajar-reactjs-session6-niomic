// import React from 'react'
// const Image = (props) => {
//   return (
//     <div>
//       <img src={props.linkGambar} alt='makanan' width={props.lebar}/>
//     </div>
//   )
// }
// export default Image;

import React, {Component} from 'react';

class Image extends Component {
  render() {
    return(
      <img src={this.props.linkGambar} alt='makanan' width={this.props.lebar}/>
    )
  }
}

export default Image;