import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../slices/TodoSlices";
import TodoModal from "./TodoModal";
import { format } from "date-fns";
import { IconName } from "react-icons/bs";

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
        
    }

    return (
        <div>
            {todoList.map((todo) => (
                <li key={todo.id} style={{display: 'flex'}}>
                    <div>
                        <input type="checkbox" />
                        <div>{todo.title}</div>
                    </div>
                    <div>
                        <span class="material-symbols-outlined" onClick={() => handleDelete(todo.id)} style={{cursor: 'pointer'}}>
                            delete
                        </span>
                        <span class="material-symbols-outlined" onClick={() => handleUpdate(todo.id, todo.title, todo.status)} style={{cursor: 'pointer'}}>
                            edit
                        </span>
                    </div>
                </li>
            ))}
        </div>
    );
}

export default TodoItem;