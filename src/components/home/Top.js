import React from 'react'

const Top = () => {
  // function handlePesan(){
  //   alert("Halaman Top Tampil!");
  // }
  const handlePesan = (value, e) => {
    e.preventDefault(); //agar tidak reload
    alert("Halaman Top Tampil!");
    alert(value);
  }
  return (
    <div>
      <a href="/" onClick={e => handlePesan("Pesan Dari Top", e)}>Halaman Top</a>
    </div>
  )
}

export default Top