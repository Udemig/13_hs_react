import "./Card.css";
function Card() {
  return (
    <div className="card">
      <div className="card-image">
        <img src="https://picsum.photos/200" alt="" />
      </div>
      <div className="card-body">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
          veritatis voluptatum! Aperiam eveniet eum nesciunt libero incidunt
          quibusdam, aut, culpa ipsa quis ab vitae, est quia cumque quaerat
          illum accusamus.
        </p>

        <button className="card-btn">Detay Gör</button>
      </div>
    </div>
  );
}

export default Card;
