import React, { useState } from 'react';
import FormularioPregunta from './componentes/FormularioPregunta';
import Pregunta from './componentes/Pregunta';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [preguntas, setPreguntas] = useState([]);
  let idActualPregunta = 1;

  const addQuestion = (nueva) => {
        nueva.id = idActualPregunta;
        idActualPregunta++;
        setPreguntas([...preguntas, nueva]);
  };

  const deleteQuestion = (id) => {
    setPreguntas((prevPreguntas) => prevPreguntas.filter((pregunta) => pregunta.id !== id));
};

  return (
    <div>
      <FormularioPregunta aniadePregunta={addQuestion} />
      <div>
        {preguntas.map((pregunta) => (
          <Pregunta key={pregunta.id} pregunta={pregunta} deleteQuestion={deleteQuestion} />
        ))}

      </div>
    </div>
  );
}

export default App;