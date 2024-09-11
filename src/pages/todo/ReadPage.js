import React, { useCallback } from 'react';
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';

function ReadPage(props) { // todo/IndexPage.js의 <Outlet/> 부분에 렌더링된다

    const navigate = useNavigate();  // useNavigate()는 동적으로 데이터를 처리해서 이동할 때 사용
    const {tno} = useParams();       // useParams()는 URL 경로에 있는 변수를 추출할 때 사용

    const [queryParams] = useSearchParams();   // useSearchParams() 함수는 URL 경로에 있는 '?' 이후의 쿼리스트링을 추출할 때 사용

    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

    const queryStr = createSearchParams({ page: page, size: size }).toString();  // createSearchParams() 함수는  ?page=1&size=10  ?page=3=&size=20 등의 형식으로 만들어준다

    const moveToModify = useCallback((tno) => {
        navigate({
            pathname : `/todo/modify/${tno}`,   // 변수나 표현식을 사용하려면 백틱(` `)으로 감싸야 한다
            search : queryStr                   // pathname 뒤에 ? 형식으로 page와 size값을 붙여서 다닌다
        })
    }, [tno, page, size])

    const moveToList = useCallback(() => {
        navigate({
            pathname : `/todo/list`,  
            search : queryStr          // pathname 뒤에 ? 형식으로 page와 size값을 붙여서 다닌다
        })
    }, [page, size])

    return (
      <div className="text-3xl font-extrabold">
          Todo Read Page Component {tno}

        <div>
          <button onClick={() => moveToModify(tno)}> Test modify </button> <br/>
          <button onClick={moveToList}> Test List </button>
        </div>
      </div>
    );
}

export default ReadPage;