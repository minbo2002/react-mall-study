import { useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

const getNum = (param, defaultValue) => {  // 공통으로 사용하는 코드는 커스텀 hook으로 만들어서 사용
    if(!param) {
        return defaultValue;
    }
    return parseInt(param);
}

const useCustomMove = () => {
    const navigate = useNavigate();  // useNavigate()는 동적으로 데이터를 처리해서 이동할 때 사용
    const [queryParams] = useSearchParams();  // useSearchParams() 함수는 URL 경로에 있는 '?' 이후의 쿼리스트링을 추출할 때 사용
    const [refresh, setRefresh] = useState(false);
    
    const page = getNum(queryParams.get("page"), 1);
    const size = getNum(queryParams.get("size"), 10);
    
    const queryDefault = createSearchParams({ page, size }).toString();  // createSearchParams() 함수는  ?page=1&size=10  ?page=3=&size=20 등의 형식으로 만들어준다
    
    const moveToList = (pageParam) => {
        let queryStr = "";

        if (pageParam) {
            const pageNum = getNum(pageParam.page, 1);
            const sizeNum = getNum(pageParam.size, 10);
            queryStr = createSearchParams({
                page: pageNum,
                size: sizeNum
            }).toString();
        } else {
            queryStr = queryDefault;
        }
        navigate({
            pathname: `../list`,
            search: queryStr
        })

        setRefresh(!refresh);  // 동일 페이지 클릭시에도 서버를 호출하기 위해서, 컴포넌트 내부에 매번 변하는 상태(state)를 만들어 주기 위해 true, false를 번갈아가며 사용
    }

    const moveToRead = (num) => {
        console.log(queryDefault);

        navigate({
            pathname: `../read/${num}`,
            search: queryDefault  // 상세보기시 기존 queryString 유지를 위해
        })
    }

    const moveToModify = (num) => {
        navigate({
            pathname: `../modify/${num}`,
            search: queryDefault  // 수정시 기존 queryString 유지를 위해
        })
    }
    
    return { moveToList, moveToRead, moveToModify, page, size, refresh };
}

export default useCustomMove;