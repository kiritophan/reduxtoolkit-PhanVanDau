import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import TodoModal from './TodoModal';
import { useDispatch } from 'react-redux';
import { addTodo, updateFilterStatus } from '../slices/TodoSlices';

export default function CheckButton() {
    const handleShow = () => setShow(true)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const [title, setTitle] = useState("");
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title){
            dispatch(addTodo({
                id: Date.now(),
                title: title,
            }));
            setTitle("");
            setShow(false);
        }
    }
    const handleFilter = (filter) => {
        dispatch(updateFilterStatus(filter));
    }
  return (
    <div>
          <Button variant="primary" onClick={handleShow}>
              Add Task
          </Button>
          <TodoModal show={show} handleClose={handleClose} handleSubmit={handleSubmit} handleFilter={handleFilter} setTitle = {setTitle} />
    </div>
  )
}
