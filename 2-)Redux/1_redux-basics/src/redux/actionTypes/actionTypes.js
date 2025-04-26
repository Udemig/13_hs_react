/*
* Action'lar type ve payload alır.Buradaki type reducer'ın nasıl güncelleneceğini belirten bir string'dir.Bu string'lerin yanlış yazımı proje içerisindeki type değerlerin artması durumunda odlukça mümkündür.Bunu engellemek için actionTypes objeleri oluşturulur.Bu obje içerisinde string'ler birer key'e atanır.Atanan key değerleri sayesinde otomatik tamamlama devreye girer ve hatalı yazım önlenir.


*/
const actionTypes = {
  get: "GET_TODO",
  add: "ADD_TODO",
  delete: "DELETE_TODO",
  update: "UPDATE_TODO",
  toggle: "TOGGLE_TODO",
};

export default actionTypes;
