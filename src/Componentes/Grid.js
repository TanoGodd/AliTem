import MUIDataTable from "mui-datatables";
import { Button } from "react-bootstrap";
import React, { useEffect, useRef } from "react";
import "./PrimerFormulario.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "../Redux/actions.js";
import Swal from "sweetalert2";

function Grid({ showForm, idUserEdit }) {
    const dispatch = useDispatch();
    const {users} = useSelector((state) => state.getUsers); // Acceder a los datos del usuario
    const [userSelected, setUserSelected] = React.useState(false);
    const [selectedRowIds, setSelectedRowIds] = React.useState([]);
    const tableRef = useRef(showForm); 

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

  // Definir las columnas de la tabla
    const columns = [
        { name: "idAdjudicado", label: "Adjudicado" },
        { name: "idRemate", label: "Remate" },
        { name: "nombres", label: "Nombres" },
        { name: "apellidos", label: "Apellidos" },
        { name: "rfc", label: "RFC" },
        { name: "curp", label: "CURP" },
        { name: "telefono", label: "Telefono" },
        { name: "calle", label: "Calle" },
        { name: "num", label: "Numero de casa" },
        { name: "colonia", label: "Colonia" },
        { name: "municipio", label: "Municipio" },
        { name: "estado", label: "Estado" },
        { name: "cp", label: "CP" },
        { name: "semafonoEscrituracion", label: "Escrituracion" },
        { name: "consideraciones", label: "Consideraciones" },
        { name: "estadoAdjudicion", label: "Estado de Adjudicion" },
    ];

    const options = {
        filterType: 'checkbox',
        onRowSelectionChange: (currentRowsSelected, allRowsSelected, rowsSelected) => {
            setSelectedRowIds(allRowsSelected.map(row => users[row.index]?.idAdjudicado));
            setUserSelected(allRowsSelected.length > 0);
            if (allRowsSelected.length > 0) {
                idUserEdit(users[allRowsSelected[0].index]?.idAdjudicado);
            }
        },
    };

    const handleNew = () => {
        showForm(); // Suponiendo que `showForm` está definida y abre el formulario para crear un nuevo usuario
        idUserEdit(0); // Establecer el ID de usuario a 0 para indicar un nuevo usuario
    };

    const handleEdit = () => {
        if (userSelected) {
        showForm();
        idUserEdit = selectedRowIds[0]; // Abrir formulario para editar
        } else {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Seleccione un Empleado para editar",
        });
        }
    };

    const handleDelete = () => {
        if (userSelected) {
        const idUserDelete = selectedRowIds[0];
        Swal.fire({
            title: "¿Está seguro?",
            text: "No podrá revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminarlo!",
        }).then((result) => {
            if (result.isConfirmed) {
            dispatch(deleteUser(idUserDelete))
                .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Empleado eliminado",
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    dispatch(getUsers());
                });
                })
                .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Error al eliminar Empleado",
                });
                });
            }
        });
        } else {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Seleccione un Empleado para eliminar",
        });
        }
    };

  // Renderizamos la Tabla
    return (
        <>
        <div className="Botones">
            <Button className="NewUser" variant="primary" onClick={handleNew}>
            Nuevo
            </Button>
            <Button className="NewUser" variant="warning" onClick={handleEdit}>
            Editar
            </Button>
            <Button className="NewUser" variant="danger" onClick={handleDelete}>
            Eliminar
            </Button>
        </div>

            <MUIDataTable
                title={"Lista de Clientes"}
                data={users.response || []}
                columns={columns}
                options={options}
                ref={tableRef}
            />
            
        </>
    );
    }

    export default Grid;
