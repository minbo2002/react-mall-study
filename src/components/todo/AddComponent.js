import { useState } from 'react';
import { postAdd } from '../../api/todoApi';
import ResultModal from '../common/ResultModal';

const initState = {
    title: '',
    content: '',
    writer: '',
    dueDate: ''
}

const AddComponent = () => {
    
    const [todo, setTodo] = useState({...initState});
    const [result, setResult] = useState(null);  // 결과 상태
    
    const handleChangeTodo = (e) => {
        todo[e.target.name] = e.target.value;
        setTodo({ ...todo });
    }

    const handleClickAdd = () => {
        postAdd(todo)
            .then(result => {
                console.log(result);
                setResult(result.body.id);  // 결과 데이터 반영
                setTodo({ ...initState });  // 초기화
            })
            .catch(e => {
                console.error("Error adding todo:", e);
            });
    }

    const closeModal = () => {
        setResult(null);
    }
    
    return (
        <div className="border-2 border-sky-200 mt-10 m-2 p-4">
            {result
                ?
                <ResultModal title={'Add Result'} content={`New ${result} Added`} callbackFn={closeModal} />
                :
                <></>
            } 

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold"> Title </div>
                    <input className="w-4/5 p-6 rouded-r border border-solid border-neutral-500 shadow-md"
                        name="title"
                        type={'text'}
                        value={todo.title}
                        onChange={handleChangeTodo}>
                    </input>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold"> Content </div>
                    <input className="w-4/5 p-6 rouded-r border border-solid border-neutral-500 shadow-md"
                        name="content"
                        type={'text'}
                        value={todo.content}
                        onChange={handleChangeTodo}>
                    </input>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold"> Writer </div>
                    <input className="w-4/5 p-6 rouded-r border border-solid border-neutral-500 shadow-md"
                        name="writer"
                        type={'text'}
                        value={todo.writer}
                        onChange={handleChangeTodo}>
                    </input>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <div className="w-1/5 p-6 text-right font-bold"> Duedate </div>
                    <input className="w-4/5 p-6 rouded-r border border-solid border-neutral-500 shadow-md"
                        name="dueDate"
                        type={'date'}
                        value={todo.dueDate}
                        onChange={handleChangeTodo}>
                    </input>
                </div>
            </div>

            <div className="flex justify-end">
                <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
                    <button type="button" className="rounded p-4 w-36 bg-blue-500 text-xl text-white" onClick={handleClickAdd}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddComponent;