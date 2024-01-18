import React, { createContext, useReducer, useContext } from 'react';
import FormularioPregunta from './componentes/FormularioPregunta';
import Pregunta from './componentes/Pregunta';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CharacterContext = createContext();

const initialState = {
  preguntas: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      action.payload.id = crypto.randomUUID();
      return { ...state, preguntas: [...state.preguntas, action.payload] };
    case 'DELETE_QUESTION':
      return {
        ...state,
        preguntas: state.preguntas.filter((pregunta) => pregunta.id !== action.payload),
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addQuestion = (nueva) => {
    dispatch({ type: 'ADD_QUESTION', payload: nueva });
  };

  const deleteQuestion = (id) => {
    dispatch({ type: 'DELETE_QUESTION', payload: id });
  };

  return (
    <CharacterContext.Provider value={{ state, addQuestion, deleteQuestion }}>
      <div>
        <FormularioPregunta />
        <div>
          {state.preguntas.map((pregunta, index) => (
            <Pregunta key={pregunta.id} pregunta={pregunta} index={index} />
          ))}
        </div>
      </div>
    </CharacterContext.Provider>
  );
}

export default App;
