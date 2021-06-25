import React from 'react'
import { Select } from './components/select/Select'

const App: React.FC = () => (
  <div className='container'>
    <h1>Select</h1>
    <p>
      For test task{' '}
      <a href='https://github.com/spaceship-forks/atlas-ds-challenge'>
        atlas-ds-challenge
      </a>
    </p>
    <Select />
  </div>
)

export default App
