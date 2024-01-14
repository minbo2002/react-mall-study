import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

function ModifyPage(props) {
    
    const navigate = useNavigate();
    const {tno} = useParams();
    
    const moveToRead = (tno) => {
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
                    <button onClick={() => moveToRead(tno)}> moveToRead </button>
                    <button onClick={moveToList}> moveToList </button>
                </div>
            </div> 
        </div>
    );
}

export default ModifyPage;