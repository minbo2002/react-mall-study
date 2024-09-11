import { RouterProvider } from "react-router-dom";
import root from "./router/root";  // root.js 통해서 경로에 맞는 컴포넌트 보여준다

function App() {
  return (
    <RouterProvider router={root} />
  );
}

export default App;
