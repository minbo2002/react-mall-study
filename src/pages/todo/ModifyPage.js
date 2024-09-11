import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

function ModifyPage(props) {
    
    const navigate = useNavigate();  // useNavigate()는 동적으로 데이터를 처리해서 이동할 때 사용
    const {tno} = useParams();       // useParams()는 URL 경로에 있는 변수를 추출할 때 사용
    
    const moveToRead = () => {
        navigate({pathname : `/todo/read/${tno}`})
    }

    const moveToList = () => {
        navigate({pathname : `/todo/list`})
    }

    return (
        <div>
          <div className="text-3xl font-extrabold"> 
                Todo Modify Page 
                
              <div>
                <button onClick={() => moveToRead(tno)}> moveToRead </button> <br/>
                <button onClick={moveToList}> moveToList </button>
              </div>
          </div> 
        </div>
    );
}

export default ModifyPage;