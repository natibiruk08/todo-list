import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { nanoid } from "nanoid";

type AddTodoProps = {
  addTodo: Function;
};

function AddTodo({ addTodo }: AddTodoProps) {
  const toast = useToast();

  const [content, setContent] = useState("");
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!content) {
      return toast({
        title: "No content",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    const todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);

    setContent("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt={8}>
        <Input
          variant={"filled"}
          placeholder="type here"
          value={content}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setContent(e.target.value)
          }
        />
        <Button colorScheme="pink" px={8} type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
