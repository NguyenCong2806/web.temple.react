import ResultData from "../models/basemodel/ResultData";

export default interface IServiceFactory {
  //get all Data //
  getall(): Promise<ResultData>;
  //get data by id
  getbykeyword(id: string): Promise<ResultData>;
}
