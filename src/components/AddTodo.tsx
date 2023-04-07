import { Button, HStack, Input } from "@chakra-ui/react";

function AddTodo() {
  return (
    <form>
      <HStack mt={8}>
        <Input variant={"filled"} placeholder="type here" />
        <Button colorScheme="pink" px={5}>
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
