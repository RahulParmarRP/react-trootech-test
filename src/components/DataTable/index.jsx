import React, { useRef, useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import EditIcon from '@mui/icons-material/Edit'
import DoneIcon from '@mui/icons-material/Done'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'
import ConfirmDialog from '../ConfirmDialog'
import {
  CONFIRM_DELETE_MESSAGE,
  GENDER_LIST,
  HOBBY_LIST,
} from '../../constants'
import AgeRange from '../AgeRange'

const DataTable = ({ todos }) => {
  const dispatch = useDispatch()
  const [showDeleteConfirmDialog, setShowDeleteConfirmDialog] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [currentEditingTodo, setCurrentEditingTodo] = useState(null)
  const [deleteTodoId, setDeleteTodoId] = useState(null)
  const isFirstRender = useRef(true)

  const [gender, setGender] = useState('')
  const [title, setTitle] = useState('')
  const [username, setUsername] = useState('')
  const [age, setAge] = useState('')
  const ageRef = useRef(null)

  useEffect(() => {
    if (!isFirstRender.current && !isEditing) {
      alert('Todo updated successfully')
    }
  }, [isEditing])

  useEffect(() => {
    isFirstRender.current = false
  }, [])

  const handleEditClick = (todoId) => {
    const selectedTodo = todos.find((todo) => todo.id === todoId)
    setCurrentEditingTodo(selectedTodo)
    setTitle(selectedTodo.title)
    setUsername(selectedTodo.username)
    setIsEditing(true)
  }
  const handleUpdateClick = (id) => {
    const updatedTodo = {
      ...currentEditingTodo,
      title,
      username,
      age,
      gender
    }
    dispatch({ type: 'UPDATE_TODO', payload: updatedTodo })
    setIsEditing(false)
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
          {todos.map((todo, index) => {
            const isEditMode = isEditing && todo.id === currentEditingTodo.id
            return (
              <tr key={todo.guid}>
                <td>
                  {isEditMode ? (
                    <input
                      defaultValue={todo.username}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      disabled={!isEditMode}
                    />
                  ) : (
                    `${todo.username}`
                  )}
                </td>
                <td>
                  <fieldset className="form-field">
                    {GENDER_LIST.map((g) => {
                      return (
                        <label className="gender-label" key={g}>
                          <input
                            type="radio"
                            value={gender}
                            defaultChecked={todo.gender === g}
                            disabled={!isEditMode}
                            onChange={(e) => setGender(e.currentTarget.value)}
                          />
                          {g.toUpperCase()}
                        </label>
                      )
                    })}
                  </fieldset>
                </td>
                <td>
                  <div className="checkbox-wrapper">
                    {HOBBY_LIST.map((h) => (
                      <label htmlFor="hobby" key={h}>
                        <input
                          type="checkbox"
                          name="hobby"
                          value={h}
                          defaultChecked={todo?.hobby.includes(h)}
                          onChange={() => { }}
                          disabled={!isEditMode}
                        />
                        {h.toUpperCase()}
                      </label>
                    ))}
                  </div>
                </td>
                <td>
                  <AgeRange
                    className="custom-range form-field"
                    defaultValue={todo.age}
                    min={18}
                    max={55}
                    disabled={!isEditMode}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    disabled={!isEditMode}
                    type="date"
                    defaultValue={todo.date}
                    name="date"
                  />
                </td>
                <td>
                  {isEditMode ? (
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    ></input>
                  ) : (
                    `${todo.title}`
                  )}
                </td>
                <td>
                  <select
                    name="status"
                    disabled={!isEditMode}
                    defaultValue={todo.status}
                  >
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                  </select>
                </td>
                <td>
                  {isEditMode ? (
                    <DoneIcon onClick={() => handleUpdateClick(todo.id)} />
                  ) : (
                    <EditIcon onClick={() => handleEditClick(todo.id, index)} />
                  )}
                  <DeleteIcon onClick={() => handleDeleteClick(todo.id)} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <ConfirmDialog
        show={showDeleteConfirmDialog}
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
