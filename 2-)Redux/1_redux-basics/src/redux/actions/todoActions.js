import actionTypes from "../actionTypes/actionTypes";
/*

Redux'da reducer'a haber vermek için birer obje oluşturulur.Bu objeler bir type birde payload değerine sahiptir.Bu objeleri aynı dispatch işlemini defalarca yapınca kod tekrarına düşeriz.Bunu engellemek içinse aksiyon oluşturan fonksiyonlar yazarız.


*/
const getTodos = (payload) => ({ type: actionTypes.get, payload });

const addTodo = (payload) => ({ type: actionTypes.add, payload });

const deleteTodo = (payload) => ({ type: actionTypes.delete, payload });

const updateTodo = (payload) => ({ type: actionTypes.update, payload });

const toggleTodo = (payload) => ({ type: actionTypes.toggle, payload });

export { getTodos, addTodo, deleteTodo, updateTodo, toggleTodo };
