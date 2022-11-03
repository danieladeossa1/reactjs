//Permite definir los estados (variables) del componente
import { paste } from '@testing-library/user-event/dist/paste';
import { useState } from 'react';
export default function Grade() {
    //Definir los estados de este componente
    const [ident, setIdent] = useState('');
    const [fullname, setFullname] = useState('');
    const [course, setCourse] = useState('');
    const [qualify1, setQualify1] = useState('');
    const [qualify2, setQualify2] = useState('');
    const [qualify3, setQualify3] = useState('');
    const [final, setFinal] = useState('');
    const [observation, setObservation] = useState('');
    //Definir los métodos
    const handleSubmit = (event) => {
        event.preventDefault(); //No hace postback (va al servidor y cuando regrese del servicdor borra la información en el formulario)
        //validar que todos los datos se hayan diligenciado
        if (ident != "" && fullname != "" && course != "" && qualify1 != "" && qualify2 != "" && qualify3 != ""){
            setFinal((parseFloat(qualify1)+parseFloat(qualify2)+parseFloat(qualify3))/3);
        }
        else{
            alert("Debe ingresar todos los datos...")
        }
        
    }

    return (
        <div className="container">
            <h2>Calificaciones</h2>
            <form onSubmit={handleSubmit}>
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="Ident">Identificación</label>
                        <input
                            type="text"
                            placeholder="Identificacion"
                            id="ident"
                            name="ident"
                            className='form-control'
                            onChange={event => setIdent(event.target.value)}
                            value={ident}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="fullname">Nombre completo</label>
                        <input
                            type="text"
                            placeholder='Nombre completo'
                            id='fullname'
                            name='fullname'
                            className='form-control'
                            onChange={e => setFullname(e.target.value)}
                            value={fullname}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="course">Asignatura</label>
                        <input
                            type="text"
                            placeholder="Asignatura"
                            id="course"
                            name="course"
                            className='form-control'
                            onChange={event => setCourse(event.target.value)}
                            value={course}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="qualify1">Nota 1</label>
                        <input
                            type="text"
                            placeholder='Nota 1'
                            id='qualify1'
                            name='qualify1'
                            className='form-control'
                            onChange={e => setQualify1(e.target.value)}
                            value={qualify1}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <label htmlFor="quality2">Nota 2</label>
                        <input
                            type="text"
                            placeholder="Nota 2"
                            id="quality2"
                            name="quality2"
                            className='form-control'
                            onChange={event => setQualify2(event.target.value)}
                            value={qualify2}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="qualify3">Nota 3</label>
                        <input
                            type="text"
                            placeholder='Nota 3'
                            id='qualify3'
                            name='qualify3'
                            className='form-control'
                            onChange={e => setQualify3(e.target.value)}
                            value={qualify3}
                        />
                    </div>
                </div>
                <div className="row mt-3 ">
                    <div className="col">
                        <label htmlFor="final">Definitiva</label>
                        <input
                            type="text"
                            id="final"
                            name="final"
                            className='form-control'
                            value={final}
                        />
                    </div>
                    <div className="col">
                        <label htmlFor="obervation">Observación</label>
                        <input
                            type="text"
                            id='obervation'
                            name='obervation'
                            className='form-control'
                            value={observation}
                        />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <button
                            type='Submit'
                            className='btn btn-success' >
                            Calcular
                        </button>
                    </div>
                </div>

            </form>
        </div>
    );
}