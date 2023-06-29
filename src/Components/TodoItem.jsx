import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../slices/TodoSlices";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const TodoItem = () => {
    const todoList = useSelector((state) => state.todo)
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(null)
    const [status, setStatus] = useState("incomplete")
    const [showModal, setShowModal] = useState(false)

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
        toast.success('Todo Delete Successfully');
    }
    
    const handleUpdate = (id ,title, status) => {
        setEdit({id, title, status});
        setStatus(status);
        setShowModal(true);
    }

    const handleCancle = () => {
        setEdit(null);
        setShowModal(false);
    }
    
    const handleSave = () => {
        if(edit) {
            dispatch(
                updateTodo({
                    id: edit.id,
                    title: edit.title,
                    status: status
                })
            );
            setEdit(null);
            setShowModal(false);
        }
    }
    

    return (
        <div>
            <div>
                {todoList.map((todo) => (
                    <li key={todo.id} style={{ display: 'flex', padding: '20px', border: '1px solid black' }}>
                        <div style={{ display: 'flex' }}>
                            <input style={{ marginRight: '20px' }} type="checkbox" />
                            <div >{todo.title}</div>
                        </div>
                        <div style={{ marginLeft: '200px' }}>
                            <span class="material-symbols-outlined" onClick={() => handleDelete(todo.id)} style={{ cursor: 'pointer' }}>
                                delete
                            </span>
                            <span class="material-symbols-outlined" onClick={() => handleUpdate(todo.id, todo.title, todo.status)} style={{ cursor: 'pointer' }}>
                                edit
                            </span>
                        </div>
                    </li>
                ))}
            </div>
            {
                showModal && (
                    <Modal show={showModal} onHide={handleCancle}>
                        <Modal.Header closeButton>
                            <Modal.Title> Update Task </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label> Update Task </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="add task"
                                        autoFocus
                                        value={edit ? edit.title : 0}
                                        onChange={(e) => setEdit({...edit, title: e.target.value})}
                                    />
                                </Form.Group>
                                <Form.Label> Status </Form.Label>
                                <Form.Select aria-label="Default select example"
                                    name="taskStatus"
                                    id="taskStatus"
                                    className='status'
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    >
                                    <option value="incomplete">Incomplete</option>
                                    <option value="Complete ">Complete</option>
                                </Form.Select>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleSave}>
                                Update Task
                            </Button>
                            <Button variant="dark" onClick={handleCancle}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )
            }
        </div>
       
    );
}

export default TodoItem;