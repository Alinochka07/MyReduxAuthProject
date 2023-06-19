import { myRoutes } from "./MyRoutes";
import {Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      { myRoutes.map(route => {
            return <Route key={route.name} path={route.path} 
            exact element={route.element} isPrivate={route.isPrivate} name={route.name}/>
          })
      }
    </Routes>
  );
}

export default App;
