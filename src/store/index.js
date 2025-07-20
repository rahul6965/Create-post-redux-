import { createStore } from 'redux';

const initialState = {
  addlist: [],
  editId: null
};
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return {
        ...state,
        addlist: action.payload
      };
    }

    case "ADDITEM": {
      const newItem = {
        id: state.addlist.length + 1,
        title: action.payload.title,
        body: action.payload.body
      };
      return {
        ...state,
        addlist: [...state.addlist, newItem]
      };
    }

    case "DELETEITEM": {
      const filtered = state.addlist.filter(item => item.id !== action.payload);
      const reIndexed = filtered.map((item, index) => ({
        ...item,
        id: index + 1
      }));
      return {
        ...state,
        addlist: reIndexed
      };
    }

    case "SET_EDIT_ID": {
      return {
        ...state,
        editId: action.payload
      };
    }

    case "UPDATEITEM": {
      const updatedList = state.addlist.map(item =>
        item.id === state.editId
          ? { ...item, title: action.payload.title, body: action.payload.body }
          : item
      );
      return {
        ...state,
        addlist: updatedList,
        editId: null
      };
    }

    default:
      return state;
  }
};


export const store = createStore(postReducer);