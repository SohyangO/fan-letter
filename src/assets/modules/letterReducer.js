import { letterItems } from "shared/letterItems";
const initialState = { letterItems };

// 리듀서 : 'state에 변화를 일으키는' 함수
// >> state를 action의 type에 따라 변경하는 함수
// action : state를 어떻게 수정할 건지 취하는 동작
const ADD_LETTER = "ADD_LETTER";

export const addLetter = (newLetter) => ({
  type: ADD_LETTER,
  payload: newLetter,
});

const letterCollect = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LETTER:
      // ADD_LETTER 액션을 처리하는 로직
      const newLetter = action.payload; // 새로운 팬레터 데이터 가져오기

      return {
        ...state,
        letterItems: [...state.letterItems, newLetter], // 새로운 팬레터 추가
      };
    default:
      return state;
  }
};

export default letterCollect;
