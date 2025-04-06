import React from "react";
import Container from "./Container";
import Field from "./Field";

const App = () => {
  return (
    <Container>
      <h1>Udemig</h1>

      <form>
        <Field>
          <label>İsim:</label>
          <input type="text" />
        </Field>
        <Field>
          <label>Soyisim:</label>
          <input type="text" />
        </Field>
        <Field>
          <label>Email:</label>
          <input type="text" />
        </Field>
        <Field>
          <label>Şifre:</label>
          <input type="text" />
        </Field>
        <Field>
          <label>Mesajınız:</label>
          <textarea
            rows={5}
            style={{ resize: "none" }}
            name=""
            id=""
          ></textarea>
        </Field>
      </form>
    </Container>
  );
};

export default App;
