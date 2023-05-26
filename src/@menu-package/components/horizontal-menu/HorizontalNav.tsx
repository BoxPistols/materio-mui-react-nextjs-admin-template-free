// React Imports
import type { HTMLAttributes } from 'react'
import { useEffect } from 'react'

// Third Party Imports
import classNames from 'classnames'
import type { CSSObject } from '@emotion/react'

// Component Imports
import VerticalNavInHorizontalLayout from '../../../@layouts/components/menu-horizontal/VerticalNavInHorizontalLayout'

// Hook Imports
import { useMediaQuery } from '../../hooks/useMediaQuery'
import useLayout from '../../../@layouts/hooks/useLayout'

// Util Imports
import { horizontalNavClasses } from '../../utils/utilityClasses'

// Styled Component Imports
import StyledHorizontalNav from '../../styles/horizontal/StyledHorizontalNav'

// Define Types
type BreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'always'

const BREAK_POINTS: Record<BreakPoint, string> = {
  xs: '480px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1536px',
  xxl: '1920px',
  always: 'always'
}

export type HorizontalNavProps = HTMLAttributes<HTMLDivElement> & {
  switchToVertical?: boolean
  setIsBreakpointReached?: (isBreakpointReached: boolean) => void
  hideMenu?: boolean
  breakPoint?: BreakPoint
  customBreakPoint?: string
  transitionOptions?: {
    duration?: number | string
    easing?: string
    delay?: number | string
  }
  customStyle?: CSSObject
}

const HorizontalNav = (props: HorizontalNavProps) => {
  // Destructure Props with default values
  const {
    setIsBreakpointReached,
    switchToVertical = false,
    hideMenu = false,
    breakPoint = 'lg',
    customBreakPoint,
    customStyle,
    className,
    children,
    ...rest
  } = props

  const { layout } = useLayout()

  // Find the breakpoint from which screen size responsive behavior should enable and if its reached or not
  const breakpointReached = useMediaQuery(customBreakPoint ?? (breakPoint ? BREAK_POINTS[breakPoint] : breakPoint))

  const horizontalMenuClasses = classNames(
    horizontalNavClasses.root,
    {
      [horizontalNavClasses.breakpointReached]: breakpointReached
    },
    className
  )

  // Set the breakpointReached value in the state
  useEffect(() => {
    if (setIsBreakpointReached) setIsBreakpointReached(breakpointReached)
  }, [breakpointReached]) // eslint-disable-line react-hooks/exhaustive-deps

  // If switchToVertical is true, then render the VerticalNav component if breakpoint is reached
  if (switchToVertical && breakpointReached && layout === 'horizontal') {
    return <VerticalNavInHorizontalLayout className={horizontalMenuClasses}>{children}</VerticalNavInHorizontalLayout>
  }

  // If hideMenu is true, then hide the HorizontalNav component if breakpoint is reached
  if (hideMenu && breakpointReached) {
    return null
  }

  // If switchToVertical & hideMenu are false, then render the HorizontalNav component
  return (
    <StyledHorizontalNav
      switchToVertical={switchToVertical}
      hideMenu={hideMenu}
      breakpointReached={breakpointReached}
      customStyle={customStyle}
      className={horizontalMenuClasses}
      {...rest}
    >
      {children}
    </StyledHorizontalNav>
  )
}

export default HorizontalNav
