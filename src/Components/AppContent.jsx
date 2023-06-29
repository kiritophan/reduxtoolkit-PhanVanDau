import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';

function LayoutVariable() {
    const todoList = useSelector((state) => state.todo.todoList)
    // console.log("🚀 ~ file: AppContent.jsx:6 ~ LayoutVariable ~ todoList:", todoList)

    const filterStatus = useSelector((state) => state.todo.filterStatus)


    const sortedTodoList = Array.isArray(todoList) ? [...todoList] : [];
    sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

    const filterTodoList = sortedTodoList.filter((item) => {
        if (filterStatus === "all") {
            return true;
        }
        return item.status === filterStatus;
    });

    return (
        <div className='d-flex'>
            {
                filterTodoList && filterTodoList.length > 0 ? (
                    filterTodoList.map((todo) => (
                        <div key={todo.id}>
                            <div className='d-flex'>
                                <input type="checkbox" />
                                <div>
                                    <span>{todo.title}</span>
                                    <div>{todo.status}</div>
                                </div>
                            </div>
                            <div>
                                <Button variant="dark">Delete</Button>{' '}
                                <Button variant="danger">Edit</Button>{' '}
                            </div>
                        </div>
                    )

                    )) : <>No Todo Found</>
            }

        </div>
    );
}

export default LayoutVariable;