import React from 'react';
import { createSearchParams, useNavigate, useParams, useSearchParams } from 'react-router-dom';

function ReadPage(props) { // todo/IndexPage.js의 <Outlet/> 부분에 렌더링된다

    const navigate = useNavigate();
    const {tno} = useParams();

    const [queryParams] = useSearchParams();

    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

    const queryStr = createSearchParams({ page: page, size: size }).toString();  // ?page=1&size=10  ?page=3=&size=20 등의 형식으로 만들어준다

    const moveToModify = (tno) => {
        navigate({
            pathname : `/todo/modify/${tno}`,   // 변수나 표현식을 사용하려면 백틱(` `)으로 감싸야 한다
            search : queryStr                   // pathname 뒤에 ? 형식으로 page와 size값을 붙여서 다닌다
        })
    }

    const moveToList = () => {
        navigate({
            pathname : `/todo/list`,  
            search : queryStr          // pathname 뒤에 ? 형식으로 page와 size값을 붙여서 다닌다
        })
    }

    return (
        <div className={"text-3xl"}>
            Todo Read page {tno}

            <div>
                <button onClick={() => moveToModify(tno)}> Test modify </button>
                <button onClick={moveToList}> Test List </button>
            </div>
        </div>
    );
}

export default ReadPage;