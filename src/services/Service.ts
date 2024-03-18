import ResultData from "../models/basemodel/ResultData";
import IService from "./IService";
import axios from "axios";

export default abstract class Service implements IService {
  async getalls(url: string): Promise<ResultData> {
    try {
      const { data } = await axios.get<ResultData>(url);
      return data;
    } catch (error: any) {
      throw new Error(error.message as string);
    }
  }
  async getbyid(url: string, id: string): Promise<ResultData> {
    try {
      const { data } = await axios.get<ResultData>(url + id);
      return data;
    } catch (error: any) {
      throw new Error(error.message as string);
    }
  }
}
