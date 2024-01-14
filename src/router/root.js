import { Suspense, lazy } from 'react';
const { createBrowserRouter } = require("react-router-dom");

const Loading = <div className={'bg-red-700'}>Loading....</div>

const Main = lazy(() => import('../pages/MainPage'))
const About = lazy(() => import('../pages/AboutPage'))

const root = createBrowserRouter([  // reactRouter에서는 a태그말고 link를 이용해서 이동해야한다
    {
        path: "",
        element: <Suspense fallback={Loading}> <Main /> </Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}> <About /> </Suspense>
    }
])

export default root;