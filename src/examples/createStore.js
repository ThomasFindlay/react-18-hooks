import { useSyncExternalStore } from "react";
import produce from "immer";

export const createStore = createStateFn => {
  // Create a new copy of the state object
  let state = {};

  // Listeners Set to store all store subscribers
  const listeners = new Set();

  // Add a new subscriber
  const subscribe = listener => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  const setState = updater => {
    // Store a reference to the current state for later
    const prevState = state;
    // Create a deep clone of the current state
    // so it can be easily modified
    const nextState = produce(state, updater);
    state = nextState;
    // Notify all subscribers about the state update and pass new and previous states
    listeners.forEach(listener => listener(nextState, prevState));
  };

  const getState = () => state;

  const useStore = selector => {
    // Sync the store
    return useSyncExternalStore(
      subscribe,
      typeof selector === "function" ? () => selector(getState()) : getState
    );
  };

  useStore.subscribe = subscribe;

  state = createStateFn(setState, getState);

  return useStore;
};
