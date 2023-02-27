import {React, useState} from 'react'
import { Button, Form, Modal } from 'react-bootstrap';


export default function AddSongModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button variant="primary" onClick={handleShow}>Add Post</Button>
    
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Enter Song Details:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddSongForm />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                <Button variant="primary" onClick={handleClose}>Post</Button>
            </Modal.Footer>
            </Modal>
        </div>
    );
}

function AddSongForm() {
    return (
        <Form>
            <Form.Group>
                <Form.Control placeholder="Song Name" />
                <Form.Control placeholder="Artist Name"/>
            </Form.Group>
        </Form>
    );
}