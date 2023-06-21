import { render } from '@testing-library/react'
import { App } from '.'

describe('App component', () => {
  it('should render', () => {
    const app = render(<App />)
    expect(app).toBeDefined()
  })
})
