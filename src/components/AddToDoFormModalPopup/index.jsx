import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { GENDER_ARRAY } from '../../constants'
import { useDispatch } from 'react-redux'

const AddToDoFormModalPopup = ({ show, onClose }) => {
  const [gender, setGender] = useState(GENDER_ARRAY[1])
  const [age, setAge] = useState(18)
  const [active, setActive] = useState(true)
  const [date, setDate] = useState(null)
  const [title, setTitle] = useState('')
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()

  const checkValidations = () => {
    if (title.length > 0 && username.length > 0 && date !== null) {
      return true
    }
    return false
  }
  const handleSubmitClick = () => {
    const createToDo = { gender, active, title, age, username, date }
    dispatch({ type: 'ADD_TODO', payload: createToDo })
    onClose()
  }
  return (
    <Modal
      show={show}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add To Do</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            value={username}
          />
          <br />
          <br />
          <div>
            <div onChange={(e) => setGender(e.target.value)}>
              {GENDER_ARRAY.map((g) => (
                <label>
                  <input
                    type="radio"
                    value={g}
                    name="gender"
                    checked={g === gender}
                  />
                  {g.toUpperCase()}
                </label>
              ))}
            </div>
          </div>
          <br />
          <span>{age}</span>
          <input
            type="range"
            min="18"
            max="55"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <input
            type="date"
            defaultValue={new Date()}
            name="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Task Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <select name="status" onChange={(e) => setActive(e.target.value)}>
            <option value={true} selected={active === true}>
              Active
            </option>
            <option value={false} selected={active === false}>
              Inactive
            </option>
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
