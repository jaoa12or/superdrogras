import React from 'react';
import {Button, Modal } from 'react-bootstrap';

import "react-datepicker/dist/react-datepicker.css";

function RoleDeleteModal(props){
    const {
        id,
        name,
        show,
        onModalClose,
        onDeleteRole,
    } = props;

    return (
        <Modal show={show} onHide={onModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar Rol</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Desea eliminar el rol {name} ?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onModalClose}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={e => onDeleteRole(e, id)}>
                    Eliminar
                </Button>
            </Modal.Footer>
      </Modal>
    );
}

export default RoleDeleteModal;