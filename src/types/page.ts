// import type { NextPage } from 'next'

// // NOTE: We only re-export the NextPage to maintain consistency between CRA and Next.js

// export type Page = NextPage

import type { FC } from 'react'

export type Page<T = any> = T & FC