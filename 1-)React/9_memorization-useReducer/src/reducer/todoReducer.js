import { v4 } from "uuid";

const todoReducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    // Ekle
    case "ADD":
      // State içerisindeki todos'a eklenecek elemanı hazırla
      const newTodo = { id: v4(), text: action.payload };
      // State içerisindeki todos dizisi ile yeni elemanı birleştir
      const updated = state.todos.concat(newTodo);

      return { ...state, todos: updated };

    // Güncelleme
    case "UPDATE":
      // Güncellencek elemanı todos dizisi içerisinde bul ve değerini güncelle
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
      return { ...state, todos: updatedTodos };

    // Silme
    case "DELETE":
      // Silinecek elemanı diziden kaldır
      const filtred = state.todos.filter((i) => i.id != action.payload);
      // State'i güncelle
      return { ...state, todos: filtred };
  }
};

export default todoReducer;
