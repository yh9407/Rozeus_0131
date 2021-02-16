import React, {useState} from "react"
import styled, {ThemeProvider} from "styled-components";
import theme from "../theme";
import {useSelector} from "react-redux";


const Wrap = styled.div`
display: grid;
width: 100%;
grid-template-rows: repeat(3,1fr);
align-items: center;
  .profile{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
    img{
    width: 120px;
    height: 120px;
    margin-left: 10px;
    }
    button{
    border:none;
    outline: none;
      span{
      font-size: 14px;
      font-weight: 600;
      }
    }
  }
  .profile_data{
  display: grid;
  grid-template-rows: repeat(3,1fr);
  grid-gap: 1.5em;
    ._data{
    display: grid;
    align-content: center;
    align-items: center;
    grid-template-columns: 3fr 5fr;
    height: 6vh;
    font-size: 14px;
    border-bottom: 1px solid lightgray;
      div{
      padding:  0 0 0 1.5em;
      display: flex;
      }
      input{
      height: 4vh;
      width: 90%;
      font-size: 14px;
      border: none;
      outline: none;
      }
      input:focus{
      border: 1px solid ${(props)=> props.theme.focusColor};
      border-radius: 5px;
      }
    }
  }
  .options{
  
  } 
`

const MyPageUpdate = () => {
    const userData = useSelector((state)=> state.auth.login)
    const [updateData,setUpdateData] = useState({
        user_name:userData.name,
        user_email:userData.email,
        user_message :"소개글을 입력해 주세요",

    })
    const onChangeHandler = (e) => {
        setUpdateData({
            ...updateData,
            [e.target.id]:e.target.value
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <Wrap>
                <div className="profile">
                    <img src={"/img/rion.jpg"}/>
                    <button><span>프로필 사진 바꾸기</span></button>
                </div>
                <div className="profile_data">
                    <div className="_data">
                        <div>이름</div>
                        <input
                            id={"user_name"}
                            value={updateData.user_name}
                            onChange={onChangeHandler}/>
                    </div>
                    <div className="_data">
                        <div>사용자 이름</div>
                        <input
                            id={"user_email"}
                            value={updateData.user_email}
                            onChange={onChangeHandler}/>
                    </div>
                    <div className="_data">
                        <div>소개 글</div>
                        <input
                            id={"user_message"}
                            value={updateData.user_message}
                            onChange={onChangeHandler}/>
                    </div>
                </div>
                <div className="options">
                    <div>비공개 계정으로 전환</div>
                    <div>공식 계정 인증 받기</div>
                    <div>인플루언서 알아보기</div>
                </div>
            </Wrap>


        </ThemeProvider>
    )
}
export default MyPageUpdate
