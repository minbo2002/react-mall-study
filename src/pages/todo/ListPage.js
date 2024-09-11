import React from 'react';
import { useSearchParams } from 'react-router-dom';

function ListPage(props) {  // todo/IndexPage.js의 <Outlet/> 부분에 렌더링된다
    
    const [queryParams] = useSearchParams()  // useSearchParams()는 URL 경로에 있는 '?' 이후의 쿼리스트링을 추출할 때 사용

    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10


    
    return (
      <div className="p-4 w-full bg-white">
        <div className="text-3xl font-extrabold">
            Todo List Page Component. page:{page} --- size:{size}
        </div> 
      </div>
    );
}

export default ListPage;