import { Route } from 'react-router-dom';
import './App.sass';

import { Login, Register, PassReset, EmailConfirmation } from './pages';

function App() {
  return (
    <main className='container'>
      <Route exact path='/' component={Login} />
      <Route exact path='/reg' component={Register} />
      <Route exact path='/reset' component={PassReset} />
      <Route exact path='/confirmation' component={EmailConfirmation} />
    </main>
  );
}

export default App;
