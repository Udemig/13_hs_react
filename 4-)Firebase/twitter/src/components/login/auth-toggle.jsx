const AuthToggle = ({ setIsModeLogin, isModeLogin }) => {
  return (
    <p className="mt-5 select-none">
      <span className="text-gray-500">{isModeLogin ? "Hesabınız yoksa" : "Hesabınız varsa"}</span>

      <span className="text-blue-500 cursor-pointer ms-2 hover:underline" onClick={() => setIsModeLogin(!isModeLogin)}>
        {isModeLogin ? "Kaydolun" : " Giriş Yapın"}
      </span>
    </p>
  );
};

export default AuthToggle;
