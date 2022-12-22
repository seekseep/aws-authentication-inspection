import { Authenticator } from '@aws-amplify/ui-react'
import Navigation from './Navigation'
import ViewAuthState from './ViewAuthState'

export default function App () {
  return (
    <>
      <Authenticator>
        <Navigation />
        <ViewAuthState />
      </Authenticator>
    </>
  )
}
