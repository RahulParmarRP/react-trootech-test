import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import DataTable from '../../components/DataTable'
import { useSelector } from 'react-redux'

const Dashboard = () => {
    const todos = useSelector((state) => state.todosData.todos)
    return (
        <Container className="mt-5">
            <Row className="mb-3">
                <Col>
                    <button>Add To-Do</button>
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