// React Imports
import { Fragment, forwardRef, useMemo } from 'react'
import type { Ref } from 'react'

// Third-party Imports
import classnames from 'classnames'
import type { ActionId, ActionImpl } from 'kbar'

// Icon Imports
import SubdirectoryLeft from '@assets/svg/SubdirectoryLeft'

const Title = ({ title, flexGrow = false }: { title: string; flexGrow?: boolean }) => {
  return flexGrow ? (
    <span className='grow text-sm overflow-hidden whitespace-nowrap overflow-ellipsis'>{title}</span>
  ) : (
    <span className='text-sm overflow-hidden whitespace-nowrap overflow-ellipsis'>{title}</span>
  )
}

const TitleWithAncestors = ({
  title,
  flexGrow = false,
  ancestors
}: {
  title: string
  flexGrow?: boolean
  ancestors: ActionImpl[]
}) => {
  if (ancestors.length === 0) return <Title title={title} flexGrow={flexGrow} />

  return (
    <div className='flex items-center grow gap-2'>
      {ancestors.map((ancestor: ActionImpl) => (
        <Fragment key={ancestor.id}>
          <span style={{ opacity: 0.5 }}>{ancestor.name}</span>
          <span>&rsaquo;</span>
        </Fragment>
      ))}
      <Title title={title} flexGrow={flexGrow} />
    </div>
  )
}

const Shortcut = ({ shortcut }: { shortcut: string[] }) => {
  if (shortcut.length > 1) {
    return (
      <div className='flex items-center gap-1.5'>
        {shortcut.map(sc => (
          <kbd
            key={sc}
            className='kbd flex items-center justify-center is-6 bs-6 rounded-sm text-sm bg-[rgba(0,0,0,0.1)]'
          >
            {sc}
          </kbd>
        ))}
      </div>
    )
  }

  return (
    <kbd className='kbd flex items-center justify-center is-6 bs-6 rounded-sm text-sm bg-[rgba(0,0,0,0.1)]'>
      {shortcut[0]}
    </kbd>
  )
}

const EnterComponent = ({ active }: { active: boolean }) => {
  return (
    active && (
      <div className='flex'>
        <SubdirectoryLeft fontSize='1.25rem' />
      </div>
    )
  )
}

const SearchResultItem = forwardRef(
  (
    {
      action,
      active,
      currentRootActionId
    }: {
      action: ActionImpl
      active: boolean
      currentRootActionId: ActionId | undefined | null
    },
    ref: Ref<HTMLDivElement>
  ) => {
    const ancestors = useMemo(() => {
      if (!currentRootActionId) return action.ancestors

      const index = action.ancestors.findIndex(ancestor => ancestor.id === currentRootActionId)

      return action.ancestors.slice(index + 1)
    }, [action.ancestors, currentRootActionId])

    return (
      <div
        ref={ref}
        className={classnames('flex items-center justify-between gap-4 relative plb-2.5 pli-6 cursor-pointer', {
          ['bg-[rgba(0,0,0,0.05)]']: active
        })}
      >
        <div className='flex items-center grow gap-2 text-sm'>
          {action.icon && <div className='flex text-xl'>{action.icon}</div>}
          {action.name &&
            (action.subtitle ? (
              <div className='flex flex-col grow gap-0.5'>
                <TitleWithAncestors title={action.name} ancestors={ancestors} />
                {action.subtitle && <span className='text-xs'>{action.subtitle}</span>}
              </div>
            ) : (
              <TitleWithAncestors flexGrow title={action.name} ancestors={ancestors} />
            ))}
        </div>
        <EnterComponent active={active} />
        {action.shortcut?.length && <Shortcut shortcut={action.shortcut} />}
      </div>
    )
  }
)

export default SearchResultItem
