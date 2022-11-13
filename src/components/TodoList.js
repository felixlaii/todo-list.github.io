import Reach from 'react';

const TodoList = ({ todos, handleDelete, handleEdit }) => {
    return (
        <ul className="allTodos">
            {todos.map((t) => (
                <li className='singleTodo'>
                    <span className='todoText' key={t.id}>
                        {t.todo}
                    </span>
                </li>
            ))}
        </ul>
    )
}