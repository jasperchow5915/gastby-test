/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { Formik, Field, Form } from "formik"
import styled from "@emotion/styled"
import { checkboxOptions } from "./constant"
import DatePickerField from "./DatePickerField"
import { SignUpSchema } from "./validation"
import "react-datepicker/dist/react-datepicker.css"

const FormHeader = styled.div`
  position: static;
  left: 0%;
  right: 4.13%;
  top: 0%;
  bottom: 22.22%;
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.176471px;
  color: #333333;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

const formFieldCss = css`
  width: 440px;
  height: 56px;
  border-radius: 4px;

  background: linear-gradient(
      0deg,
      rgba(187, 189, 183, 0.1),
      rgba(187, 189, 183, 0.1)
    ),
    #ffffff;
  border: 0.5px solid #0b2846;
  box-sizing: border-box;
  margin-bottom: 8px;
  padding: 16px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.07px;
  color: #292f2d;
`

const headerInnerCss = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: static;
  width: 436px;
  height: 72px;
  left: 0px;
  top: 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
`

const checkboxFieldCss = css`
  width: 24px;
  height: 24px;
  background: #ffffff;
  border: 0.5px solid #333333;
  border-radius: 3px;
  margin-right: 8px;
`

const checkboxLabelCss = css`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  margin-bottom: 8px;

  display: flex;
  align-items: center;
  letter-spacing: 0.065px;

  color: #333333;
`

const ButtonsWrapper = styled.div`
  margin-top: 16px;
`

const SignUpForm = (props) => (
  <div css={props.css}>
    <FormHeader>
      <p css={headerInnerCss}>
        Be thte first to register for new townhome releases for first option
      </p>
    </FormHeader>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500))
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {({ isSubmitting, getFieldProps, handleChange, handleBlur, values }) => (
        <Form>
          <Field
            className="form-field"
            id="firstName"
            name="firstName"
            placeholder="First Name*"
            css={formFieldCss}
          />
          <Field
            className="form-field"
            id="lastName"
            name="lastName"
            placeholder="Last Name*"
            css={formFieldCss}
          />
          <Field
            className="form-field"
            id="email"
            name="email"
            type="email"
            placeholder="Email*"
            css={formFieldCss}
          />
          <DatePickerField
            className="form-field"
            name="buyDate"
            placeholderText="When are you looking to buy"
            css={formFieldCss}
          />
          <div className="custom-check-box-field">
            {checkboxOptions.map((op, i) => (
              <label css={checkboxLabelCss}>
                <Field
                  key={i}
                  type="checkbox"
                  name="customCheckBoxField"
                  value={op.value}
                  css={checkboxFieldCss}
                />
                {op.label}
              </label>
            ))}
          </div>
          <ButtonsWrapper>
            <button type="submit" css={submitBTNCss}>
              SUBMIT
            </button>
            <button type="reset" css={resetBTNCss}>
              RESET
            </button>
          </ButtonsWrapper>
        </Form>
      )}
    </Formik>
  </div>
)

export default SignUpForm

const submitBTNCss = css`
  width: 243px;
  height: 40px;
  background: #bad982;
  border-color: #bad982;
  border-radius: 4px;
  margin-right: 8px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: #333333;
  cursor: pointer;
`
const resetBTNCss = css`
  width: 214px;
  height: 40px;
  background: #35abd1;
  border-color: #35abd1;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  cursor: pointer;
`
