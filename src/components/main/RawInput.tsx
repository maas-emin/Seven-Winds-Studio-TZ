import React, { FC } from 'react'
import styles from './Main.module.scss'

type T = {
  isActive: boolean
  rowName?: string
  inputRowName?: string
  togle: boolean
  placeholder: string
  onChangeRowName: (e: React.ChangeEvent<HTMLInputElement>) => void
  submit: (e: React.KeyboardEvent<HTMLInputElement>) => void
  updateRowName: (value?: string) => void
}
export const RawInput: FC<T> = ({
  isActive,
  rowName,
  inputRowName,
  onChangeRowName,
  submit,
  updateRowName,
  togle,
  placeholder,
}) => {
  return (
    <>
      {isActive === false ? (
        <p
          onClick={() => updateRowName(rowName)}
          style={rowName?.length !== 0 ? { cursor: 'pointer' } : {}}
        >
          {rowName}
        </p>
      ) : (
        <input
          className={styles.td_input}
          value={inputRowName}
          onChange={(e) => onChangeRowName(e)}
          onKeyDown={(e) => submit(e)}
          placeholder={placeholder}
        />
      )}

      {togle && (
        <input
          className={styles.td_input_add}
          onKeyDown={(e) => submit(e)}
          onChange={(e) => onChangeRowName(e)}
          placeholder={placeholder}
        />
      )}
    </>
  )
}

export default RawInput
