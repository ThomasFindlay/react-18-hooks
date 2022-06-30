import { useEffect } from "react";
import { createStore } from "./createStore";

const useCountStore = createStore(set => {
  return {
    count: 0,
    decrement: () => {
      set(state => {
        state.count -= 1;
      });
    },
    increment: () => {
      set(state => {
        state.count += 1;
      });
    },
    divide: () => {
      set(state => {
        state.count /= 2;
      });
    },
    multiply: () => {
      set(state => {
        state.count *= 2;
      });
    },
  };
});

const UseSyncExternalStoreExample = props => {
  const countStore = useCountStore();
  const multipliedCount = useCountStore(store => store.count * 2);
  const multiply = useCountStore(store => store.multiply);

  useEffect(() => {
    const unsubscribe = useCountStore.subscribe((state, prevState) => {
      console.log("State changed");
      console.log("Prev state", prevState);
      console.log("New state", state);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">useSyncExternalStore Example</h2>

      <div>Count: {countStore.count}</div>
      <div>Multiplied Count: {multipliedCount}</div>
      <div className="flex gap-4 mt-4">
        <button
          className="bg-sky-700 text-sky-100 px-4 py-3"
          onClick={countStore.decrement}
        >
          Decrement
        </button>
        <button
          className="bg-sky-700 text-sky-100 px-4 py-3"
          onClick={countStore.increment}
        >
          Increment
        </button>
        <button
          className="bg-sky-700 text-sky-100 px-4 py-3"
          onClick={countStore.divide}
        >
          Divide
        </button>
        <button
          className="bg-sky-700 text-sky-100 px-4 py-3"
          onClick={multiply}
        >
          Multiply
        </button>
      </div>
    </div>
  );
};

export default UseSyncExternalStoreExample;
