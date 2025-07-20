// api isteğini simüle etmek için kullanılır
const delay = (ms = 1000) => {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

export default delay;
