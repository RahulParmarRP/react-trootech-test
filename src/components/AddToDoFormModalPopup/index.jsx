import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { GENDER_LIST } from '../../constants'
import { useDispatch } from 'react-redux'

const AddToDoFormModalPopup = ({ show, onClose }) => {
  const [gender, setGender] = useState(GENDER_LIST[1])
  const [age, setAge] = useState(18)
  const [active, setActive] = useState(true)
  const [date, setDate] = useState(new Date().toLocaleDateString('fr-CA'))
  const [title, setTitle] = useState('')
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()

  const isFormValid = ({ username }) => {
    if (username.length > 15) {
      alert('Username must be less than 15 characters')
      return false
    }
    return true
  }
  const handleSubmitClick = () => {
    const createToDo = { gender, active, title, age, username, date }
    if (isFormValid(createToDo)) {
      dispatch({ type: 'ADD_TODO', payload: createToDo })
      onClose()
    }
  }
  const handleUserNameChange = (e) => {
    const regex = /^[A-Za-z ]+$/
    if (e.target.value === '' || regex.test(e.target.value)) {
      setUsername(e.target.value)
    }
  }
  return (
    <Modal
      show={show}
      onHide={onClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="add-to-do-form-modal-popup"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add To Do</Modal.Title>
      </Modal.Header>
      <Modal.Body className="centered-content">
        <form>
          <input
            className="form-field"
            type="text"
            onChange={handleUserNameChange}
            placeholder="Username"
            value={username}
            maxLength="15"
          />
          <div
            className="form-field"
            onChange={(e) => setGender(e.target.value)}
          >
            {GENDER_LIST.map((g) => (
              <label className="gender-label" key={g}>
                <input
                  type="radio"
                  value={g}
                  name="gender"
                  defaultChecked={g === gender}
                />
                {g.toUpperCase()}
              </label>
            ))}
          </div>
          <div className="custom-range form-field">
            <span>{age}</span>
            <input
              type="range"
              min="18"
              max="55"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <input
            className="form-field"
            type="date"
            defaultValue={date}
            name="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            className="form-field"
            type="text"
            placeholder="Task Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <select
            className="form-field"
            name="status"
            defaultValue={false}
            onChange={(e) => setActive(e.target.value)}
          >
            <option value={true}>Active</option>
            <option value={false}>Inactive</option>
          </select>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => handleSubmitClick()}>Submit</Button>
        <Button onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddToDoFormModalPopup
