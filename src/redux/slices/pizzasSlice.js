import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzas",
  async (params, thunkAPI) => {
    const { category, sortBy, order, search, currentPage } = params;
    try {
      const { data } = await axios.get(
        `https://63d007b610982404378ba227.mockapi.io/pizzas?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  items: [],
  status: "loading",
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setPizza: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      state.status = 'success';
    });

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.status = 'error';
      state.items = [];
    });

    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.isLoading = true;
      state.status = 'loading';
      state.items = [];
    });
  },
  //   extraReducers: {
  //     [fetchPizzas.pending]: (state, action) => {
  //       console.log("pending");
  //     },
  //     [fetchPizzas.fulfilled]: (state, action) => {
  //       console.log("fulfilled");
  //     },
  //     [fetchPizzas.rejected]: (state, action) => {
  //       console.log("rejected");
  //     },
  //   },
});

export const selectPizzaData = (state) => state.pizza;

export const { setPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;
