import { Component } from "react";

class ClassComponent extends Component {
  // Kurucu metot
  constructor(props) {
    super(props);

    // State'i oluştur
    this.state = {
      count: 0,
      studentName: "Didem",
      languages: ["C", "C#", "C++", "Java", "Javascript"],
    };
  }

  // Bileşenin Ekrana Gelmesi
  componentDidMount() {
    console.log(`Bileşen ekrana geldi 🤩 `);
  }

  // Bileşenin Güncellenmesi
  componentDidUpdate() {
    console.log(`Bileşen güncellendi 🔥 `);
  }

  // Bileşenin Kaldırılması
  componentWillUnmount() {
    console.log(`Bileşen ekrandan gitti ❌ `);
  }

  // Renderlama yapacak metot
  render() {
    return (
      <div>
        <h1 className="text-center">Class Counter</h1>

        <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
            className="btn btn-success"
          >
            +
          </button>
          <span className="fs-1">{this.state.count} </span>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
            className="btn btn-danger"
          >
            -
          </button>
        </div>

        {/* <h1>Öğrenci Adı: {this.state.studentName} </h1>

        <div>
          {this.state.languages.map((item) => (
            <h1>{item} </h1>
          ))}
        </div> */}
      </div>
    );
  }
}

export default ClassComponent;
