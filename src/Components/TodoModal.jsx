import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AppHeader from './AppHeader';
import "../styles/AppHeader.scss"
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/TodoSlices';
import { updateTodo } from '../slices/TodoSlices';

function TodoListModal({ type, modalOpen, setModalOpen, todo }) {
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("incomplete");
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        if (type === "update" && todo) {
            setTitle(todo.title);
            setStatus(todo.status);
        } else {
            setTitle("");
            setStatus("incomplete");
        }
    }, [type, modalOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === "") {
            // toast.error("Please enter a title.");
            return;
        }
        if (title && status) {
            if (type === "add") {
                dispatch(
                    addTodo({
                        id: Date.now(),
                        title,
                        status,
                        time: new Date().toLocaleDateString(),
                    })
                );
                // toast.success("Task Added Successfully");
                setModalOpen(false);
            }
            if (type === "update") {
                if (todo.title !== title || todo.status !== status) {
                    dispatch(
                        updateTodo({
                            ...todo,
                            title,
                            status,
                        })
                    );
                } else {
                    // toast.error("No Changes Made");
                    return;
                }
            }
            setModalOpen(false);
        }
    };
    

    return (
        <div className='content-container'>
            <div>
                <Button variant="primary" onClick={() => setModalOpen(false)}>
                    ADD TODO
                </Button>
                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <Modal show={show} onHide={modalOpen}>
                        <Modal.Header closeButton>
                            <Modal.Title> Add Task </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label> Title </Form.Label>
                                    <Form.Control
                                        value={title}
                                        type="text"
                                        autoFocus
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Label> Status </Form.Label>
                                <Form.Select aria-label="Default select example" value={status} onChange={(e) => setStatus(e.target.value)}>
                                    <option value="1"> Incomplete </option>
                                    <option value="2"> Complete </option>
                                </Form.Select>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Button variant="primary" onClick={setModalOpen}>
                                Add Task
                            </Button>
                            <Button variant="secondary" onClick={() => setModalOpen(false)} onKeyDown={() => setModalOpen(false)}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </form>

            </div>
            <div>
                <AppHeader />
            </div>
        </div>
    );
}

export default TodoListModal;
