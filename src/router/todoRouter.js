import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Loading = <div className={'bg-red-700'}>Loading....</div>
const TodoList = lazy(() => import("../pages/todo/ListPage"))
const TodoRead = lazy(() => import("../pages/todo/ReadPage"))
const TodoAdd = lazy(() => import("../pages/todo/AddPage"))
const TodoModify = lazy(() => import("../pages/todo/ModifyPage"))

const todoRouter = () => {
    return [
        {
            path: "",
            element: <Navigate replace={true} to={"list"} />  // redirection
        },
        {
            path: "list",
            element: <Suspense fallback={Loading}> <TodoList/> </Suspense>
        },
        {
            path: "read/:tno",  // useParam를 활용한 PathVariable 처리
            element: <Suspense fallback={Loading}> <TodoRead/> </Suspense>
        },
        {
            path: "add",  // useParam를 활용한 PathVariable 처리
            element: <Suspense fallback={Loading}> <TodoAdd/> </Suspense>
        },
        {
            path: "modify/:tno",  // useParam를 활용한 PathVariable 처리
            element: <Suspense fallback={Loading}> <TodoModify/> </Suspense> 
        }
    ]
}

export default todoRouter;