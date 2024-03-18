import { createAsyncThunk } from "@reduxjs/toolkit";
import { typePrefix } from "../../common/typePrefix";
import carouselService from "../../services/carousel/carousel.service";

const fetchCarouselData = createAsyncThunk(
  typePrefix.fetchcarousel,
  async () => {
    const response = await carouselService.getall();
    return response;
  }
);
const getbyidCarouselData = createAsyncThunk(
  typePrefix.getbycarousel,
  async (id: string) => {
    const response = await carouselService.getbykeyword(id);
    return response;
  }
);

export default {
  fetchCarouselData,
  getbyidCarouselData,
};
