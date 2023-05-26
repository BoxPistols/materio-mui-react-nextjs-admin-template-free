// Third Party Imports
import styled from '@emotion/styled'

// Type Imports
import type { VerticalNavState } from '../../contexts/verticalNavContext'
import type { VerticalNavProps } from '../../components/vertical-menu/VerticalNav'

// Util Imports
import { horizontalNavClasses, menuClasses, verticalNavClasses } from '../../utils/utilityClasses'

type StyledVerticalNavProps = VerticalNavProps &
  Pick<VerticalNavState, 'isBreakpointReached' | 'collapsing' | 'expanding'>

const StyledVerticalNav = styled.aside<StyledVerticalNavProps>`
  ${({ scrollWithContent }) =>
    !scrollWithContent &&
    `
    position: sticky;
    inset-block-start: 0;
    block-size: 100vh;
  `}
  border-inline-end: 1px solid #efefef;
  z-index: 9;

  /* Transition */
  transition-property: inline-size, min-inline-size, margin-inline-start, inset-inline-start;
  transition-duration: ${({ transitionOptions }) => `${transitionOptions?.duration}ms`};
  transition-timing-function: ${({ transitionOptions }) => transitionOptions?.easing};
  transition-delay: ${({ transitionOptions }) => `${transitionOptions?.delay}ms`};

  /* Width & Min Width & Margin */
  inline-size: ${({ width }) => `${typeof width === 'number' ? `${width}px` : width}`};
  min-inline-size: ${({ width }) => `${typeof width === 'number' ? `${width}px` : width}`};
  &.${verticalNavClasses.collapsed} {
    inline-size: ${({ collapsedWidth }) =>
      `${typeof collapsedWidth === 'number' ? `${collapsedWidth}px` : collapsedWidth}`};
    min-inline-size: ${({ collapsedWidth }) =>
      `${typeof collapsedWidth === 'number' ? `${collapsedWidth}px` : collapsedWidth}`};
  }

  &.${verticalNavClasses.collapsing}, &.${verticalNavClasses.expanding} {
    pointer-events: none;
  }

  /* Collapsed & Toggled */
  &.${verticalNavClasses.breakpointReached} {
    position: fixed;
    block-size: 100%;
    inset-block-start: 0;
    inset-inline-start: 0;
    z-index: 100;
    margin: 0;
    ${({ width }) => `inset-inline-start: ${typeof width === 'number' ? `-${width}px` : `-${width}`};`}
    &.${verticalNavClasses.collapsed} {
      inset-inline-start: -${({ collapsedWidth }) => `${typeof collapsedWidth === 'number' ? `${collapsedWidth}px` : collapsedWidth}`};
    }
    &.${verticalNavClasses.toggled} {
      inset-inline-start: 0;
    }
  }

  ${({ width, isBreakpointReached }) =>
    !isBreakpointReached &&
    `
    &.${verticalNavClasses.toggled} {
      margin-inline-start: ${typeof width === 'number' ? `-${width}px` : `-${width}`};
    }
  `}

  &.${horizontalNavClasses.root} .${menuClasses.root} > ul {
    flex-direction: column;
    align-items: stretch;
  }

  /* User Styles */
  ${({ customStyle }) => customStyle}
`

export default StyledVerticalNav
