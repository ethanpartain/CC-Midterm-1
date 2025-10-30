import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import awsmobile from './aws-exports.js'

Amplify.configure(awsmobile)

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>My Profile</h1>
          <p>Email: {user?.signInDetails?.loginId || user?.attributes?.email}</p>
          <button onClick={signOut} style={{ 
            padding: '0.75rem 1.5rem', 
            backgroundColor: '#047d95', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}>
            Sign Out
          </button>
        </div>
      )}
    </Authenticator>
  )
}

export default App
