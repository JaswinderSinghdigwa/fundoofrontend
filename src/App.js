import './App.css';
import SignUp from './Pages/SignUp/SignUp';
import Signin from './Pages/Signing/Signin';
import RouterDom from './Router/router';
import Example from './Examle';


function App() {
  return (
    <div>
      <RouterDom />
      <Example />
      {/* <Signin/>
      <SignUp /> */}
        </div>
  );
}

export default App;
