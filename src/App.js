import { Provider } from 'react-redux';
import store from './redux/store';
import NewCakeContainer from './components/NewCakeContainer';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
// import HooksCakeContainer from './components/HooksCakeContainer';


function App() {
  return (
   <>
   
   <Provider store={store}>
    <div>
    <CakeContainer></CakeContainer>
    <HooksCakeContainer></HooksCakeContainer>
    <IcecreamContainer></IcecreamContainer>
    <NewCakeContainer></NewCakeContainer>
    <h1>ASDFGH</h1>
    </div>
   </Provider>
   </>
  );
}

export default App;
