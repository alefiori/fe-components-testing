import { render } from '@testing-library/react'
import { Header } from './Header'

describe('Header component', () => {
  it('should contain the title', () => {
    const app = render(<Header />)
    expect(app.getByRole('heading')).toHaveTextContent('To-Do List App')
  })
})
