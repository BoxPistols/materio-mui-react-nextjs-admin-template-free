'use client'

/* React Imports */
import { AnchorHTMLAttributes, forwardRef, ForwardRefRenderFunction, ReactElement, ReactNode } from 'react'
import { useRendersCount } from 'react-use'

/* Third Party Imports */
import classNames from 'classnames'
import { CSSObject } from '@emotion/react'

/* Import Menu Classes */
import { menuClasses } from '../../utils/utilityClasses'

/* Import Hooks */
import useVerticalNav from '../../hooks/useVerticalNav'
import useVerticalMenu from '../../hooks/useVerticalMenu'

/* Styled Components */
import MenuButton from './MenuButton'
import StyledMenuIcon from '../../styles/StyledMenuIcon'
import StyledVerticalMenuItem from '../../styles/vertical/StyledVerticalMenuItem'
import StyledMenuLabel from '../../styles/StyledMenuLabel'
import StyledMenuPrefix from '../../styles/StyledMenuPrefix'
import StyledMenuSuffix from '../../styles/StyledMenuSuffix'

export type MenuItemProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> & {
  icon?: ReactNode
  prefix?: ReactNode
  suffix?: ReactNode
  active?: boolean
  disabled?: boolean
  target?: string
  rel?: string
  aclProps?: { action: string; subject: string }
  i18nKey?: string
  children?: ReactNode
  component?: string | ReactElement
  rootStyles?: CSSObject

  /**
   * @ignore
   */
  level?: number
}

type MenuItemElement = 'root' | 'button' | 'icon' | 'label' | 'prefix' | 'suffix'

const MenuItem: ForwardRefRenderFunction<HTMLLIElement, MenuItemProps> = (props, ref) => {
  /* Props */
  const {
    children,
    icon,
    className,
    prefix,
    suffix,
    level = 0,
    active = false,
    disabled = false,
    component,
    rootStyles,
    ...rest
  } = props

  /* Hooks */
  const { isCollapsed, isHovered, transitionOptions, isPopoutWhenCollapsed } = useVerticalNav()
  const { menuItemStyles } = useVerticalMenu()
  const rendersCount = useRendersCount()

  /* Get the styles for the specified element. */
  const getMenuItemStyles = (element: MenuItemElement): CSSObject | undefined => {
    // If the menuItemStyles prop is provided, get the styles for the
    // specified element.
    if (menuItemStyles) {
      // Define the parameters that are passed to the style functions.
      const params = { level, disabled, active, isSubmenu: false }

      // Get the style function for the specified element.
      const styleFunction = menuItemStyles[element]

      if (styleFunction) {
        // If the style function is a function, call it and return the result.
        // Otherwise, return the style function itself.
        return typeof styleFunction === 'function' ? styleFunction(params) : styleFunction
      }
    }
  }

  return (
    <StyledVerticalMenuItem
      ref={ref}
      className={classNames(
        { [menuClasses.menuItemRoot]: level === 0 },
        { [menuClasses.active]: active },
        { [menuClasses.disabled]: disabled },
        className
      )}
      level={level}
      isCollapsed={isCollapsed}
      isPopoutWhenCollapsed={isPopoutWhenCollapsed}
      disabled={disabled}
      active={active}
      buttonStyles={getMenuItemStyles('button')}
      menuItemStyles={getMenuItemStyles('root')}
      rootStyles={rootStyles}
    >
      <MenuButton className={menuClasses.button} component={component} tabIndex={0} {...rest}>
        {icon && (
          <StyledMenuIcon className={menuClasses.icon} rootStyles={getMenuItemStyles('icon')}>
            {icon}
          </StyledMenuIcon>
        )}

        {prefix && (
          <StyledMenuPrefix
            isHovered={isHovered}
            isCollapsed={isCollapsed}
            transitionOptions={transitionOptions}
            firstLevel={level === 0}
            className={menuClasses.prefix}
            rootStyles={getMenuItemStyles('prefix')}
          >
            {prefix}
          </StyledMenuPrefix>
        )}

        <StyledMenuLabel className={menuClasses.label} rootStyles={getMenuItemStyles('label')}>
          {children} {rendersCount}
        </StyledMenuLabel>

        {suffix && (
          <StyledMenuSuffix
            isHovered={isHovered}
            isCollapsed={isCollapsed}
            transitionOptions={transitionOptions}
            firstLevel={level === 0}
            className={menuClasses.suffix}
            rootStyles={getMenuItemStyles('suffix')}
          >
            {suffix}
          </StyledMenuSuffix>
        )}
      </MenuButton>
    </StyledVerticalMenuItem>
  )
}

export default forwardRef(MenuItem)