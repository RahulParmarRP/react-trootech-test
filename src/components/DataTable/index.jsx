import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import EditIcon from '@mui/icons-material/Edit'
import DoneIcon from '@mui/icons-material/Done'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'
import ConfirmDialog from '../ConfirmDialog'
import { CONFIRM_DELETE_MESSAGE, GENDER_ARRAY } from '../../constants'

const DataTable = ({ todos }) => {
    const dispatch = useDispatch()
    const [showDeleteConfirmDialog, setShowDeleteConfirmDialog] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [currentEditingTodo, setCurrentEditingTodo] = useState(null)
    const [deleteTodoId, setDeleteTodoId] = useState(null)
    const [title, setTitle] = useState('')
    const [username, setUsername] = useState('')
    const handleEditClick = (todoId) => {
        const selectedTodo = todos.find(todo => todo.id === todoId)
        setCurrentEditingTodo(selectedTodo)
        setTitle(selectedTodo.title)
        setUsername(selectedTodo.username)
        setEditMode(true)
    }
    const handleUpdateClick = (id) => {
        const updatedTodo = {
            ...currentEditingTodo,
            title,
            username,
        }
        dispatch({ type: 'UPDATE_TODO', payload: updatedTodo })
        setEditMode(false)
    }
    const handleDeleteClick = (todoId) => {
        setDeleteTodoId(todoId)
        setShowDeleteConfirmDialog(true)
    }

    return (
        <>
            <Table striped bordered responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Gender</th>
                        <th>Hobby</th>
                        <th>Age</th>
                        <th>Date</th>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={todo.guid}>
                            <td>{index}</td>
                            <td> {(editMode && currentEditingTodo.id === todo.id)
                                ? (<input value={username} onChange={(e) => setUsername(e.target.value)}></input>)
                                : (`${todo.username}`)}
                            </td>
                            <td>
                                <div onChange={() => { }}>
                                    {GENDER_ARRAY.map((gender) => (
                                        <>
                                            <input type="radio" value={gender} name="gender" />
                                            {gender.toUpperCase()}
                                        </>
                                    ))}
                                </div>
                            </td>
                            <td>
                                <input type="checkbox" name="hobby" value="test" />
                                <label for="coding">Coding</label>
                                <input type="checkbox" name="hobby" value="music" />
                                <label for="coding">Music</label>
                                <input type="checkbox" name="hobby" value="sports" />
                                <label for="coding">Sports</label>
                            </td>

                            <td>
                                <span>{todo.age}</span>
                                <input type="range" min="18" max="55" value={todo.age} />
                            </td>
                            <td>
                                <input type="date" defaultValue={todo.date} name="birthday" />
                            </td>
                            <td>
                                {(editMode && currentEditingTodo.id === todo.id)
                                    ? (<input value={title} onChange={(e) => setTitle(e.target.value)}></input>)
                                    : (`${todo.title}`)}
                            </td>
                            <td>
                                <select name="status">
                                    <option value={true} selected={todo.status === true}>Active</option>
                                    <option value={false} selected={todo.status === false}>Inactive</option>
                                </select>
                            </td>
                            <td>
                                {(editMode && currentEditingTodo.id === todo.id)
                                    ? (<DoneIcon onClick={() => handleUpdateClick(todo.id)} />)
                                    : (<EditIcon onClick={() => handleEditClick(todo.id, index)} />)}
                                <DeleteIcon onClick={() => handleDeleteClick(todo.id)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <ConfirmDialog
                display={showDeleteConfirmDialog}
                message={CONFIRM_DELETE_MESSAGE}
                onConfirm={() => {
                    dispatch({ type: 'DELETE_TODO', payload: deleteTodoId })
                    setShowDeleteConfirmDialog(false)
                }}
                onClose={() => setShowDeleteConfirmDialog(false)}
            />
        </>
    )
}

export default DataTable