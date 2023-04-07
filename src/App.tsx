import { Heading, IconButton, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { useEffect, useState } from "react";
import { Todo } from "./types/Todo";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos") || "{}") || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo: Todo) {
    setTodos([...todos, todo]);
  }

  function deleteTodo(id: number) {
    const newTodos = todos.filter((todo: Todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  return (
    <VStack p={4}>
      <IconButton
        icon={<FaSun />}
        aria-label={""}
        isRound
        size={"lg"}
        alignSelf={"flex-end"}
      />
      <Heading
        mb={8}
        fontWeight={"extrabold"}
        size={"2xl"}
        bg={"blue.500"}
        bgClip={"text"}
      >
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
