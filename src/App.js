import Home from "./pages/Home";
import './App.css';
import './index.css';
import Nav  from "./components/nav";
import List  from "./components/List";
import ListPage from "./pages/ListPage";
import Test from "./pages/Test";
import  Sidebar  from "./components/SideBar";
import { Provider } from "react-redux";
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <ListPage />
    </Provider>
  );
}

export default App;
