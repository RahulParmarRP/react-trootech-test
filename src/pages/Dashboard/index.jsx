import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import DataTable from '../../components/DataTable'
import { useSelector } from 'react-redux'
import AddToDoFormModalPopup from '../../components/AddToDoFormModalPopup'

const Dashboard = () => {
  const todos = useSelector((state) => state.todosData.todos)
  const [showAddToDoFormDialog, setAddToDoFormDialog] = useState(false)
  const handleAddToDoClick = () => {
    setAddToDoFormDialog(true)
  }
  return (
    <Container className="mt-5">
      <Row className="mb-3">
        <Col>
          <Button onClick={() => handleAddToDoClick()}>Add To-Do</Button>
          <AddToDoFormModalPopup
            show={showAddToDoFormDialog}
            onClose={() => setAddToDoFormDialog(false)}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <DataTable todos={todos} />
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
