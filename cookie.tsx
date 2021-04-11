import React from 'react'
import { useState, useEffect } from 'react'
import { Text, Button, Flex } from 'theme-ui'

export const Cookie = (): JSX.Element | null => {
  const [visible, setVisible] = useState<boolean>(false)

  const handleAcceptance = () => {
    localStorage.setItem('DFX-cookie-banner', 'visible')
    setVisible(false)
  }

  useEffect(() => {
    const hasSeenCookie = localStorage.getItem('DFX-cookie-banner')
    if (!hasSeenCookie) {
      setVisible(true)
    }
  }, [])

  if (!visible) {
    return null
  }
  return (
    <Flex
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        px: 4,
        py: 4,
        bg: 'secondary',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        as="div"
        sx={{ alignSelf: 'center', fontSize: 5, color: 'white', mr: 4 }}
      >
        This website uses cookies to enhance the user experience
      </Text>
      <Button type="button" onClick={handleAcceptance}>
        I understand
      </Button>
    </Flex>
  )
}
