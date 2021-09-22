import React from 'react';
import { FETCH_TODOS_QUERY } from '../util/graphql';
import { useQuery, useMutation } from '@apollo/react-hooks';
import TodoTable from '../components/TodoTable';
import { AuthContext } from '../context/auth';
import { Grid } from 'semantic-ui-react';
import TodoForm from '../components/TodoForm';
import { useForm } from '../util/hooks';

function Home() {
    const { loading, data } = useQuery(FETCH_TODOS_QUERY);
    const [todoDataList, setTodoDataList] = React.useState([]);
    const { user } = React.useContext(AuthContext);
    let todoListData = [];
    if (data) {
        const { getTodoList } = data;
        todoListData = getTodoList;
    }

    React.useEffect(() => {
        if (todoListData.length > 0)
            setTodoDataList(todoListData);
    }, [todoListData])

    function newTodoAdded(todo) {
        const oldTodoDataList = todoDataList;
        oldTodoDataList.push(todo);
        setTodoDataList([...oldTodoDataList]);
    }

    function updateTodoList(todo) {
        const oldTodoDataList = todoDataList;
        oldTodoDataList = oldTodoDataList.map(x => {
            if (x.id == todo.id) {
                x = todo;
            }
            return x;
        });
        setTodoDataList([...oldTodoDataList]);
    }

    return (
        <div>
            <h1>Home Page</h1>
            {user && (
                <Grid.Column>
                    <TodoForm addNewTodo={newTodoAdded} />
                </Grid.Column>
            )}
            {loading ? <h1>Loadings Todos</h1> : todoDataList.length > 0 && <TodoTable data={todoDataList} updateTodoList={updateTodoList} />}
            <span>{todoDataList && todoDataList.length}</span>
        </div>
    );
}

export default Home;