const Socials = () => {
  console.log("socials component render edildi");

  return (
    <div className="server-component border-amber-500">
      <h1>Socials</h1>
      <h2>Instagram</h2>
      <h2>Twitter</h2>
      <h2>Facebook</h2>

      <span className="server">
        server component (ama kullanılığı yerden dolayı client'a döndü)
      </span>
    </div>
  );
};

export default Socials;
