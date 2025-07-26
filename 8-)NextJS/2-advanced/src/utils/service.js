// api isteğini atan fonksiyonu hazırla
export const getUsers = async () => {
  const res = await fetch("https://dummyjson.com/users", {
    // cache: "no-store", // cache'i devre dışı bırak
    next: {
      revalidate: 60, // 60 saniye sonra yeniden istek at
    },
  });
  return await res.json();
};
