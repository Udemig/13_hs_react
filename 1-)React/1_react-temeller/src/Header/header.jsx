import "./Header.css";
/*
* React component (bileşen) tabanlı bir framework'dür.Bu sebeple projeyi farklı farklı componentler oluşturarak kodlarız.


* Bir component temelde bir javascript fonksiyonudur.Tabi tamamen bir fonksiyon dememiz doğru olmayacaktır.Componentler içerisinde bir html return etmesi sebebiyle fonksiyonlardan ayrışır

? Bir component nasıl oluşturulur ?

* 1-) Bir fonksiyon oluştur
* 2-) Bu fonksiyon içerisinde bir html return etsin.Return edilen bu html componentin ekranda gözükeceği çıktıdır.


*/

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>Udemig</h1>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">Ana Sayfa</a>
          </li>
          <li>
            <a href="#">Hakkımızda</a>
          </li>
          <li>
            <a href="#">İletişim</a>
          </li>
        </ul>
      </nav>

      <div className="buttons">
        <button>Giriş Yap</button>
        <button>Kayıt Ol</button>
      </div>
    </header>
  );
}

export default Header;
