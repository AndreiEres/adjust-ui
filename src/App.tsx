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
  const [flatOptionsValue, setFlatOptionsValue] = React.useState(
    flatOptions[0].value
  )
  const [groupOptionsValue, setGroupOptionsValue] = React.useState(
    groupOptions[0].options[0].value
  )
  const [descriptionOptionsValue, setDescriptionOptionsValue] = React.useState(
    descriptionOptions[0].options[0].value
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
        showDescription
        onChange={setGroupOptionsValue}
      />

      <h2>Case with descriptions</h2>
      <code>{prettify(descriptionOptions)}</code>
      <p>
        Current value: <code>{descriptionOptionsValue}</code>
      </p>
      <Select
        value={descriptionOptionsValue}
        options={descriptionOptions}
        showDescription
        onChange={setDescriptionOptionsValue}
      />
    </div>
  )
}

export default App
