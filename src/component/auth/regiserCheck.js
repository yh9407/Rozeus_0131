import React, {useState} from "react";
import styled, {ThemeProvider} from "styled-components"

const CheckPageStyle = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
max-width: 500px;
justify-content: center;

  .checkPage{
  display: grid;
  width: 100%;
  min-width: 300px;
  grid-template-rows: 2fr 3fr 3fr 3fr 2fr ;
  align-items: center;
  justify-items: flex-start;
  
    .inside:nth-child(1){
    display: grid;
    align-items: center;
    justify-items: flex-start;
    grid-template-columns: 2em 1fr;
    }
    .inside{
    display: grid;
    align-items: center;
    justify-items: flex-start;
    grid-template-columns: 2em 1fr;
      .lawArea{
      width: 100%;
      height: 100%;
      }
    }
   
    .checkbox_style{
    margin: 0 0.5em 0 0 ;
    width: 1em;
    height: 1em;
    }
    .buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
      button{
      width: 45%
      }
      button:nth-child(1){
      background-color: gray;
      }
    }
  }
`

const LawList = [
    {
        list_id: 1,
        data: "이용약관 동의",
        checked: false,
    },
    {
        list_id: 2,
        data: "기타사항 동의",
        checked: false,
    },
    {
        list_id: 3,
        data: "개인정보 수집 및 이용 동의",
        checked: false,
    }
]

const CheckPage = ({props, setCheckLaw}) => {
    const [checkItems, setCheckItems] = useState([])

    const handleAllCheck = (checked) => {
        if (checked) {
            const idArray = [];
            LawList.forEach((el) => {
                idArray.push(el.list_id)
            });
            setCheckItems(idArray);
        } else {
            setCheckItems([]);
        }
    }

    const handleSingleCheck = (checked, list_id) => {
        if (checked) {
            setCheckItems([...checkItems, list_id]);
        } else {
            setCheckItems(checkItems.filter((el) => el !== list_id))
        }
    }
    const nextHandler = () => {
        if(checkItems.length === 3){
            setCheckLaw(true)
        }
        else{
            alert("이용약관에 모두 동의해 주세요")
        }
    }
    console.log()
    return (
        <CheckPageStyle>
            <div className={"checkPage"}>
                <div className={"inside"}>
                    <input type="checkbox" className={"checkbox_style"}
                           onChange={(e) => {
                               handleAllCheck(e.target.checked)
                           }}
                           checked={LawList.length !== 0 && checkItems.length === LawList.length}
                    />
                    <span>이용약관, 개인정보 수집 및 이용, 위치정보
                        이용약관(선택), 프로모션 정보 수신(선택)에 모두 동의합니다.</span>
                </div>
                {LawList.map((list,key)=> {
                    return (
                        <div className={"inside"} key={key}>
                            <input type="checkbox" className={"checkbox_style"}
                            onChange={(e)=> handleSingleCheck(e.target.checked, list.list_id)}
                            checked={checkItems.includes(list.list_id)}/>
                            <span>{list.data}</span>
                        </div>
                    )
                })}
                {/*<div className={"inside"}>*/}
                {/*    <input type="checkbox" className={"checkbox_style"}/>*/}
                {/*    <span>이용약관 동의</span>*/}
                {/*</div>*/}
                {/*<div className={"inside"}>*/}
                {/*    <input type="checkbox" className={"checkbox_style"}/>*/}
                {/*    <span>개인정보 수집 및 이용 동의</span>*/}
                {/*</div>*/}
                {/*<div className={"inside"}>*/}
                {/*    <input type="checkbox" className={"checkbox_style"}/>*/}
                {/*    <span>기타사항 동의</span>*/}
                {/*</div>*/}
                <div className={"buttons"}>
                    <button onClick={() => props.history.push("/login")}>취소</button>
                    <button onClick={() => {
                        nextHandler()
                    }}>확인
                    </button>
                </div>
            </div>
        </CheckPageStyle>
    )
}
export default CheckPage;