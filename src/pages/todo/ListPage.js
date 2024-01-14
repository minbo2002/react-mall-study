import React from 'react';

function ListPage(props) {  // todo/IndexPage.js의 <Outlet/> 부분에 렌더링된다
    return (
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
                Todo List Page Component
            </div> 
        </div>
    );
}

export default ListPage;