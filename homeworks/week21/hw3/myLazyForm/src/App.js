import './App.css'
import styled from 'styled-components'
import { useRef, useState } from 'react'
const Body = styled.div`
  display: flex;
  justify-content: center;
  background: rgb(225, 225, 225);
`
const MainBoard = styled.div`
  width: 645px;
  display: flex;
  flex-direction: column;
  border-top: 15px solid #fad312;
  margin: 30px 0px;
  background: white;

  &:hover {
    box-shadow: 2px 2.6px 5.5px 0px ${props => props.color};
    transition: ;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left: 35px;
`
const Title = styled.div`
  font-size: 35px;
  color: black;
  margin-top: 30px;
  margin-bottom: 35px;
`
const ActivityInformation = styled.div`
  font-size: 18px;
  color: purple;
  margin-top: 5px;
`
const SubTitle = styled.div`
  font-size: 20px;
  margin-bottom: 25px;
  &::after {
    ${props => props.nickname && "content: ' * 請至少輸入 1 碼'; "}
    ${props =>
      props.email &&
      "content: ' * 請輸入電子郵件格式（例如： abc@gmail.com ）'; "}
    ${props =>
      props.phoneNumber &&
      "content: ' * 請輸入手機格式（例如： 0912345678 ）'; "}
    ${props => props.activity && "content: ' * 請挑選一項想參加的活動'; "}
    ${props => props.how && "content: ' * 請簡答即可'; "}
    color: red;
    font-size: 15px;
  }
`
const QuestionBlock = styled.div`
  margin-top: 45px;
  margin-bottom: 15px;
`
const Input = styled.input`
  width: 287px;
  height: 23px;
`
const Button = styled.button`
  padding: 5px;
  background: #fad312;
  font-size: 15px;
  width: 95px;
  height: 44px;
  margin-top: 30px;
  margin-bottom: 10px;
`
const Warning = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  color: red;
`
const Footer = styled.div`
  color: #999999;
  text-align: center;
  width: 100%;
  height: 60px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const TestDiv = styled.button`
  color: red;
  width: 200px;
  height: 200px;
`
const Radio = ({ onChangeType }) => {
  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            value="bed"
            name="gender"
            onChange={onChangeType}
          />{' '}
          躺在床上用想像力實作
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="ground"
            name="gender"
            onChange={onChangeType}
          />{' '}
          趴在地上滑手機找現成的
        </label>
      </div>
    </div>
  )
}
const Other = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
`
function App() {
  const colors = ['#ff0000', '#00ff00', '#0000ff']
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  console.log(randomColor)
  const [nickname, setNickname] = useState({ isntDone: true })
  const [email, setEmail] = useState({ isntDone: true })
  const [phoneNumber, setPhoneNumber] = useState({ isntDone: true })
  const [how, setHow] = useState({ isntDone: true })
  const [activity, setActivity] = useState({ isntDone: true })
  const data = useRef({
    nickname: null,
    email: null,
    phoneNumber: null,
    how: null,
    activity: null,
    other: null,
  })
  const handleNickname = e => {
    e.target.value
      ? setNickname({ isntDone: false })
      : setNickname({ isntDone: true })
    data.current.nickname = e.target.value
  }
  const handleEmail = e => {
    const emailRegexRule =
      /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
    setEmail({ isntDone: !emailRegexRule.test(e.target.value) })
    data.current.email = e.target.value
  }
  const handlePhoneNumber = e => {
    const phoneNumberRegexRule = /^09\d{8}$/
    setPhoneNumber({ isntDone: !phoneNumberRegexRule.test(e.target.value) })
    data.current.phoneNumber = e.target.value
  }
  const onChangeType = e => {
    setActivity({ isntDone: !e.target.value })
    data.current.activity = e.target.value
  }
  const handleHow = e => {
    e.target.value ? setHow({ isntDone: false }) : setHow({ isntDone: true })
    data.current.how = e.target.value
  }
  const handleOther = e => {
    data.current.other = e.target.value
  }
  const handleButton = () => {
    alert(`
      暱稱：${data.current.nickname}
      email:${data.current.email}
      手機號碼：${data.current.phoneNumber}
      報名類型：${data.current.activity}
      如何知道活動：${data.current.how}
      ${data.current.other ? `建議：${data.current.other}` : ``}
    `)
  }
  const [test, setTest] = useState(0)
  function handleTestClick() {
    setTest(Math.random())
    console.log(test)
  }
  return (
    <>
      <Body>
        <MainBoard color={randomColor}>
          <Wrapper>
            <Title>新拖延運動報名表單</Title>
            <ActivityInformation>
              活動日期：2020/12/10 ~ 2020/12/11
            </ActivityInformation>
            <ActivityInformation>
              活動地點：台北市大安區新生南路二段1號
            </ActivityInformation>
            <Warning>* 必填</Warning>
            <QuestionBlock>
              <SubTitle nickname={nickname.isntDone}>暱稱</SubTitle>
              <Input placeholder="您的暱稱" onChange={handleNickname}></Input>
            </QuestionBlock>
            <QuestionBlock>
              <SubTitle email={email.isntDone}>電子郵件</SubTitle>
              <Input placeholder="您的電子郵件" onChange={handleEmail}></Input>
            </QuestionBlock>
            <QuestionBlock>
              <SubTitle phoneNumber={phoneNumber.isntDone}>手機號碼</SubTitle>
              <Input
                placeholder="您的手機號碼"
                onChange={handlePhoneNumber}
              ></Input>
            </QuestionBlock>
            <QuestionBlock>
              <SubTitle activity={activity.isntDone}>報名類型</SubTitle>
              <Radio onChangeType={onChangeType}></Radio>
            </QuestionBlock>
            <QuestionBlock>
              <SubTitle how={how.isntDone}>怎麼知道這個活動的？</SubTitle>
              <Input placeholder="您的回答" onChange={handleHow}></Input>
            </QuestionBlock>
            <QuestionBlock>
              <SubTitle>其他</SubTitle>
              <Other>對活動的一些建議</Other>
              <Input placeholder="您的回答" onChange={handleOther}></Input>
            </QuestionBlock>
            <Button onClick={handleButton}>送出</Button>
            <Warning>請勿透過表單送出您的密碼。</Warning>
          </Wrapper>
        </MainBoard>
      </Body>
      <Footer>© 2021 © Copyright. All rights Reserved.</Footer>
      <TestDiv onClick={handleTestClick}>123</TestDiv>
    </>
  )
}
export default App
