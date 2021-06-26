import PropTypes from 'prop-types'
import React from 'react'
import { ReactComponent as ChevronIcon } from './assets/chevron-down.svg'
import s from './styles.module.css'
import { SelectTriggerProps } from './types'

export const SelectTrigger: React.FC<SelectTriggerProps> = ({ label }) => (
  <div className={s.trigger}>
    <div className={s.triggerLabel}>{label}</div>
    <div className={s.triggerIcon}>
      <ChevronIcon />
    </div>
  </div>
)

SelectTrigger.propTypes = {
  label: PropTypes.string.isRequired,
}
