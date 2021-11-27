import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import EditIcon from '@mui/icons-material/Edit'
import DoneIcon from '@mui/icons-material/Done'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'
const DataTable = ({ todos }) => {
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)
    const [currentEditingTodo, setCurrentEditingTodo] = useState(null)
    const [title, setTitle] = useState('')
    debugger
    const handleEditClick = (id, index) => {
        const selectedTodo = todos[index]
        setCurrentEditingTodo(selectedTodo)
        setTitle(selectedTodo.title)
        setEditMode(true)
    }
    const handleUpdateClick = (id) => {
        const updatedTodo = {
            ...currentEditingTodo,
            title,
        }
        dispatch({ type: 'UPDATE_TODO', payload: updatedTodo })
        setEditMode(false)
    }

    return (
        <Table striped bordered>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Task</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo, index) => (
                    <tr>
                        <td>{todo.id}</td>
                        <td>
                            {(editMode && currentEditingTodo.id === todo.id)
                                ? (<input value={title} onChange={(e) => setTitle(e.target.value)}></input>)
                                : (`${todo.title}`)}
                        </td>
                        <td>
                            {(editMode && currentEditingTodo.id === todo.id)
                                ? (<DoneIcon onClick={() => handleUpdateClick(todo.id)} />)
                                : (<EditIcon onClick={() => handleEditClick(todo.id, index)} />)}
                            <DeleteIcon />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default DataTable