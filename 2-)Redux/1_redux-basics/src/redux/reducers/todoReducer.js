// 1: State'in başlangıç değerini tanımla
// 2. Reducer oluştur
// 3. Reducer içerisinde state'in gelen action değerine göre nasıl değişeceğine karar ver.Reducer'ın aldığı state propu'nun başlangıç değerini initialState'e aktar
// 4. Reducer'ı export et
const initialState = {
  todos: [],
  isAdmin: false,
};

const todoReducer = (state = initialState, action) => {
  console.log(action);

  switch (action.type) {
    // Todo Ekle
    case "ADD_TODO":
      // Action içerisindeki yer alan verileri todos dizisine aktar
      const newTodos = state.todos.concat(action.payload);

      // State'i güncelle
      return { ...state, todos: newTodos };
    // Todo Sil
    case "DELETE_TODO":
      // Silinecek elemanı todos dizisinden kaldır
      const filtredTodos = state.todos.filter((i) => i.id != action.payload);
      return { ...state, todos: filtredTodos };
    // Todoyu Güncelle
    case "UPDATE_TODO":
      // Güncellenecek elamanı todos dizisi içerisinde bul ve güncelle
      const editedTodo = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      return { ...state, todos: editedTodo };
    // Todonun is_done değerini güncelle
    case "TOGGLE_TODO":
      // State içerisindeki todos dizisini dön güncellencek elemanı bul ve güncellenecek elemanın is_done değerini mevcut değerinin tersine çevir
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, is_done: !todo.is_done } : todo
      );
      return { ...state, todos: updatedTodos };
    // Default durum
    default:
      return state;
  }
};

export default todoReducer;
