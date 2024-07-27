import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ id, Element, path }) => (
            <Route element={<Element />} key={id} path={path} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
