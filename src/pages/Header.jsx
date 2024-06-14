import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="container-1">
        <span className="beranda">
        Beranda<br />
        
        </span>
        <span className="produk-kami">
        Produk Kami
        </span>
      </div>
      <div className="artikel">
      Artikel
      </div>
      <div className="rectangle-2">
      </div>
      <div className="container-2">
        <div className="tentang-kami">
        Tentang Kami 
        </div>
        <div className="container">
          <span className="cari-produk">
          Cari Produk
          </span>
          <img className="vector" src="assets/vectors/Vector3_x2.svg" />
        </div>
      </div>
    </div>
  )
}