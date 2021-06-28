import PropTypes from 'prop-types'
import React from 'react'
import { cn } from '../../utils/classnames'
import s from './styles.module.css'
import { SelectBaseOptionProps } from './types'
import { ReactComponent as CheckIcon } from './assets/check-light.svg'

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
    <div className={cn(s.option, isCurrent && s.current)} onClick={handleClick}>
      <div className={s.optionIcon}>{isCurrent && <CheckIcon />}</div>
      <div className={s.optionInfo}>
        <div className={s.optionLabel}>{label}</div>
        {showDescription && (
          <div className={cn(s.optionDescription, s.twoLineClamp)}>
            {description}
          </div>
        )}
      </div>
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
