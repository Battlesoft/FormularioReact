import React from 'react';
import Swal from 'sweetalert2';

const Pregunta = ({ pregunta, deleteQuestion }) => {
    const { id, enunciado, respuesta1, respuesta2, respuesta3, respuesta4 } = pregunta;

    const handleDeleteQuestion = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Estás a punto de borrar esta pregunta.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, borrar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Llama a la función para borrar la pregunta con su ID
                deleteQuestion(id);
                Swal.fire('¡Borrado!', 'La pregunta ha sido borrada.', 'success');
            }
        });
    };
    
    return (
        <div className="card m-3" style={{ width: "18rem" }}>
            <button type="button" className="btn-close" aria-label="Close" onClick={handleDeleteQuestion}></button>
            <div className="card-body">
                <h5 className="card-title">Pregunta nº{id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{enunciado}</h6>
                <div className="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                    <input type="radio" className="btn-check" name={`btn-respuesta-${id}`} id={`${id}-vbtn-radio1`} autoComplete="off" />
                    <label className="btn btn-outline-danger" htmlFor={`${id}-vbtn-radio1`}>{respuesta1}</label>

                    <input type="radio" className="btn-check" name={`btn-respuesta-${id}`} id={`${id}-vbtn-radio2`} autoComplete="off" />
                    <label className="btn btn-outline-danger" htmlFor={`${id}-vbtn-radio2`}>{respuesta2}</label>

                    <input type="radio" className="btn-check" name={`btn-respuesta-${id}`} id={`${id}-vbtn-radio3`} autoComplete="off" />
                    <label className="btn btn-outline-danger" htmlFor={`${id}-vbtn-radio3`}>{respuesta3}</label>

                    <input type="radio" className="btn-check" name={`btn-respuesta-${id}`} id={`${id}-vbtn-radio4`} autoComplete="off" />
                    <label className="btn btn-outline-danger" htmlFor={`${id}-vbtn-radio4`}>{respuesta4}</label>
                </div>
            </div>
        </div>
    );
}

export default Pregunta;
