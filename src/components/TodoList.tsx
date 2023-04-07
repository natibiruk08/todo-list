import {
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

type TodoList = {
  id: number;
  body: string;
};

type TodoListProps = {
  todos: TodoList[];
  deleteTodo: Function;
};

function TodoList({ todos, deleteTodo }: TodoListProps) {
  return (
    <VStack
      divider={<StackDivider />}
      borderColor={"gray.100"}
      borderWidth={"2px"}
      p={4}
      borderRadius={"lg"}
      w={"100%"}
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems={"stretch"}
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            aria-label=""
            icon={<FaTrash />}
            isRound
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
