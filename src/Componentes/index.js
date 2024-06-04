import React, { useState} from 'react';
import PrimerFormulario from './PrimerFormulario';
import Grid from './Grid';

function Usuarios() {
    const [showForm, setShowForm] = useState(false);
    const [idUserEdit, setUserEdit] = useState(null);

    const showTable = () => {
        setShowForm(prevShowForm => !prevShowForm);
        if (!showForm) { // Si estamos cambiando de vista de tabla a formulario
            setUserEdit(null); // Reiniciar el usuario a editar si es necesario
        }
    };
    

    return (
        showForm ? (
            <PrimerFormulario showForm={showTable} id={idUserEdit} />
        ) : (
            <Grid showForm={showTable} idUserEdit={setUserEdit} />
        )
    );
}

export default Usuarios;
