import React from 'react'
import PropTypes from 'prop-types'

export const SelectBaseOption: React.FC<SelectBaseOptionProps> = ({
  value,
  label,
  description,
}) => {
  return <option value={value}>{label}</option>
}

export type SelectBaseOptionProps = {
  value: string
  label: string
  description?: string
}
SelectBaseOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
}
