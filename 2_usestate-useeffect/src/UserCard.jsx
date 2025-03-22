// Bileşen adının yanında yer alan () ile geçilen props'ları karşıladık.
const UserCard = (props) => {
  // Karşılanan props'ları bileşen içerisinde kullandı
  //   console.log(props.name);
  //   console.log(props.surname);
  //   console.log(props.age);

  return (
    <div className="card">
      <img
        src="https://picsum.photos/200"
        className="card-img-top"
        alt="image"
      />
      <div className="card-body">
        <div className="card-text">
          <p className="d-flex align-items-center gap-1">
            <span>İsim:</span>
            <span>{props.name}</span>
          </p>
          <p className="d-flex align-items-center gap-1">
            <span>Soyisim:</span>
            <span>{props.surname}</span>
          </p>
          <p className="d-flex align-items-center gap-1">
            <span>Yaş:</span>
            <span>{props.age}</span>
          </p>
          <p className="d-flex align-items-center gap-1">
            <span>Şehir:</span>
            <span>{props.adress.city}</span>
          </p>
          <p className="d-flex align-items-center gap-1">
            <span>Plaka No:</span>
            <span>{props.adress.cityNo}</span>
          </p>
          <div className="my-3">
            <span>Hobiler:</span>
            {props.hobbies.map((item) => (
              <span>{item} </span>
            ))}
          </div>
        </div>
        <button onClick={() => props.info()} className="btn btn-primary">
          Detay Gör
        </button>
      </div>
    </div>
  );
};

export default UserCard;
