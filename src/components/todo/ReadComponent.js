import { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";

const initState = {
    id: 0,
    title: '',
    content: '',
    writer: '',
    dueDate: '',
    complete: false
}

// useEffect()로 컴포넌트 내에 특정한 상황을 만족하는 경우에만 특정 동작을 실행시킬 수 있다.
const ReadComponent = ({ tno }) => {
    const [todo, setTodo] = useState(initState);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        getOne(tno).then(data => {
            console.log(data);
            if (data.body) {
                setTodo(data.body);
            } else if (data.message) {
                setError(data.message);
            }
        }).catch(error => {
            console.error("Error fetching todo:", error);
            setError("Failed to fetch todo data");
        });
    }, [tno]);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
      <div className="border-2 border-sky-200 mt-10 m-2 p-4">
        {makeDiv('TNO', todo.id)}
        {makeDiv('Writer', todo.writer)}    
        {makeDiv('Title', todo.title)}
        {makeDiv('Content', todo.content)}    
        {makeDiv('Due Date', todo.dueDate)}
        {makeDiv('Complete', todo.complete ? 'Completed' : 'Not Yet')}
      </div>
    )
}

const makeDiv = (title, value) => 
<div className="flex justify-center">
  <div className="relative mb-4 flex w-full flex-wrap items-stretch">
    <div className="w-1/5 p-6 text-right font-bold">
      {title}            
    </div>          
    <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
      {value}
    </div>
  </div>
</div>

export default ReadComponent;