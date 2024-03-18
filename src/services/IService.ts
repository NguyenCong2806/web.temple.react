import ResultData from "../models/basemodel/ResultData";

export default interface IService {
  //get all Data //
  getalls(url: string): Promise<ResultData>;
  //get data by id
  getbyid(url: string, id: string): Promise<ResultData>;
}
