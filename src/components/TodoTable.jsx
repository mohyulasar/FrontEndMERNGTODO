import React from 'react'
import { Table, Icon, Button, Checkbox } from 'semantic-ui-react'

const handleChange = (e, {value}) => {
    console.log(value)

}
const TodoTable = (props) => (
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
                <Table.Cell collapsing textAlign='right'>
                    <Checkbox
                        toggle
                        name='isCompleted'
                        value={item.id}
                        checked={item.isCompleted === "true"}
                        onChange={handleChange}
                    />
                    {/* {item.isCompleted} */}
                </Table.Cell>
            </Table.Row>
        </Table.Body>)}
        <Table.Footer fullWidth>
            <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell colSpan='4'>
                    <Button
                        floated='right'
                        icon
                        labelPosition='left'
                        primary
                        size='small'
                    >
                        <Icon name='user' /> Add Todo
                    </Button>

                </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
    </Table>
)

export default TodoTable
