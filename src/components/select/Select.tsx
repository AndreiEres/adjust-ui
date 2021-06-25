import React from 'react'
import PropTypes from 'prop-types'
import { SelectOption, SelectOptionProps } from './SelectOption'

export const Select: React.FC<SelectProps> = ({ value, options, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange && onChange(e.currentTarget.value)

  if (options.length === 0) return null

  return (
    <select value={value || options[0].value} onChange={handleChange}>
      {options.map((option) => (
        <SelectOption {...option} key={option.value} />
      ))}
    </select>
  )
}

type SelectProps = {
  value: string
  options: Array<SelectOptionProps>
  onChange?: (value: string) => void
}
Select.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
}
