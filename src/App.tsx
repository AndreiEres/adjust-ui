import React from 'react'
import { Select } from './components/select/Select'
import { prettify } from './utils/prettify'

const flatOptions = [
  { value: 'hopper', label: 'Hopper' },
  { value: 'holberton', label: 'Holberton' },
]

const groupOptions = [
  {
    options: [
      { value: 'hopper', label: 'Hopper' },
      { value: 'holberton', label: 'Holberton' },
    ],
  },
  {
    options: [
      { value: 'antonelli', label: 'Antonelli' },
      { value: 'bartik', label: 'Bartik' },
      { value: 'teitelbaum', label: 'Teitelbaum' },
    ],
  },
]

const App: React.FC = () => {
  const [flatOptionsValue, setFlatOptionsValue] = React.useState(
    flatOptions[0].value
  )
  const [groupOptionsValue, setGroupOptionsValue] = React.useState(
    groupOptions[0].options[0].value
  )

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

      <h2>Case with groups</h2>
      <code>{prettify(groupOptions)}</code>
      <p>
        Current value: <code>{groupOptionsValue}</code>
      </p>
      <Select
        value={groupOptionsValue}
        options={groupOptions}
        onChange={setGroupOptionsValue}
      />
    </div>
  )
}

export default App
