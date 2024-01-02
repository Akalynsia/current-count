import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

/// Tamamen fonksiyonel bir counter oluşturun
// Sayıyı görüntülemeyi ve sayıyı artırmayı mümkün kılın
export default function CountUp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="text-center p-8">
      <h3 className="text-lg font-semibold text-gray-900">
        Current Count: {state.count}
      </h3>
      <div className="mt-6">
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="inline-flex items-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 mr-2"
        >
          <span className="flex items-center">
            <MinusIcon className="-ml-0.5 mr-1.5 h-5 w-5" />
            Decrease
          </span>
        </button>
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          <span className="flex items-center">
            <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" />
            Increase
          </span>
        </button>
      </div>
    </div>
  );
}
