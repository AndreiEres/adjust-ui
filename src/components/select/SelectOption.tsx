import React from 'react'
import PropTypes from 'prop-types'

export const SelectOption: React.FC<SelectOptionProps> = ({
  value,
  label,
  description,
}) => {
  return <option value={value}>{label}</option>
}

export type SelectOptionProps = {
  value: string
  label: string
  description?: string
}
SelectOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
}
