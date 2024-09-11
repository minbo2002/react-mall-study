import { Suspense, lazy } from 'react';
import todoRouter from './todoRouter';
const { createBrowserRouter } = require("react-router-dom");

const Loading = <div className={'bg-red-700'}>Loading....</div>  // React에서는 class 속성대신 className 속성을 사용

const Main = lazy(() => import('../pages/MainPage'))
const About = lazy(() => import('../pages/AboutPage'))
const TodoIndedx = lazy(() => import('../pages/todo/IndexPage'))

const root = createBrowserRouter([  // 어떤 경로에 어떤 컴포넌트를 보여줄 것인지를 결정하는 용도로 사용.
    {
        path: "",
        element: <Suspense fallback={Loading}> <Main/> </Suspense>  // <Suspense>와 <Lazy>로 필요한 순간까지 컴포넌트를 메모리상으로 올리지 않도록 분할 로딩을 한다.
    },                                                              // => '코드 분할'    
    {
        path: "about",
        element: <Suspense fallback={Loading}> <About/> </Suspense>  // <a> 태그는 브라우저 주소창을 변경하면서 application 자체의 로딩부터 새로 시작되므로
    },                                                               // React-Router에서는 <a>태그 사용하지말고 <Link>태그를 사용.
    {
        path: "todo",
        element: <Suspense fallback={Loading}> <TodoIndedx /> </Suspense>,
        children: todoRouter()
    }
])

export default root;