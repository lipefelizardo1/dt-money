import { NavigationContainer } from '@react-navigation/native'
import { useState } from 'react'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'
import { SystemBars } from 'react-native-edge-to-edge'
import { useAuthContext } from '@/context/auth.context'
import { Loading } from '@/screens/Loading'

const NavigationRoutes = () => {
  const [loading, setLoading] = useState(true)
  const { token, user } = useAuthContext()

  const renderRoutes = () => {
    if (loading) {
      return <Loading setLoading={setLoading} />
    }

    if (!user || !token) {
      return <PublicRoutes />
    }

    return <PrivateRoutes />
  }

  return (
    <NavigationContainer>
      <SystemBars style="light" />
      {renderRoutes()}
    </NavigationContainer>
  )
}

export default NavigationRoutes