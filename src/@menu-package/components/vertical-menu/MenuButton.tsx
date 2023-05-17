// React Imports
import {
  AnchorHTMLAttributes,
  cloneElement,
  createElement,
  forwardRef,
  ForwardRefRenderFunction,
  ReactElement,
  ReactNode
} from 'react'

// Third Party Imports
import classNames from 'classnames'
import { css } from '@emotion/react'
import { RouterLink } from '../RouterLink'
import { menuClasses } from '../../utils/utilityClasses'

interface MenuButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> {
  active?: boolean
  children?: ReactNode
  component?: string | ReactElement
}

interface MenuButtonStylesProps {
  level: number
  active?: boolean
  disabled?: boolean
  children?: ReactNode
  isCollapsed?: boolean
  isPopoutWhenCollapsed?: boolean
}

export const menuButtonStyles = (props: MenuButtonStylesProps) => {
  const { level, disabled, children, isCollapsed, isPopoutWhenCollapsed } = props

  return css({
    display: 'flex',
    alignItems: 'center',
    blockSize: '50px',
    textDecoration: 'none',
    color: 'inherit',
    boxSizing: 'border-box',
    cursor: 'pointer',
    paddingInlineEnd: '20px',
    paddingInlineStart: `${level === 0 ? 20 : (isPopoutWhenCollapsed && isCollapsed ? level : level + 1) * 20}px`,

    '&:hover': {
      backgroundColor: '#f3f3f3'
    },

    ...(disabled && {
      pointerEvents: 'none',
      cursor: 'default',
      color: '#adadad'
    }),

    // All the active styles are applied to the button including menu items or submenu
    [`&.${menuClasses['active']}`]: {
      backgroundColor: level === 0 ? '#d2e0f9' : children ? '#efefef' : '#f9d2e0'
    }
  })
}

const MenuButton: ForwardRefRenderFunction<HTMLAnchorElement, MenuButtonProps> = (
  { className, active, component, children, ...rest },
  ref
) => {
  if (component) {
    // If component is a string, create a new element of that type
    if (typeof component === 'string') {
      return createElement(
        component,
        {
          className: classNames(className),
          ...rest,
          ref
        },
        children
      )
    } else {
      // Otherwise, clone the element
      const { className: classNameProp, ...props } = component.props

      return cloneElement(
        component,
        {
          className: classNames(className, classNameProp),
          ...rest,
          ...props,
          ref
        },
        children
      )
    }
  } else {
    // If there is no component but href is defined, render RouterLink
    if (rest.href) {
      return (
        <RouterLink ref={ref} className={className} href={rest.href} {...rest}>
          {children}
        </RouterLink>
      )
    } else {
      return (
        <a ref={ref} className={classNames({ [menuClasses.active]: active }, className)} {...rest}>
          {children}
        </a>
      )
    }
  }
}

export default forwardRef(MenuButton)