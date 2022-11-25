import { ACTIONS } from "./App";
export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      onclick={() =>
        dispatch({ type: ACTIONS.CHOOSE_ADD_DIGIT, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}
