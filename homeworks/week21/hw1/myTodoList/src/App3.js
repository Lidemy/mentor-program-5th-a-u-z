import styled from 'styled-components'; // 引入一個可以寫 css 的 package
import React, { useState, useRef } from 'react'; // 要引入才可以用 state, ref
import {
  SingleTodoWrapper,
  Background,
  Title,
  Wrapper,
  Input,
  TodoContent,
  ButtonWrapper,
  Button,
} from './components';
// 底下就是用 styled 寫的 css ，要 .創造的標籤
// 然後就可以打一些 css, scss 的寫法

function Navbar({
  content,
  handleContentChange,
  handleAdd,
  handleShow,
  whichTabActive,
}) {
  return (
    <div style={{ marginBottom: '45px' }}>
      <Input
        type="text"
        value={content}
        onChange={handleContentChange}
        placeholder="Type something   (//●⁰౪⁰●)//"
        size="25"
      />
      <Button onClick={handleAdd}>add todo</Button>
      <Button
        whichTabActive={whichTabActive.current.showAll}
        onClick={() => handleShow('show all')}
      >
        show all
      </Button>
      <Button
        whichTabActive={whichTabActive.current.showDone}
        onClick={() => handleShow('show done')}
      >
        show done
      </Button>
      <Button
        whichTabActive={whichTabActive.current.showUndo}
        onClick={() => handleShow('show undo')}
      >
        show undo
      </Button>
    </div>
  );
}
function SingleTodo({
  todo,
  handleToggle,
  handleEditClick,
  handleDelete,
  handleEditChange,
  handleEditConfirm,
}) {
  return (
    <SingleTodoWrapper id={todo.id}>
      {todo.isEditing ? (
        <Input
          type="text"
          defaultValue={todo.content}
          size="30"
          onChange={handleEditChange}
        />
      ) : (
        <TodoContent isDone={todo.isDone}>{todo.content}</TodoContent>
      )}
      <ButtonWrapper>
        {todo.isEditing ? null : (
          <Button onClick={() => handleToggle(todo.id)}>
            {todo.isDone ? 'undo' : 'done'}
          </Button>
        )}
        {todo.isEditing ? (
          <Button onClick={() => handleEditClick(todo.id)}>Cancel</Button>
        ) : (
          <Button onClick={() => handleEditClick(todo.id)}>Edit</Button>
        )}
        {todo.isEditing ? (
          <Button onClick={() => handleEditConfirm(todo.id)}>Confirm</Button>
        ) : (
          <Button onClick={() => handleDelete(todo.id)}>Delete</Button>
        )}
      </ButtonWrapper>
    </SingleTodoWrapper>
  );
}
function App3() {
  const [content, setContent] = useState('');
  const id = useRef(3);
  const whichTabActive = useRef({
    showAll: true,
    showDone: false,
    showUndo: false,
  });
  const [editContent, setEditContent] = useState('');
  const [showType, setShowType] = useState('all');
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: '123',
      isDone: true,
      isEditing: false,
    },
    {
      id: 2,
      content: '456',
      isDone: false,
      isEditing: false,
    },
  ]);
  function handleEditChange(e) {
    setEditContent(e.target.value);
  }
  function handleContentChange(e) {
    setContent(e.target.value);
  }
  function handleAdd() {
    if (content === '') return alert('Please type something in the input box');
    setTodos([
      {
        id: id.current,
        content,
        isDone: false,
        isEditing: false,
      },
      ...todos,
    ]);
    id.current++;
    setContent('');
  }
  function handleDelete(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  function handleEditConfirm(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id !== id) {
          return todo;
        } else {
          return {
            ...todo,
            content: editContent,
            isEditing: !todo.isEditing,
          };
        }
      })
    );
  }
  function handleEditClick(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id !== id) {
          return todo;
        } else {
          return {
            ...todo,
            isEditing: !todo.isEditing,
          };
        }
      })
    );
  }
  function handleToggle(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id !== id) {
          return todo;
        } else {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
      })
    );
  }
  function handleShow(text) {
    if (text === 'show all') {
      whichTabActive.current = {
        showAll: true,
        showDone: false,
        showUndo: false,
      };
      return setShowType('all');
    }
    if (text === 'show undo') {
      whichTabActive.current = {
        showAll: false,
        showDone: false,
        showUndo: true,
      };
      return setShowType('undo');
    }
    if (text === 'show done') {
      whichTabActive.current = {
        showAll: false,
        showDone: true,
        showUndo: false,
      };
      return setShowType('done');
    }
  }
  return (
    <Background>
      <Wrapper>
        <Title>Todo List</Title>
        <Navbar
          content={content}
          handleContentChange={handleContentChange}
          handleAdd={handleAdd}
          handleShow={handleShow}
          whichTabActive={whichTabActive}
        />
        {todos
          .filter(todo => {
            if (showType === 'undo') return todo.isDone === false;
            if (showType === 'done') return todo.isDone === true;
            if (showType === 'all') return true;
          })
          .map(todo => (
            <SingleTodo
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
              handleEditClick={handleEditClick}
              handleEditChange={handleEditChange}
              handleEditConfirm={handleEditConfirm}
            ></SingleTodo>
          ))}
      </Wrapper>
    </Background>
  );
}
export default App3;
