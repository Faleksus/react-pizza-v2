const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: "популярності",
    sortProperty: "rating",
  }
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  }
})

export const { setCategoryId, setSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;