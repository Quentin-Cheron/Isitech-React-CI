import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { ArrayProps } from "../types/Array";
import { Link, useSearchParams } from "react-router-dom";
import { Checkbox } from "./Checkbox";

type iProps = {
  array: ArrayProps[];
  setInputValue: Dispatch<React.SetStateAction<string>>;
  onDelete: (element: ArrayProps) => void;
  setArray: Dispatch<SetStateAction<ArrayProps[]>>;
};

export const Todo: FC<iProps> = ({
  array,
  setInputValue,
  onDelete,
  setArray,
}) => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");

  useEffect(() => {
    if (name) setInputValue(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const onhandleChecked = (e: boolean, element: ArrayProps) => {
    const newArray = array.map((el) => {
      if (el.name === element.name) {
        return {
          name: el.name,
          date: el.date,
          isDone: e,
        };
      }
      return el;
    });
    setArray(newArray);
  };

  return (
    <div className="mt-8 flow-root w-1/2">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Is done
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Modifier
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Supprimer
                </th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {array.map((el) => (
                <tr key={el.name}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    <Checkbox
                      checked={el.isDone}
                      onChange={(e) => onhandleChecked(e, el)}
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    {el.name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {el.date}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <button>
                      <Link to={`/name=${el.name}`}>Modifier</Link>
                    </button>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <button onClick={() => onDelete(el)}>Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
