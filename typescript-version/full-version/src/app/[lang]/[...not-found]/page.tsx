// Next Imports
import { cookies } from 'next/headers'

// Type Imports
import type { ChildrenType } from '@core/types'
import type { Locale } from '@configs/i18n'

// Component Imports
import Providers from '@components/Providers'
import NotFound from '@views/NotFound'

// Util Imports
import { getDirection } from '@/utils/get-direction'

export default async function Page({ params }: ChildrenType & { params: { lang: Locale } }) {
  const direction = getDirection(params.lang)
  const cookieStore = cookies()

  const settingsCookie = JSON.parse(cookieStore.get('settings')?.value || '{}')

  return (
    <Providers settingsCookie={settingsCookie} direction={direction}>
      <NotFound />
    </Providers>
  )
}
