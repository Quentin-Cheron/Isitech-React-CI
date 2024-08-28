import { KeyboardEvent, MouseEvent, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

// Custom Components
import { Button } from "../components/Button";
import { Input } from "../components/Input";

// Form Messages
// import { FormError } from "../components/FormMessage/FormError";
// import { FormSuccess } from "../components/FormMessage/FormSuccess";

import Todo from "../components/Todo";
import { ArrayProps } from "../types/Array";

function Home() {
  const [inputValue, setInputValue] = useState("");
  // const [error, setError] = useState(false);
  const [array, setArray] = useState<ArrayProps[]>([]);

  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");

  const navigate = useNavigate();

  const onAdd = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputValue.length === 0) {
      // setError(true);
      return;
    }
    setInputValue("");
    setArray([
      ...array,
      {
        name: inputValue,
        date: new Date().toLocaleDateString(),
        isDone: false,
      },
    ]);
    // setError(false);
  };

  const onUpdate = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputValue.length === 0) {
      // setError(true);
      return;
    }
    const newArray = array.map((el) => {
      if (el.name === name) {
        return {
          name: inputValue,
          date: el.date,
          isDone: el.isDone,
        };
      }
      return el;
    });
    setInputValue("");
    navigate("/");
    setArray(newArray);
    // setError(false);
  };

  const onDelete = (element: ArrayProps) => {
    const newArray = array.filter((el) => el.name !== element.name);
    navigate("/");
    setInputValue("");
    setArray(newArray);
  };

  useEffect(() => {
    if (inputValue.length > 0) {
      // setError(false);
    }
  }, [inputValue]);

  const onSubmit = (
    e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    if (name) {
      onUpdate(e as MouseEvent<HTMLButtonElement>);
    } else {
      onAdd(e as MouseEvent<HTMLButtonElement>);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-12 bg-gray-50 sm:px-12 sm:py-16">
      <h1 className="text-4xl mb-5">Bienvenue sur l'application Todo</h1>
      <form className="w-1/2 grid grid-cols-[1fr,100px] gap-4 items-end">
        <Input
          id="todo"
          name="todo"
          value={inputValue}
          label="Todo list"
          placeholder="Add a todo"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={onSubmit} text={name ? "Update" : "Add"} />
      </form>

      {/* <FormError message="Le champ est requis" isSuccess={!error} />
      <FormSuccess
        message="Formulaire validé"
        isSuccess={!error && array.length > 0}
      /> */}

      <p className="text-sm text-gray-500 w-1/2 mt-2">
        Nombre d'éléments sélectionnés: {array.filter((el) => el.isDone).length}
      </p>

      <div data-testid="list">
        <Todo
          array={array}
          setInputValue={setInputValue}
          onDelete={onDelete}
          setArray={setArray}
        />
      </div>
    </main>
  );
}

export default Home;
