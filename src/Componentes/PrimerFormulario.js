import { Col, Button, Row, Form, Card, CardHeader, CardBody, CardFooter } from 'react-bootstrap'
import './PrimerFormulario.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { addUser, getUserUnique } from '../Redux/actions';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';

function PrimerFormulario({ showForm, id }) {
    const initialUserState = {
        idAdjudicado: 0,
        idRemate: 0,
        nombres: '',
        apellidos: '',
        rfc: '',
        curp: '',
        telefono: '',
        calle: '',
        num: '',
        colonia: '',
        municipio: '',
        estado: '',
        cp: 0,
        semafonoEscrituracion: '',
        consideraciones: '',
        estadoAdjudicion: '',
    };
    const dispatch = useDispatch();
    const [user, setUser] = useState({ initialUserState });

    useEffect(() => {
        if (id > 0) {
            dispatch(getUserUnique(id))
                .then((response) => {
                    setUser(response.payload.response);
                });
        }
    }, [dispatch, id]);

    const handleCancel = () => {
        setUser(initialUserState);
        showForm();
    };

    const handleGuardar = async () => {

            try {
                const respuesta = await dispatch(user); // Suponiendo que addUser devuelve una promesa
                console.log('Usuario guardado:', respuesta); // Registra la respuesta para depurar
                setUser(initialUserState); // Limpia el formulario después del envío exitoso
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Error al guardar usuario",
                });
            } finally {
                // Opcionalmente, vuelve a habilitar el botón aquí si se deshabilitó durante la solicitud
            }
    };


    return (
        <Row sm={7}>
            <Card className='estilo'>
                <CardHeader className='Titulo'> NUEVO USUARIO </CardHeader>

                <CardBody className='cuerpo'>
                    <Row>
                        <Col>
                            <Form.Label htmlFor='idAdjudicado'>ID de Adjudicado: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text" 
                            id="idAdjudicado" 
                            name='idAdjudicado' 
                            className='form-controlnum' 
                            required value={user.idAdjudicado}
                                onChange={(e) => setUser({ ...user, idAdjudicado: e.target.value })} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='idRemate'>ID de Remate: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text" 
                            id="idRemate" 
                            name='idRemate' 
                            className='form-controlnum'
                            required value={user.idRemate}
                                onChange={(e) => setUser({ ...user, idRemate: e.target.value })} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='nombres'>Nombre: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text" 
                            id="nombres" 
                            name='nombres' 
                            className='form-control' 
                            required value={user.nombres}
                                onChange={(e) => setUser({ ...user, nombres: e.target.value })} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='apellidos'>Apellidos: </Form.Label>
                        </Col>
                        <Col>
                             <input type="text"
                                name="apellidos"
                                id='apellidos'
                                className='form-control'
                                required value={user.apellidos}
                                onChange={(e) => setUser({ ...user, apellidos: e.target.value })}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='rfc'>RFC: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text"
                                name='rfc'
                                id='rfc'
                                className='form-control'
                                selected={user.rfc}
                                onChange={(e) => setUser({ ...user, rfc: e.target.value })}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='curp'>CURP: </Form.Label>
                        </Col>
                        <Col>
                            <input type='text'
                                name="curp"
                                id='curp'
                                className='form-control'
                                value={user.curp}
                                onChange={(e) => setUser({ ...user, curp: e.target.value })}
                                required
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='telefono'>Telefono: </Form.Label>
                        </Col>
                        <Col>
                            <input
                                type='text'
                                name="telefono"
                                id='telefono'
                                className='form-controlnum'
                                value={user.telefono}
                                onChange={(e) => setUser({ ...user, telefono: e.target.value })}
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label htmlFor='calle'>Calle: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text"
                                name="calle"
                                id='calle'
                                className='form-control'
                                value={user.calle}
                                onChange={(e) => setUser({ ...user, calle: e.target.value })} />
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Label htmlFor='num'>Numero de casa: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text"
                                name="num"
                                id='num'
                                className='form-controlnum'
                                value={user.num}
                                onChange={(e) => setUser({ ...user, num: e.target.value })} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label htmlFor='colonia'>Colonia: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text"
                                name="colonia"
                                id='colonia'
                                className='form-control'
                                value={user.colonia}
                                onChange={(e) => setUser({ ...user, colonia: e.target.value })} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label htmlFor='municipio'>Municipio: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text"
                                name="municipio"
                                id='municipio'
                                className='form-control'
                                value={user.municipio}
                                onChange={(e) => setUser({ ...user, municipio: e.target.value })} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label htmlFor='estado'>Estado: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text"
                                name="estado"
                                id='estado'
                                className='form-control'
                                value={user.estado}
                                onChange={(e) => setUser({ ...user, estado: e.target.value })} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label htmlFor='cp'>Codigo Postal: </Form.Label>
                        </Col>
                        <Col>
                            <input type="number" min="0"
                                name="cp"
                                id='cp'
                                className='form-controlnum'
                                value={user.cp}
                                onChange={(e) => setUser({ ...user, cp: e.target.value })} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label htmlFor='semafonoEscrituracion'>Escrituracion: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text"
                                name="semafonoEscrituracion"
                                id='semafonoEscrituracion'
                                className='form-control'
                                value={user.semafonoEscrituracion}
                                onChange={(e) => setUser({ ...user, semafonoEscrituracion: e.target.value })} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label htmlFor='consideraciones'>Consideraciones: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text"
                                name="consideraciones"
                                id='consideraciones'
                                className='form-control'
                                value={user.consideraciones}
                                onChange={(e) => setUser({ ...user, consideraciones: e.target.value })} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label htmlFor='estadoAdjudicacion'>Estado de Adjudicion: </Form.Label>
                        </Col>
                        <Col>
                            <input type="text"
                                name="estadoAdjudicacion"
                                id='estadoAdjudicacion'
                                className='form-control'
                                value={user.estadoAdjudicacion}
                                onChange={(e) => setUser({ ...user, estadoAdjudicacion: e.target.value })} />
                        </Col>
                    </Row>
                </CardBody>

                <CardFooter>
                    <Col>
                        <Button variant='primary' onClick={handleGuardar}> Guardar</Button>
                        <Button variant="danger" onClick={handleCancel}> Cancelar</Button>
                    </Col>
                </CardFooter>
            </Card>
        </Row>
    );
}

export default PrimerFormulario;