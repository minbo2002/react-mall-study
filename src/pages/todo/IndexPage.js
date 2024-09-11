import React, { useCallback } from 'react';
import BasicLayout from '../../layouts/BasicLayout';
import {Outlet, useNavigate} from 'react-router-dom';

// 목록페이지와 등록페이지로 이동할 수 있는 링크 제공용 페이지
function IndexPage(props) {
    
    const navigate = useNavigate();  // useNavigate()는 동적으로 데이터를 처리해서 이동할 때 사용

    const handleClickList = useCallback(() => {
        navigate({pathname:"list"})
    }, [])

    const handleClickAdd = useCallback(() => {
        navigate({pathname:"add"})
    }, [])
    
    return (
        <BasicLayout>
          <div className="w-full flex m-2 p-2 ">
            <div className="text-xl m-1 p-2  w-20 font-extrabold text-center underline" onClick={handleClickList}> LIST </div>
    
            <div className="text-xl m-1 p-2 w-20 font-extrabold  text-center underline" onClick={handleClickAdd}> ADD </div>
          </div>
            
          <div className="flex flex-wrap w-full">
                <Outlet/>
          </div>
        </BasicLayout>
    );
}

export default IndexPage;