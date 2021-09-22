import React from 'react'
import { Table, Icon, Button, Checkbox } from 'semantic-ui-react'
import { UPDATE_TODO_MUTATION } from '../util/graphql';
import { useQuery, useMutation } from '@apollo/react-hooks';


function TodoTable(props) {

    const [oldTodo, setOldTodo] = React.useState({
        id: '',
        username: '',
        isCompleted: '',
        createdAt: '',
        body: '',
    });

    React.useEffect(() => {
        updateTodoCb();
    }, [oldTodo]);

    function onChange(todo) {
        const clonedTodo = JSON.parse(JSON.stringify(todo));
        clonedTodo.isCompleted = todo.isCompleted == true || todo.isCompleted == "true" ? "false" : "true";
        setOldTodo(clonedTodo);
    }

    function sendUpdateRequest() {
        updateTodoCb();
    }

    const [updateTodo, { loading }] = useMutation(UPDATE_TODO_MUTATION, {
        update(
            _, result
        ) {
            const { data } = result;
            if (data && data.updateTodo) {
                props.updateTodoList(data.updateTodo)
            }
        },
        onError(err) {
            // setErrors(err?.graphQLErrors[0]?.extensions.exception.errors);
        },
        variables: oldTodo
    });

    function updateTodoCb() {
        updateTodo();
    }

    return (
        <Table celled striped>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan='3'>Todo items List</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            {props.data.map(item => <Table.Body key={item.id}>
                <Table.Row>
                    <Table.Cell collapsing>
                        {item.id}
                    </Table.Cell>
                    <Table.Cell>{item.body}</Table.Cell>
                    {/* <Table.Cell collapsing textAlign='right'>
                        <Button onClick={() => sendUpdateRequest()}>Submit</Button>
                    </Table.Cell> */}
                    <Table.Cell collapsing textAlign='right'>
                        <Checkbox
                            toggle
                            name='isCompleted'
                            value={item.id}
                            checked={item.isCompleted === "true"}
                            onChange={() => onChange(item)}
                        />
                        {/* {item.isCompleted} */}
                    </Table.Cell>
                </Table.Row>
            </Table.Body>)}
            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell colSpan='4'>
                        {/* <Button
                        floated='right'
                        icon
                        labelPosition='left'
                        primary
                        size='small'
                        onClick={()=>props.setOpen(true)}
                    >
                        <Icon name='user' /> Add Todo
                    </Button> */}

                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    )
}

export default TodoTable
