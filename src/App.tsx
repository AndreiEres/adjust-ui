import React from 'react'
import { Select } from './components/select/Select'
import { prettify } from './utils/prettify'

const flatOptions = [
  { value: 'hopper', label: 'Hopper' },
  { value: 'holberton', label: 'Holberton' },
]

const App: React.FC = () => {
  const [flatOptionsValue, setFlatOptionsValue] = React.useState('hopper')

  return (
    <div className='container'>
      <h1>Select</h1>
      <p>
        For test task{' '}
        <a href='https://github.com/spaceship-forks/atlas-ds-challenge'>
          atlas-ds-challenge
        </a>
      </p>

      <h2>Base case</h2>
      <code>{prettify(flatOptions)}</code>
      <p>
        Current value: <code>{flatOptionsValue}</code>
      </p>
      <Select
        value={flatOptionsValue}
        options={flatOptions}
        onChange={setFlatOptionsValue}
      />
    </div>
  )
}

export default App
