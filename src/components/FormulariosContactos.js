import React, {useState} from 'react';

const FormulariosContactos = ({contactos, cambiarContacto}) => {
    const [inputNombre, cambiarInputNombre] = useState('');
    const [inputTelefono, cambiarInputTelefono] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        cambiarContacto([
            ...contactos,
            {
                id:3,
                nombre: inputNombre,
                telefono: inputTelefono
            }
        ])

        cambiarInputNombre('');
        cambiarInputTelefono('');
    }

    return (
        <form action="" onSubmit={handleSubmit} className="formularioContactos">
            <input type="text" placeholder="Nombre" value={inputNombre} onChange={(e) => cambiarInputNombre(e.target.value)} className="formularioContactos__input"/>
            <input type="text" placeholder="Telefono" value={inputTelefono} onChange={(e) => cambiarInputTelefono(e.target.value)} className="formularioContactos__input"/>
                <button type="submit">Añadir</button>
        </form>
    )

}

export default FormulariosContactos;
