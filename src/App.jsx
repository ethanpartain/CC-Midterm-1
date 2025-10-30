import { useState } from 'react'
import '@aws-amplify/ui-react/styles.css'
import './App.css'

function App() {
  const [view, setView] = useState('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')

  const handleSignUp = (e) => {
    e.preventDefault()
    setView('verify')
  }

  const handleVerify = (e) => {
    e.preventDefault()
    setView('profile')
  }

  if (view === 'profile') {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>My Profile</h1>
        <p>Email: {email}</p>
        <button onClick={() => setView('signin')}>Sign Out</button>
      </div>
    )
  }

  if (view === 'verify') {
    return (
      <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '2rem', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2>We Emailed You</h2>
        <p>Your code is on the way. To log in, enter the code we emailed to {email}. It may take a minute to arrive.</p>
        <form onSubmit={handleVerify}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Confirmation Code</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter your code"
              style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#047d95', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Confirm
          </button>
        </form>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '2rem', border: '1px solid #ddd', borderRadius: '8px' }}>
      <div style={{ display: 'flex', borderBottom: '2px solid #ddd', marginBottom: '1.5rem' }}>
        <button
          onClick={() => setView('signin')}
          style={{
            flex: 1,
            padding: '1rem',
            background: 'none',
            border: 'none',
            borderBottom: view === 'signin' ? '3px solid #047d95' : 'none',
            color: view === 'signin' ? '#047d95' : '#666',
            cursor: 'pointer',
            fontWeight: view === 'signin' ? 'bold' : 'normal'
          }}
        >
          Sign In
        </button>
        <button
          onClick={() => setView('signup')}
          style={{
            flex: 1,
            padding: '1rem',
            background: 'none',
            border: 'none',
            borderBottom: view === 'signup' ? '3px solid #047d95' : 'none',
            color: view === 'signup' ? '#047d95' : '#666',
            cursor: 'pointer',
            fontWeight: view === 'signup' ? 'bold' : 'normal'
          }}
        >
          Create Account
        </button>
      </div>

      <form onSubmit={view === 'signup' ? handleSignUp : (e) => { e.preventDefault(); setView('profile') }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            required
            style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            required
            style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
          />
        </div>

        {view === 'signup' && (
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Confirm Password</label>
            <input
              type="password"
              placeholder="Please confirm your Password"
              required
              style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
            />
          </div>
        )}

        <button type="submit" style={{ width: '100%', padding: '0.75rem', backgroundColor: '#047d95', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem' }}>
          {view === 'signup' ? 'Create Account' : 'Sign In'}
        </button>

        {view === 'signin' && (
          <a href="#" style={{ display: 'block', textAlign: 'center', marginTop: '1rem', color: '#047d95', textDecoration: 'none' }}>
            Forgot your password?
          </a>
        )}
      </form>
    </div>
  )
}

export default App
