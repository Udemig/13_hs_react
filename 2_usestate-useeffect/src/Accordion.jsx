import { useState } from "react";
const Accordion = () => {
  // State kurulumu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border p-2 rounded my-4">
      <div className="d-flex align-items-center justify-content-between border-bottom border-2 p-1">
        <h1>State Nedir?</h1>
        {/* isOpen değerini her tıklanmada mevcut değerin tersine çevirdik */}
        <button onClick={() => setIsOpen(!isOpen)} className="btn btn-dark">
          {isOpen ? "x" : "+"}
        </button>
      </div>

      {isOpen && (
        <div className="p-2">
          <p className="lead">
            State react içerisinde verilerimizi tutma,dinamik işlemler yapma
            imkanı sunan bir react hook'udur.
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
