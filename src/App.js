import React, { createContext, useState } from 'react';
import FormularioPregunta from './componentes/FormularioPregunta';
import Pregunta from './componentes/Pregunta';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CharacterContext = createContext();

function App() {
  const [preguntas, setPreguntas] = useState([]);

  const addQuestion = (nueva) => {
    nueva.id = crypto.randomUUID();
    setPreguntas([...preguntas, nueva]);
  };

  const deleteQuestion = (id) => {
    setPreguntas((prevPreguntas) => prevPreguntas.filter((pregunta) => pregunta.id !== id));
  };

  return (
    <CharacterContext.Provider value={{ preguntas, addQuestion, deleteQuestion }}>
      <div>
        <FormularioPregunta />
        <div>
          {preguntas.map((pregunta, index) => (
            <Pregunta key={pregunta.id} pregunta={pregunta} index={index} />
          ))}
        </div>
      </div>
    </CharacterContext.Provider>
  );
}

export default App;