import { ReactNode } from "react";
// import { RouterProvider } from "react-router-dom";
import "./css/global.module.scss";
type AppProps = {
  children: ReactNode;
};
// import { routes } from "./router";
function App({ children }: AppProps) {
  return (
    <>
      <main>{children }</main>
    </>
  );
}

export default App;
