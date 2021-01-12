import React, {useState} from 'react';

const Contacto = ({contacto, editarContacto, borrarContacto}) => {

    const [editandoTarea, cambiarEditandoTarea] = useState(false);
    const [nuevoContacto, cambiandoNuevoContacto] = useState(contacto.nombre);
    const [nuevoTelefono, cambiandoNuevoTelefono] = useState(contacto.telefono);

    const handleSubmit = (e) => {
        e.preventDefault();
        editarContacto(contacto.id, nuevoContacto, nuevoTelefono);
        cambiarEditandoTarea(false);
    }
    
    return (
        <li className="listaContacto__item">
            <ul>
                {editandoTarea ? 
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" name="" value={nuevoContacto} onChange={(e) => cambiandoNuevoContacto(e.target.value)}/>
                        <input type="text" name="" value={nuevoTelefono} onChange={(e) => cambiandoNuevoTelefono(e.target.value)}/>
                        <button type="submit">Actualizar</button>
                    </form>
                :
                 <>
                    <li>{contacto.nombre}</li>
                    <li>{contacto.telefono}</li>
                 </>

                }
            </ul>
            <div onClick={() => cambiarEditandoTarea(true)}>Editar</div>
            <div onClick={() => borrarContacto(contacto.id)}>Eliminar</div>
        </li>
    )
}

export default Contacto;
