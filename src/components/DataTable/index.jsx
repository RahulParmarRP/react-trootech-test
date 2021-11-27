import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import EditIcon from '@mui/icons-material/Edit'
import DoneIcon from '@mui/icons-material/Done'
import DeleteIcon from '@mui/icons-material/Delete'

const DataTable = ({ todos }) => {
    const [editMode, setEditMode] = useState(false)
    const [currentEditTodo, setCurrentEditTodo] = useState(null)
    debugger
    const handleEditClick = (id, index) => {
        setCurrentEditTodo(todos[index])
        setEditMode(true)
    }
    const handleUpdateClick = (id) => {
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
                        <td>{todo.title}</td>
                        <td>
                            {(editMode && currentEditTodo.id === todo.id)
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