import React from 'react'
import PropTypes from 'prop-types'
import { SelectBaseOptionProps } from './types'
import s from './styles.module.css'

export const SelectBaseOption: React.FC<SelectBaseOptionProps> = ({
  value,
  label,
  description,
  currentValue,
  showDescription,
  onClick,
}) => {
  const isCurrent = value === currentValue
  const handleClick = () => onClick(value)

  return (
    <div className={isCurrent ? s.current : undefined} onClick={handleClick}>
      <div>{label}</div>
      {showDescription && <div>{description}</div>}
    </div>
  )
}

SelectBaseOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  currentValue: PropTypes.string.isRequired,
  showDescription: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
