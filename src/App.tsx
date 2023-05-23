import './App.css';
import {RouterProvider} from "react-router-dom";
import {router} from './pages/routesList'
import {FC, ReactElement} from "react";

const App: FC = (): ReactElement => (
    <RouterProvider router={router} />
);

export default App;