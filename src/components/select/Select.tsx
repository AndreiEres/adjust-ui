import PropTypes from 'prop-types'
import React from 'react'
import { SelectOptionsList } from './SelectOptionsList'
import { SelectProps } from './types'

export const Select: React.FC<SelectProps> = ({ value, options, onChange }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleIsOpen = () => setIsOpen(!isOpen)
  const handleClick = (newValue: string) => onChange && onChange(newValue)

  if (options.length === 0) return null

  return (
    <div>
      <div onClick={toggleIsOpen}>{value}</div>
      {isOpen && (
        <SelectOptionsList
          currentValue={value}
          options={options}
          onClick={handleClick}
        />
      )}
    </div>
  )
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
}
