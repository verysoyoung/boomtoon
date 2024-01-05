'use client'

import { useServerInsertedHTML } from 'next/navigation'
import { ReactNode, useState } from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

const Registry = ({ children }: { children: ReactNode }) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof document !== 'undefined') {
    return <>{children}</>
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}

export default Registry
