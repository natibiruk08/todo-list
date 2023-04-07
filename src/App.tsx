import { Heading, IconButton, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import TodoList from "./components/TodoList";

function App() {
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
      <TodoList />
    </VStack>
  );
}

export default App;
