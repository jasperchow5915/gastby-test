/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { Formik, Field, Form, getIn, ErrorMessage } from "formik"
import styled from "@emotion/styled"
import { checkboxOptions } from "./constant"
import DatePickerField from "./DatePickerField"
import { SignUpSchema } from "./validation"
import "react-datepicker/dist/react-datepicker.css"
import { useState, useEffect } from "react"

const FormHeader = styled.div`
  position: static;
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 28px;
  letter-spacing: 0.176471px;
  color: #333333;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`

const formFieldCss = css`
  width: 100%;
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
  &.error {
    border: 1px solid red;
  }
`

const headerInnerCss = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: static;
  width: 100%;
  height: auto;
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

const SignUpForm = (props) => {
  return (
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
          buyDate: "",
          services: [],
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500))
          alert(JSON.stringify(values, null, 2))
        }}
      >
        {({
          isSubmitting,
          getFieldProps,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => {
          console.log("values", values)
          console.log("values ser", values.services)
          console.log("can", canSubmit)
          console.log("errors", errors)
          const [canSubmit, setCanSubmit] = useState(false)
          if (!getIn(errors, "services") && !canSubmit) {
            setCanSubmit(true)
          } else if (getIn(errors, "services") && canSubmit) {
            setCanSubmit(false)
          }
          return (
            <Form>
              <Field
                className={`form-field ${getIn(errors, "firstName") ? "error" : ""}`}
                id="firstName"
                name="firstName"
                placeholder="First Name*"
                css={formFieldCss}
              />
              <Field
                className={`form-field ${getIn(errors, "lastName") ? "error" : ""}`}
                id="lastName"
                name="lastName"
                placeholder="Last Name*"
                css={formFieldCss}
              />
              <Field
                className={`form-field ${getIn(errors, "email") ? "error" : ""}`}
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
                      name="services"
                      value={op.value}
                      css={checkboxFieldCss}
                    />
                    {op.label}
                  </label>
                ))}
              </div>
              {errors?.services ? (
                <div
                  css={css`
                    font-size: 15px;
                    color: red;
                  `}
                >
                  {errors?.services}
                </div>
              ) : null}
              <ButtonsWrapper>
                <button disabled={!canSubmit} type="submit" css={submitBTNCss}>
                  SUBMIT
                </button>
                <button type="reset" css={resetBTNCss}>
                  RESET
                </button>
              </ButtonsWrapper>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default SignUpForm

const submitBTNCss = css`
  width: 49%;
  height: 40px;
  background: #bad982;
  border-color: #bad982;
  border-radius: 4px;
  margin-right: 1%;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  color: #333333;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed;
  }
`
const resetBTNCss = css`
  width: 49%;
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
