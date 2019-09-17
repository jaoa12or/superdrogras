import React from 'react';
import {Button, Modal } from 'react-bootstrap';

import "react-datepicker/dist/react-datepicker.css";

function FranchiseCreatedModal(props){
    const {
        show,
        subdomain,
        created,
        onRedirect,
    } = props;

    return (
        <Modal show={show} onHide={onRedirect()}>
            <Modal.Header closeButton>
                { created ?
                <Modal.Title>Franquicia creada correctamente</Modal.Title> :
                <Modal.Title>No se creó la franquicia</Modal.Title>
                }
            </Modal.Header>
            <Modal.Body>
                { created ?
                    <div>Se creado la franquicia con el subdominio {{subdomain}}</div>:
                    <div>Error al crear la franquicia o el usuario, por favor intentelo de nuevo</div>
                }
            </Modal.Body>
            <Modal.Footer>
                { created ?
                    <Button variant="primary" onClick={onRedirect()}>
                        Ir a mi sitio
                    </Button>:
                    <Button variant="primary" onClick={onRedirect()}>
                        Ir al inicio
                    </Button>
                }
            </Modal.Footer>
      </Modal>
    );
}

export default FranchiseCreatedModal;