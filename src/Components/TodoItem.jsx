import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../slices/TodoSlices";
import TodoModal from "./TodoModal";
import { format } from "date-fns";

const TodoItem = () => {
    const todoList = useSelector((state) => state.todo)
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            {todoList.map((todo) => (
                <li key={todo.id}>
                    <input type="checkbox" />
                    <div>{todo.title}</div>
                </li>
            ))}
        </div>
    );
}

export default TodoItem;