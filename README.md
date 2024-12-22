# React Native useState: Unexpected Rendering Behavior with Nested Objects

This repository demonstrates a common issue encountered when using the `useState` hook in React Native with nested objects.  Updating deeply nested properties may not trigger a re-render due to React's shallow comparison mechanism.  The `bug.js` file showcases the problem, while `bugSolution.js` provides a solution using the `useReducer` hook or Immer library.

## Problem
The `useState` hook's shallow comparison only checks for changes at the top level of the object. If a nested property is updated, the component might not re-render.  This leads to UI inconsistencies where changes aren't reflected.

## Solution
The recommended solutions are:

1. **useReducer hook**:  The `useReducer` hook provides a more robust state management solution that avoids the shallow comparison issues.   The state updates are handled by a reducer function, ensuring that even deep changes trigger updates.
2. **Immer library**: Immer simplifies the process of updating nested states immutably. This library works seamlessly with the `useState` hook, creating new state objects automatically, resolving the shallow comparison issue.