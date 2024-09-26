import { useEffect, useState } from "react";
import { getList } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove"; // 공통으로 사용하는 코드는 커스텀 hook으로 만들어서 사용
import PageComponent from "../common/PageComponent";

const initState = {
    dtoList: [],
    pageNumList: [],
    pageRequestDTO: null,
    prev: false,
    next: false,
    totalCount: 0,
    prevPage: 0,
    nextPage: 0,
    totalPage: 0,
    current: 0
}

const ListComponent = () => {
    const { page, size, moveToList } = useCustomMove();

    const [serverData, setServerData] = useState(initState);
    const [error, setError] = useState(null);

    useEffect(() => {
        getList({ page, size }).then(data => {   // data 내부에는 서버에서 커스텀한 body 및 message 있음
            console.log(data);
            if (data.body) {
                setServerData(data.body);
            } else if (data.message) {
                setError(data.message);
            }
        }).catch(error => {
            console.error("Error fetching todo list:", error);
            setError("Failed to fetch todo data");
        });
    }, [page, size]);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
      <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">   
            <div className="flex flex-wrap mx-auto justify-center p-6">
                {serverData.dtoList.map(todo =>
                <div key={todo.id} className="w-full min-w-[400px] p-2 m-2 rounded shadow-md">
                    <div className="flex">
                        <div className="font-extrabold text-2xl p-2 w-1/12">
                            {todo.id}
                        </div>
                        <div className="text-1xl m-1 p-2 w-8/12 font-extrabold">
                            {todo.title}
                        </div>
                        <div className="text-1xl m-1 p-2 w-2/12 font-medium">
                            {todo.dueDate}
                        </div>
                    </div>
                </div>
                )}    
            </div>

        <PageComponent serverData={serverData} movePage={moveToList}></PageComponent>
      </div>
    );
}

export default ListComponent;