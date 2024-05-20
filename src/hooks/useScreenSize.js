import { useState, useEffect } from 'react'

// Retorna se o tamanho da tela é menor ou igual ao parâmetro isSmallScreenThreshold.

function useScreenSize(isSmallScreenThreshold) {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth <= isSmallScreenThreshold
  )

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= isSmallScreenThreshold)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isSmallScreenThreshold])

  return isSmallScreen
}

export default useScreenSize
