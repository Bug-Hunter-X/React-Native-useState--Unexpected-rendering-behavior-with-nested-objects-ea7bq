```javascript
// bugSolution.js using Immer
import { useReducer } from 'react';
import produce from 'immer';

const initialState = {
  user: {
    profile: {
      name: 'John Doe',
      age: 30
    }
  }
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_NAME':
      return produce(state, draft => {
        draft.user.profile.name = action.payload;
      });
    default:
      return state;
  }
}

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateName = () => {
    dispatch({ type: 'UPDATE_NAME', payload: 'Jane Doe' });
  };

  return (
    <View>
      <Text>{state.user.profile.name}</Text>
      <Button title="Update Name" onPress={updateName} />
    </View>
  );
}
```
```javascript
// bugSolution.js using useReducer
import { useReducer } from 'react';

const initialState = {
  count: 0,
  data: {
    nested: {
      value: 0
    }
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'UPDATE_NESTED':
      return {
        ...state,
        data: {
          ...state.data,
          nested: {
            ...state.data.nested,
            value: action.payload
          }
        }
      };
    default:
      return state;
  }
};

const MyComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View>
      <Text>{state.count}</Text>
      <Text>{state.data.nested.value}</Text>
      <Button title="Increment" onPress={() => dispatch({ type: 'INCREMENT' })} />
      <Button title="Update Nested" onPress={() => dispatch({ type: 'UPDATE_NESTED', payload: 10 })} />
    </View>
  );
};

```