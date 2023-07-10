'use client'

// React Imports
import { useState } from 'react'

// Third-party Imports
import classnames from 'classnames'
import { useMedia } from 'react-use'
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { Settings } from '../../contexts/settingsContext'

// Icon Imports
import Cog from '../../svg/Cog'
import Refresh from '../../svg/Refresh'
import Close from '../../../@menu-package/svg/Close'
import ModeDark from '../../svg/ModeDark'
import ModeLight from '../../svg/ModeLight'
import ModeSystem from '../../svg/ModeSystem'
import SkinDefault from '../../svg/SkinDefault'
import SkinBordered from '../../svg/SkinBordered'
import LayoutVertical from '../../svg/LayoutVertical'
import LayoutCollapsed from '../../svg/LayoutCollapsed'
import LayoutHorizontal from '../../svg/LayoutHorizontal'
import ContentCompact from '../../svg/ContentCompact'
import ContentWide from '../../svg/ContentWide'
import DirectionLtr from '../../svg/DirectionLtr'
import DirectionRtl from '../../svg/DirectionRtl'

// Hook Imports
import useSettings from '../../hooks/useSettings'

// Style Imports
import styles from './styles.module.css'

type CustomizerProps = {
  breakpoint: string
}

const Customizer = ({ breakpoint }: CustomizerProps) => {
  // States
  const [isOpen, setIsOpen] = useState(false)

  // Hooks
  const { settings, saveSettings, isSettingsChanged, resetSettings } = useSettings()
  const isSystemDark = useMedia('(prefers-color-scheme: dark)', false)
  const breakpointReached = useMedia(`(max-width: ${breakpoint})`, false)
  const isMobileScreen = useMedia('(max-width: 600px)', false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleChange = (field: keyof Settings, value: Settings[keyof Settings]) => {
    saveSettings({
      [field]: value
    })
  }

  return (
    !breakpointReached && (
      <div
        className={classnames(
          'customizer',
          styles.customizer,
          { [styles.show]: isOpen, [styles.smallScreen]: isMobileScreen },
          'height-100 d-flex flex-column'
        )}
      >
        <div
          className={classnames(
            'customizer-toggler d-flex align-items-center justify-content-center cursor-pointer',
            styles.toggler
          )}
          onClick={handleToggle}
        >
          <Cog />
        </div>
        <div
          className={classnames('customizer-header d-flex align-items-center justify-content-between', styles.header)}
        >
          <div className='d-flex flex-column gap-2'>
            <h4 className={styles.customizerTitle}>Theme Customizer</h4>
            <p>Customize & Preview in Real Time</p>
          </div>
          <div className='d-flex gap-4'>
            <div onClick={resetSettings} className={classnames('d-flex cursor-pointer', styles.refreshWrapper)}>
              <Refresh />
              <div className={classnames(styles.dotStyles, { [styles.show]: isSettingsChanged })} />
            </div>
            <Close onClick={handleToggle} className='cursor-pointer' />
          </div>
        </div>
        <PerfectScrollbar options={{ wheelPropagation: false }}>
          <div className={classnames('customizer-body d-flex flex-column gap-6', styles.customizerBody)}>
            <div className='theming-section d-flex flex-column gap-5'>
              <p>Theming</p>
              <div className='d-flex flex-column gap-3'>
                <p className={styles.itemTitle}>Primary Color</p>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className={styles.primaryColorWrapper}>
                    <div className={styles.primaryColor} style={{ backgroundColor: '#765feb' }} />
                  </div>
                  <div className={styles.primaryColorWrapper}>
                    <div className={styles.primaryColor} style={{ backgroundColor: '#0d9394' }} />
                  </div>
                  <div className={styles.primaryColorWrapper}>
                    <div className={styles.primaryColor} style={{ backgroundColor: '#ffab1d' }} />
                  </div>
                  <div className={styles.primaryColorWrapper}>
                    <div className={styles.primaryColor} style={{ backgroundColor: '#eb3d63' }} />
                  </div>
                  <div className={styles.primaryColorWrapper}>
                    <div className={styles.primaryColor} style={{ backgroundColor: '#2092ec' }} />
                  </div>
                  <div className={styles.primaryColorWrapper}>
                    <div className={styles.primaryColor} style={{ backgroundColor: '#d4d4d4' }} />
                  </div>
                </div>
              </div>
              <div className='d-flex flex-column gap-3'>
                <p className={styles.itemTitle}>Mode</p>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex flex-column align-items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, styles.modeWrapper, {
                        [styles.active]: settings.mode === 'light'
                      })}
                      onClick={() => handleChange('mode', 'light')}
                    >
                      <ModeLight fontSize='1.875rem' />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('mode', 'light')}>
                      Light
                    </p>
                  </div>
                  <div className='d-flex flex-column align-items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, styles.modeWrapper, {
                        [styles.active]: settings.mode === 'dark'
                      })}
                      onClick={() => handleChange('mode', 'dark')}
                    >
                      <ModeDark fontSize='1.875rem' />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('mode', 'dark')}>
                      Dark
                    </p>
                  </div>
                  <div className='d-flex flex-column align-items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, styles.modeWrapper, {
                        [styles.active]: settings.mode === 'system'
                      })}
                      onClick={() => handleChange('mode', 'system')}
                    >
                      <ModeSystem fontSize='1.875rem' />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('mode', 'system')}>
                      System
                    </p>
                  </div>
                </div>
              </div>
              <div className='d-flex flex-column gap-3'>
                <p className={styles.itemTitle}>Skin</p>
                <div className='d-flex align-items-center gap-4'>
                  <div className='d-flex flex-column align-items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.skin === 'default' })}
                      onClick={() => handleChange('skin', 'default')}
                    >
                      <SkinDefault />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('skin', 'default')}>
                      Default
                    </p>
                  </div>
                  <div className='d-flex flex-column align-items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.skin === 'bordered' })}
                      onClick={() => handleChange('skin', 'bordered')}
                    >
                      <SkinBordered />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('skin', 'bordered')}>
                      Bordered
                    </p>
                  </div>
                </div>
              </div>
              {settings.mode === 'dark' ||
              (settings.mode === 'system' && isSystemDark) ||
              settings.layout === 'horizontal' ? null : (
                <div className='d-flex align-items-center justify-content-between'>
                  <label className={classnames(styles.itemTitle, 'cursor-pointer')} htmlFor='customizer-semi-dark'>
                    Semi Dark
                  </label>
                  <input
                    type='checkbox'
                    id='customizer-semi-dark'
                    checked={settings.semiDark === true}
                    onChange={() => handleChange('semiDark', !settings.semiDark)}
                  />
                </div>
              )}
            </div>
            <hr className={styles.hr} />
            <div className='layout-section d-flex flex-column gap-5'>
              <p>Layout</p>
              <div className='d-flex flex-column gap-3'>
                <p className={styles.itemTitle}>Layouts</p>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='d-flex flex-column align-items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.layout === 'vertical' })}
                      onClick={() => handleChange('layout', 'vertical')}
                    >
                      <LayoutVertical />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('layout', 'vertical')}>
                      Vertical
                    </p>
                  </div>
                  <div className='d-flex flex-column align-items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.layout === 'collapsed' })}
                      onClick={() => handleChange('layout', 'collapsed')}
                    >
                      <LayoutCollapsed />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('layout', 'collapsed')}>
                      Collapsed
                    </p>
                  </div>
                  <div className='d-flex flex-column align-items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.layout === 'horizontal' })}
                      onClick={() => handleChange('layout', 'horizontal')}
                    >
                      <LayoutHorizontal />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('layout', 'horizontal')}>
                      Horizontal
                    </p>
                  </div>
                </div>
              </div>
              <div className='d-flex flex-column gap-3'>
                <p className={styles.itemTitle}>Content</p>
                <div className='d-flex align-items-center gap-4'>
                  <div className='d-flex flex-column align-items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, {
                        [styles.active]: settings.contentWidth === 'compact'
                      })}
                      onClick={() => handleChange('contentWidth', 'compact')}
                    >
                      <ContentCompact />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('contentWidth', 'compact')}>
                      Compact
                    </p>
                  </div>
                  <div className='d-flex flex-column align-items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.contentWidth === 'wide' })}
                      onClick={() => handleChange('contentWidth', 'wide')}
                    >
                      <ContentWide />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('contentWidth', 'wide')}>
                      Wide
                    </p>
                  </div>
                </div>
              </div>
              <div className='d-flex flex-column gap-3'>
                <p className={styles.itemTitle}>Direction</p>
                <div className='d-flex align-items-center gap-4'>
                  <div className='d-flex flex-column align-items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, {
                        [styles.active]: settings.direction === 'ltr'
                      })}
                      onClick={() => handleChange('direction', 'ltr')}
                    >
                      <DirectionLtr />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('direction', 'ltr')}>
                      Left to Right
                    </p>
                  </div>
                  <div className='d-flex flex-column align-items-start gap-1'>
                    <div
                      className={classnames(styles.itemWrapper, { [styles.active]: settings.direction === 'rtl' })}
                      onClick={() => handleChange('direction', 'rtl')}
                    >
                      <DirectionRtl />
                    </div>
                    <p className={styles.itemLabel} onClick={() => handleChange('direction', 'rtl')}>
                      Right to Left
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    )
  )
}

export default Customizer
