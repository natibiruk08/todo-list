import {
  Badge,
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { Todo } from "../types/Todo";

type TodoListProps = {
  todos: Todo[];
  deleteTodo: Function;
};

function TodoList({ todos, deleteTodo }: TodoListProps) {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p={4} m={4} borderRadius={"lg"}>
        No Todos, YAY!!!
      </Badge>
    );
  }

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
