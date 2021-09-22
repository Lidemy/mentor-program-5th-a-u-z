import styled from "styled-components"; // 引入一個可以寫 css 的 package
import React, { useState, useRef } from "react"; // 要引入才可以用 state, ref
// 底下就是用 styled 寫的 css ，要 .創造的標籤
// 然後就可以打一些 css, scss 的寫法
const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border: 1px solid black;
  & + & {
    margin-top: 20px;
  }
`;
const TodoContent = styled.div`
  color: rgba(2, 50, 80);
  ${(props) =>
    props.isDone &&
    `
    text-decoration: line-through
  `}
`;
const TodoButtonWrapper = styled.div``;

const Button = styled.button`
  padding: 40px;
  color: orange;
  &:hover {
    color: blue;
  }
`;
// 底下這是一個 component 那原本應該是傳入 props(properties)
// props 會自動蒐集我們元件使用到的參數，變成
// props:{
//   className: xx,
//   id: xx,
// }
// 所以使用的時候我們還需要 props.className ，這樣來使用
// 為了不要那麼麻煩，所以我們在傳入參數的時候多做一點事情，先解構 className 等等的參數出來
// 所以底下用到的時候就可以直接使用， className 就好
// 那為什麼底下還需要 className= { className } 呢？
// 那是因為在 return 的地方，要使用到 js 語法都要用 {} 包起來，所以這個不是解構，而就是上面解構出來的參數
// 那前面的 className 是什麼呢？那是會出現在檢查元件裡面的東西
function TodoItem({ className, todo, handleDeleteTodo, handleIsDoneToggle }) {
  return (
    <TodoItemWrapper className={className} id={todo.key}>
      <TodoContent isDone={todo.isDone}>{todo.content}</TodoContent>
      <TodoButtonWrapper>
        <Button
          onClick={() => {
            handleIsDoneToggle(todo.key);
          }}
        >
          {todo.isDone ? "未完成" : "已完成"}
          {/* {todo.isDone && '未完成'}
          {!todo.isDone && '已完成'} */}
        </Button>
        <Button onClick={() => handleDeleteTodo(todo.key)}>刪除</Button>
      </TodoButtonWrapper>
    </TodoItemWrapper>
  );
}
function App() {
  const key = useRef(3);
  // useState() 是 hook 的一種，() 中放的就是前面 [] 的第一個
  // 所以現在 todos 就是一個 []，然後第 0 項會是一個 object
  // 裡面有 key, content
  const [todos, setTodos] = useState([
    {
      key: 1,
      content: "abc",
      isDone: true,
    },
    {
      key: 2,
      content: "def",
      isDone: false,
    },
  ]);
  // 底下的 value 就是空值
  const [value, setValue] = useState("");

  function handleAddClick() {
    setTodos([
      {
        key: key.current,
        content: value,
        isDone: false,
      },
      ...todos,
    ]);
    setValue("");
    key.current++;
    console.log(key);
  }
  // 這是一個 function 用來處理刪除功能的
  function handleDeleteTodo(key) {
    setTodos(todos.filter((todo) => todo.key !== key));
    // 裡面再呼叫 setTodos 這是一個可以改變 todos 的 function
    // 所以可以 access todos 然後再配合 filter 把不要的 key 過濾掉
    // 當 state 改變時，就會觸發 re-render 就可以刷新頁面
  }
  function handleInputChange(e) {
    // 這個 function 是放在 onChange 後面，也就是如果 input 有任何改變
    // 就會觸發這個 function，當有任何改變時，透過 setValue 這個可以改變
    // 到 value 值的 function 去設定 value
    setValue(e.target.value);
  }
  function handleIsDoneToggle(key) {
    setTodos(
      todos.map((todo) => {
        if (todo.key !== key) {
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
  return (
    <div>
      <input
        value={value}
        onChange={handleInputChange}
        type="text"
        placeholder="請輸入代辦事項"
        autoFocus
      />
      <button onClick={handleAddClick}>add todo</button>
      {todos.map((todo) => (
        <TodoItem
          key={todo.key}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleIsDoneToggle={handleIsDoneToggle}
        />
      ))}
    </div>
  );
}
export default App;
