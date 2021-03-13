/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/react"
import styled from "@emotion/styled"
import { useState, useEffect, useRef, useImperativeHandle } from "react"
import SliderContent from "./SliderContent"
import Slide from "./Slide"
import { useWindowSize } from "../../utlis/hooks/useWindowSize"
import Arrow from "./Arrow"

/**
 * @function Slider
 */
const Slider = (props) => {
  const width = useWindowSize().width

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  })
  const { translate, transition, activeIndex } = state

  const nextSlide = () => {
    if (activeIndex === props.slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * width,
    })
  }

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (props.slides.length - 1) * width,
        activeIndex: props.slides.length - 1,
      })
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * width,
    })
  }
  props.slideActionGenerator(nextSlide, prevSlide)

  const autoPlayRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }

    const interval = setInterval(play, props.autoPlay * 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div css={sliderCSS}>
      <SliderContent
        translate={translate}
        transition={transition}
        width={width * props.slides.length}
      >
        {props.slides.map((slide, i) => {
          return (
            <Slide
              key={i}
              content={slide}
              className={
                props.enableFadeInOut
                  ? i == activeIndex
                    ? "fadeIn"
                    : "fadeOut"
                  : ""
              }
            />
          )
        })}
      </SliderContent>
      {!props.customArrow ? (
        <div
          css={css`
            > div {
              position: absolute;
            }
          `}
        >
          <Arrow direction="left" handleClick={prevSlide} />
          <Arrow direction="right" handleClick={nextSlide} />
        </div>
      ) : null}
    </div>
  )
}

Slider.defaultProps = {
  slides: [],
  autoPlay: null,
  customArrow: false,
  enableFadeInOut: false,
}

const sliderCSS = css`
  position: relative;
  height: auto;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`
export default Slider
