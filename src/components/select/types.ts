export type SelectProps = {
  value: string
  options: Array<SelectBaseOptionType | SelectGroupOptionType>
  onChange?: (value: string) => void
}

export type SelectBaseOptionType = {
  value: string
  label: string
  description?: string
}

export type SelectGroupOptionType = {
  options: SelectBaseOptionType[]
}

export type SelectOptionCommonProps = {
  currentValue: string
  onClick: (value: string) => void
}

export type SelectBaseOptionProps = SelectBaseOptionType &
  SelectOptionCommonProps

export type SelectGroupOptionProps = SelectGroupOptionType &
  SelectOptionCommonProps
