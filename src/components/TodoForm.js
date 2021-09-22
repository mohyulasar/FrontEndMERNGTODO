import React from 'react';
import { Button, Form, Header, Modal } from 'semantic-ui-react';
import { useForm } from '../util/hooks';
import { useMutation } from '@apollo/react-hooks';
import { ADD_TODO_MUTATION } from '../util/graphql';

export default function TodoForm(props) {
    const { values, onChange, onSubmit } = useForm(addTodoCb, {
        body: '',
        isCompleted: false
    });

    const [createTodo, { error }] = useMutation(ADD_TODO_MUTATION, {
        variables: values,
        update(_, result) {
            console.log('myrtesult in addtodo mutation', result);
            const { data } = result;
            if (data && data.createTodo) {
                props.addNewTodo(data.createTodo);
            }
            values.body = '';
        }
    })

    function addTodoCb() {
        createTodo();
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Field>
                <Form.Input
                    placeholder="write todo"
                    name="body"
                    value={values.body}
                    onChange={onChange}
                />
            </Form.Field>
            <Button type="submit" color="teal">Add</Button>
        </Form>
    )
}
