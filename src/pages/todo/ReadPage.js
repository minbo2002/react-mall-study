import React from 'react';
import {useParams} from 'react-router-dom';
import ReadComponent from '../../components/todo/ReadComponent';

function ReadPage(props) { // todo/IndexPage.js의 <Outlet/> 부분에 렌더링된다

    const {tno} = useParams();       // useParams()는 URL 경로에 있는 변수를 추출할 때 사용

    return (
      <div className="font-extrabold w-full bg-white mt-6">
        <div className="text-2xl">
          Todo Read Page Component {tno}
        </div>

        <ReadComponent tno={tno}></ReadComponent>
      </div>
    );
}

export default ReadPage;