import type { ChangeEvent, FormEvent, MouseEvent } from "react";

const Form = () => {
  // butona tıklanınca:
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  // input değiştiğinde:
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  // form gönderildiğinde:
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" />
      <button onClick={handleClick}>Gönder</button>
    </form>
  );
};

export default Form;
