import { useMemo } from 'react'
import { useAuthenticator, View } from '@aws-amplify/ui-react'

export default function ViewAuthState () {
  const { user } = useAuthenticator(context => [context.authStatus])

  const message = useMemo(() => {
    return JSON.stringify(user, null, 2)
  }, [user])

  return (
    <View as="pre" padding="1rem" margin="1rem" backgroundColor="#EEE" overflow="auto">
      <code>
        {message}
      </code>
    </View>
  )
}
