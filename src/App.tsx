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

const descriptionOptions = [
  {
    options: [
      {
        value: 'hopper',
        label: 'Hopper',
        description:
          'Grace Hopper was an American computer scientist and US Navy rear admiral.',
      },
      {
        value: 'holberton',
        label: 'Holberton',
        description:
          'Frances Elisabeth Holberton was one of the programmers of the first computer.',
      },
    ],
  },
  {
    options: [
      {
        value: 'teitelbaum',
        label: 'Teitelbaum',
        description:
          'Ruth Teitelbaum was was one of the first computer programmers in the world.',
      },
    ],
  },
]

const App: React.FC = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')
  const [flatOptionsValue, setFlatOptionsValue] = React.useState(
    flatOptions[0].value
  )
  const [groupOptionsValue, setGroupOptionsValue] = React.useState(
    groupOptions[0].options[0].value
  )
  const [descriptionOptionsValue, setDescriptionOptionsValue] = React.useState(
    descriptionOptions[0].options[0].value
  )
  const toggleMode = () => setMode(mode === 'dark' ? 'light' : 'dark')

  return (
    <div className={mode}>
      <div className='container'>
        <h1>Select</h1>
        <label>
          <input
            type='checkbox'
            checked={mode === 'dark'}
            onChange={toggleMode}
          />{' '}
          Darkmode
        </label>
        <p>
          For test task{' '}
          <a href='https://github.com/spaceship-forks/atlas-ds-challenge'>
            atlas-ds-challenge
          </a>
        </p>

        <h2>Base case</h2>
        <Select
          value={flatOptionsValue}
          options={flatOptions}
          mode={mode}
          onChange={setFlatOptionsValue}
        />
        <code>{prettify(flatOptions)}</code>

        <h2>Case with groups</h2>
        <Select
          value={groupOptionsValue}
          options={groupOptions}
          showDescription
          mode={mode}
          onChange={setGroupOptionsValue}
        />
        <code>{prettify(groupOptions)}</code>

        <h2>Case with descriptions</h2>
        <Select
          value={descriptionOptionsValue}
          options={descriptionOptions}
          showDescription
          mode={mode}
          onChange={setDescriptionOptionsValue}
        />
        <code>{prettify(descriptionOptions)}</code>
      </div>
    </div>
  )
}

export default App
