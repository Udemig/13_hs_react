"use client";

const Form = () => {
  return (
    <form
      className="client-component"
      onSubmit={() => {
        alert("gönderildi");
      }}
    >
      <input type="text" placeholder="email" />
      <button>Gönder</button>

      <span className="client">client component</span>
    </form>
  );
};

export default Form;
