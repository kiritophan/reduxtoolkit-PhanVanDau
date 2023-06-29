import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function TodoModal({show, handleClose, handleSubmit, setTitle }) {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Add Task </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label> Add Task </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="add task"
                                autoFocus
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Label> Status </Form.Label>
                        <Form.Select aria-label="Default select example"
                            name="taskStatus"
                            id="taskStatus"
                            className='status'>
                            <option value="incomplete">Incomplete</option>
                            <option value="Complete ">Complete</option>
                        </Form.Select>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>
                        Add Task
                    </Button>
                    <Button variant="dark" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default TodoModal;