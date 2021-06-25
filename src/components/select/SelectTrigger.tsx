import PropTypes from 'prop-types'
import React from 'react'
import { ReactComponent as ChevronIcon } from './assets/chevron-down.svg'
import s from './styles.module.css'
import { SelectTriggerProps } from './types'

export const SelectTrigger: React.FC<SelectTriggerProps> = ({
  label,
  onClick,
}) => (
  <div className={s.trigger} onClick={onClick}>
    <div className={s.triggerLabel}>{label}</div>
    <div className={s.triggerIcon}>
      <ChevronIcon />
    </div>
  </div>
)

SelectTrigger.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}