import PropTypes from 'prop-types'
import React from 'react'
import { SelectOption } from './SelectOption'
import { SelectProps } from './types'

export const Select: React.FC<SelectProps> = ({ value, options, onChange }) => {
  const handleChange = (newValue: string) => onChange && onChange(newValue)

  if (options.length === 0) return null

  return (
    <div>
      {options.map((option, idx) => (
        <SelectOption
          {...option}
          currentValue={value}
          onClick={handleChange}
          key={idx}
        />
      ))}
    </div>
  )
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
}
