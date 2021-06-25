import React from 'react'
import PropTypes from 'prop-types'
import { SelectBaseOptionProps } from './types'

export const SelectBaseOption: React.FC<SelectBaseOptionProps> = ({
  value,
  label,
  description,
  currentValue,
  onClick,
}) => {
  const isCurrent = value === currentValue
  const handleClick = () => onClick(value)

  return (
    <div onClick={handleClick}>
      {isCurrent ? '>>>' : ''}
      {label}
    </div>
  )
}

SelectBaseOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}
