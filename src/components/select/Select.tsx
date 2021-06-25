import PropTypes from 'prop-types'
import React from 'react'
import { SelectOption, SelectOptionProps } from './SelectOption'

export const Select: React.FC<SelectProps> = ({ value, options, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange && onChange(e.currentTarget.value)

  if (options.length === 0) return null

  return (
    <select value={value} onChange={handleChange}>
      {/* TODO: Remove idx as key */}
      {options.map((option, idx) => (
        <SelectOption {...option} key={idx} />
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
