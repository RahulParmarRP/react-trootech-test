import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import App from '../App.jsx'

beforeEach(() => {
  render(<App />)
})

test('matches the app snapshot', () => {
  const domTree = renderer.create(<App />).toJSON()
  expect(domTree).toMatchSnapshot()
})

test('app renders successfully', () => {
  const headerText = screen.getByText(/Todo App/i)
  expect(headerText).toBeInTheDocument()
})
