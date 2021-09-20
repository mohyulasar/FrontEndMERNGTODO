import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import TodoTable from '../components/TodoTable';

function Home() {
    const { loading, data } = useQuery(FETCH_TODOS_QUERY);
    let todoListData = [];
    if (data) {
        const { getTodoList } = data;
        console.log(getTodoList);
        todoListData = getTodoList;
    }
    return (
        <div>
            <h1>Home Page</h1>
            {loading ? <h1>Loadings Todos</h1> : todoListData.length > 0 && <TodoTable data={todoListData} />}
        </div>
    );
}

const FETCH_TODOS_QUERY = gql`
{
    getTodoList{
    id body createdAt username isCompleted
}
}
`
export default Home;