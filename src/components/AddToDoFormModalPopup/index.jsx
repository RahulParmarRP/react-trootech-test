import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { GENDER_ARRAY } from '../../constants'


const AddToDoFormModalPopup = ({ show, onClose }) => {
    const [gender, setGender] = useState(GENDER_ARRAY[1])
    const [age, setAge] = useState(18)
    const [active, setActive] = useState(true)
    const [date, setDate] = useState(null)
    const handleChange = (event) => {
        setGender(event.target.value)
    }
    const handleSubmitClick = () => {
        debugger
        console.log(gender)
    }
    const [title, setTitle] = useState('')

    return (
        <Modal
            show={show}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add To Do
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <input type="text" placeholder="Username" pattern="[a-zA-Z]" />
                    <br />
                    <br />
                    <div>
                        {/* <label>
                            <input type="radio" name="gender" value="male"
                                checked={gender === GENDER_ARRAY[0]} />
                            Male
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="gender" value="female"
                                checked={gender === GENDER_ARRAY[1]} />
                            Female
                        </label> */}
                        <div onChange={(e) => setGender(e.target.value)}>
                            {GENDER_ARRAY.map((g) => (
                                <label>
                                    <input type="radio" value={g} name="gender"
                                        checked={g === gender} />
                                    {g.toUpperCase()}
                                </label>
                            ))}
                        </div>
                    </div>
                    <br />
                    <span>{age}</span>
                    <input type="range" min="18" max="55" value={age}
                        onChange={(e) => setAge(e.target.value)} />
                    <br />
                    <input type="date" defaultValue={new Date()} name="date"
                        onChange={(e) => setDate(e.target.value)} />
                    <br />
                    <input type="text" placeholder="Task Name" />
                    <br />
                    <select name="status" onChange={(e) => setActive(e.target.value)}>
                        <option value={true} selected={active === true}>Active</option>
                        <option value={false} selected={active === false}>Inactive</option>
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