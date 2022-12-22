import { Heading, Divider, View, useAuthenticator, Button } from '@aws-amplify/ui-react'
import { BiUserCircle } from 'react-icons/bi'

export default function Navigation () {
  const { authStatus, user, signOut } = useAuthenticator(context => [context.authStatus])

  return (
    <>
      <View padding="0.5rem" display="flex" alignItems="center">
        <Heading level={4} grow={1}>AWS Authentication Inspection</Heading>
        {authStatus === 'authenticated' && (
          <View display="flex" gap="1rem" alignItems="center">
            <View display="flex" gap="0.5rem" alignItems="center">
              <BiUserCircle size={24} />
              {user.username}
            </View>
            <Button onClick={signOut}>Sign Out</Button>
          </View>
        )}
      </View>
      <Divider />
    </>
  )
}
