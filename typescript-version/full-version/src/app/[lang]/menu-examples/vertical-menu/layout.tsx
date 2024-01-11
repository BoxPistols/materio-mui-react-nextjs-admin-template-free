// Type Imports
import type { ChildrenType } from '@menu/types'

// Component Imports
import Providers from '@components/Providers'

const Layout = async ({ children }: ChildrenType) => {
  return <Providers direction='ltr'>{children}</Providers>
}

export default Layout
