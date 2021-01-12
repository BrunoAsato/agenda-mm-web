import React from 'react';
import Contacto from './Contacto';

const ListaContactos = ({contactos, cambiarContacto}) => {
    
    const editarContacto = (id, nuevoContacto, nuevoTelefono) => {
        cambiarContacto(contactos.map((contacto) => {
            if(contacto.id === id){
                return {...contacto, nombre:nuevoContacto, telefono:nuevoTelefono}
            }

            return contacto;
        }))
    }

    const borrarContacto = (id) => {
        cambiarContacto(contactos.filter((contacto) => {
                return contacto.id !== id;
        }))
    }

    return (
        <ul className="ListaContacto">
            {contactos.length > 0 ? contactos.map((contacto) => {
                return (
                    <Contacto key={contacto.id} contacto={contacto} editarContacto={editarContacto} borrarContacto={borrarContacto}/>
                )

            })
            :<div>No hay contactos agregados, agrega a tu crush ( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)</div>
            }
        </ul>
    )
}

export default ListaContactos;
