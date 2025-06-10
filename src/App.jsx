
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Introduction from "./pages/Introduction"
import Html from "./pages/Html"
import Css from "./pages/Css";
import Bootstrap from "./pages/Bootstrap";
import Tailwind from "./pages/Tailwind"
import Javascript from "./pages/Javascript"
import ReactJs from "./pages/ReactJs"
import NodeJs from "./pages/NodeJs"
import ExpressJs from "./pages/ExpressJs"
import Typescript from "./pages/Typescript"
import NextJs from "./pages/NextJs"
import Firebase from "./pages/Firebase"
import Supabase from "./pages/Supabase"

const App = () => {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Introduction />} />
          <Route path="/html" element={<Html />} />
          <Route path="/css" element={<Css />} />
          <Route path="/bootstrap" element={<Bootstrap />} />
          <Route path="/tailwind" element={<Tailwind />} />
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/reactjs" element={<ReactJs />} />
          <Route path="/nodejs" element={<NodeJs />} />
          <Route path="/expressjs" element={<ExpressJs />} />
          <Route path="/typescript" element={<Typescript />} />
          <Route path="/nextjs" element={<NextJs />} />
          <Route path="/firebase" element={<Firebase />} />
          <Route path="/supabase" element={<Supabase />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
