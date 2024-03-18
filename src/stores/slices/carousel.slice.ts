import { createSlice } from "@reduxjs/toolkit";
import ResultData from "../../models/basemodel/ResultData";
import carouselThunks from "../../helper/thunks/carousel.thunks";

const carouselsSlice = createSlice({
  name: "carousels",
  initialState: {
    data: {} as ResultData,
    isLoading: true,
    error: "Message.Error_Message" as string,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(carouselThunks.fetchCarouselData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(carouselThunks.fetchCarouselData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(carouselThunks.fetchCarouselData.rejected, (state, action) => {
        state.error = action.error.message as string;
        state.isLoading = true;
      })
  },
});

export const Datacarousels = (state: any) => state.carousel.data;
export const IsLoading = (state: any) => state.carousel.isLoading as boolean;
export const carouselsReducer = carouselsSlice.reducer;
