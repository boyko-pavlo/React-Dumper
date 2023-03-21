import * as React from 'react'
import { render } from '@testing-library/react'
import { Dumper } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<Dumper data={{ some: 'data' }} />)
  })
})
