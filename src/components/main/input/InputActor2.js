import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { actors } from "../../actors";

const InputActor2 = ({ inputValue, setInputValue }) => {
  const [actorList, setActorList] = useState([]);
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);
  const [dropDownList, setDropDownList] = useState(actorList);
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);

  useEffect(() => {
    setActorList(actors);
  }, []);

  const showDropDownList = () => {
    if (inputValue === "") {
      setIsHaveInputValue(false);
      setDropDownList([]);
    } else {
      const choosenTextList = actorList.filter((textItem) =>
        textItem.includes(inputValue)
      );
      setDropDownList(choosenTextList);
    }
  };

  const changeInputValue = (event) => {
    setInputValue(event.target.value);
    setIsHaveInputValue(true);
  };

  const clickDropDownItem = (clickedItem) => {
    setInputValue(clickedItem);
    setIsHaveInputValue(false);
  };

  const handleDropDownKey = (event) => {
    //input에 값이 있을때만 작동
    if (isHaveInputValue) {
      if (
        event.key === "ArrowDown" &&
        dropDownList.length - 1 > dropDownItemIndex
      ) {
        setDropDownItemIndex(dropDownItemIndex + 1);
      }

      if (event.key === "ArrowUp" && dropDownItemIndex >= 0)
        setDropDownItemIndex(dropDownItemIndex - 1);
      if (event.key === "Enter" && dropDownItemIndex >= 0) {
        clickDropDownItem(dropDownList[dropDownItemIndex]);
        setDropDownItemIndex(-1);
      }
    }
  };

  useEffect(showDropDownList, [inputValue]);

  return (
    <WholeBox>
      <InputBox isHaveInputValue={isHaveInputValue}>
        <Input
          type="text"
          value={inputValue}
          onChange={changeInputValue}
          onKeyUp={handleDropDownKey}
        />
        <DeleteButton onClick={() => setInputValue("")}>&times;</DeleteButton>
      </InputBox>
      {isHaveInputValue && (
        <DropDownBox>
          {dropDownList.length === 0 && (
            <DropDownItem>해당하는 배우가 없습니다</DropDownItem>
          )}
          {dropDownList.map((dropDownItem, dropDownIndex) => {
            return (
              <DropDownItem
                key={dropDownIndex}
                onClick={() => clickDropDownItem(dropDownItem)}
                onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                className={
                  dropDownItemIndex === dropDownIndex ? "selected" : ""
                }
              >
                {dropDownItem}
              </DropDownItem>
            );
          })}
        </DropDownBox>
      )}
    </WholeBox>
  );
};

const WholeBox = styled.div`
  flex-direction: column;
  align-items: center;
  margin: 20px;
  z-index: 100;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  padding-right: 20px;
  width: 230px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  position: relative;
  background-color: white;
  margin: 0px 50px 0px 50px;

  &:focus-within {
    box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  }
`;

const Input = styled.input`
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  width: 230px;
  // padding-left: 20px;
`;

const DeleteButton = styled.div`
  cursor: pointer;
`;

const DropDownBox = styled.div`
  text-align: left;
  display: block;
  width: 260px;
  margin: 0 auto;
  padding: 8px 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  list-style-type: none;
  height: expression(this.scrollHeight > 99 ? "100px": "auto");
  max-height: 100px;
  overflow: auto;
`;

const DropDownItem = styled.div`
  padding: 0 10px;
  &.selected {
    background-color: lightgray;
  }
`;
export default InputActor2;
