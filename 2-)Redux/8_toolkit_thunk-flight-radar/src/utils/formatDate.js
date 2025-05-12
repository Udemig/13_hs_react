// unix zzman formatındaki tarihi alıp tarihin saat ve dakika verisini döndüren fonksiyon

const formatDate = (unix_time) => {
  // değer yoksa null döndür
  if (!unix_time || unix_time === 0) return null;

  // saniye formatındaki veriyi milisaniye formatına çevir
  const formatted = new Date(unix_time * 1000);

  // tarihi okunabiilir veri formatına çevir
  return formatted.toLocaleTimeString("tr", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default formatDate;
