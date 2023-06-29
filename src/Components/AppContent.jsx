import React from 'react';
import TodoItem from './TodoItem';

const TodoItemList = ({ todos }) => {
    if (!todos) {
        return null; // hoặc có thể hiển thị thông báo lỗi
    }

    return (
        <div>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoItemList;
