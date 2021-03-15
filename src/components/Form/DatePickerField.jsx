/** @jsx jsx */
import { jsx } from "@emotion/react"
import styled from "@emotion/styled"
import { useField, useFormikContext } from "formik"
import DatePicker from "react-datepicker"
import ArrowDown from "../../assets/svgs/arrow-down-desktop.svg"
import ArrowDownMobile from "../../assets/svgs/arrow-down-mobile.svg"
import { useWindowSize } from "../../utlis/hooks/useWindowSize"

const ArrowWrapper = styled.div`
  border: none;
  background: none;
  position: absolute;
  top: 0px;
  right: 15px;
`

const DatePickerWrapper = styled.div`
  display: inline;
  position: relative;
`

const ArrowDownFactory = (props) =>
  props.screenWidth <= 768 ? <ArrowDownMobile /> : <ArrowDown />

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext()
  const [field] = useField(props)
  return (
    <div style={{ width: "100%" }}>
      <label>
        <DatePickerWrapper>
          <DatePicker
            {...field}
            {...props}
            dateFormat="dd/MM/yyyy"
            selected={(field.value && new Date(field.value)) || null}
            onChange={(val) => {
              setFieldValue(field.name, val)
            }}
            style={{ width: "100%" }}
          />
          <ArrowWrapper>
            <ArrowDownFactory screenWidth={useWindowSize()?.width} />
          </ArrowWrapper>
        </DatePickerWrapper>
      </label>
    </div>
  )
}

export default DatePickerField
