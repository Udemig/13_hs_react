const ContentLoader = () => {
  const arr = new Array(12).fill("");

  return arr.map((i, key) => (
    <div
      key={key}
      data-testid="loader"
      className="p-5 border shadow rounded-md text-transparent select-none bg-gray-100 animate-pulse"
    >
      <div>.</div>
      <div>.</div>
    </div>
  ));
};

export default ContentLoader;
