// Girdi: Furkan Evin
// Şuan:  @furkan_evin
// Çıktı: @furkan_evin

const getUserName = (name) => {
  return "@" + name.toLowerCase().replaceAll(" ", "_");
};

export { getUserName };
