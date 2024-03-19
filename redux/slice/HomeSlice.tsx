import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../store";
import { homeApi } from "@/api/homeApi";

type ItemsType = { id: string; title: string; description?: string };
export const fetchGetRecords = createAsyncThunk("FilterSlice/fetchGetFilters", async (_, { rejectWithValue }) => {
  try {
    const data = await homeApi.get();
    return data;
  } catch (err) {
    console.log(err);
    return rejectWithValue("An error occurred");
  }
});

const initialState = {
  items: [] as ItemsType[],
  temporaryDescription: "",
  isLoading: false,
  item: {} as ItemsType
};

const HomeSlice = createSlice({
  name: "FilterSlice",
  initialState: initialState,
  reducers: {
    setEditItem: (state, { payload }) => {
      const items = state.items.map((item) => {
        if (item.id === payload.id) {
          return { ...item, ...payload };
        }
        return item;
      });
      state.items = items;
    },
    setItem: (state, { payload }) => {
      const item = state.items.find((item) => item.id === payload);
      state.item = item as ItemsType;
    },
    setDeleteItem: (state, { payload }) => {
      const itemFilter = state.items.filter((item) => item.id !== payload);
      state.items = itemFilter;
      const name = "items";
      localStorage.setItem(name, JSON.stringify(itemFilter));
    },
    setItems: (state, { payload }) => {
      state.items = payload;
    },
    setInitialState: (state, { payload }) => {
      state.temporaryDescription = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetRecords.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGetRecords.fulfilled, (state, { payload }) => {
      const data = {
        id: payload.key || "",
        title: payload.activity || "",
        description: state.temporaryDescription
      };
      state.items = [...state.items, data];
      state.isLoading = false;

      const name = "items";
      const getItems = localStorage.getItem(name);
      const items = getItems ? JSON?.parse(getItems) : "";
      localStorage.setItem(name, JSON.stringify([...items, data]));
    });
    builder.addCase(fetchGetRecords.rejected, (state, action) => {
      state.isLoading = false;
    });
  }
});

export const selectItem = (state: RootState) => state.homeReducer.item;
export const selectItems = (state: RootState) => state.homeReducer.items;
export const selectIsLoading = (state: RootState) => state.homeReducer.isLoading;

export const { reducer: homeReducer, actions: homeActions } = HomeSlice;
