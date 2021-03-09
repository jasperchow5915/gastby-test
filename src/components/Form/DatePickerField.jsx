/** @jsx jsx */
import { jsx } from "@emotion/react"
import styled from "@emotion/styled"
import { useField, useFormikContext } from "formik"
import DatePicker from "react-datepicker"
import ArrowDown from "../../assets/svgs/arrow-down-desktop.svg"

const ArrowWrapper = styled.div`
  top: 300px;
  right: 45px;
  position: absolute;
`

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext()
  const [field] = useField(props)
  return (
    <label>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setFieldValue(field.name, val)
        }}
      />
      <ArrowWrapper>
        <ArrowDown />
      </ArrowWrapper>
    </label>
  )
}

export default DatePickerField
