import ResultData from "../../models/basemodel/ResultData";
import { Parameter } from "../../utility/Parameter";
import { Http_Api_Url } from "../../utility/httpurl";
import IServiceFactory from "../IServiceFactory";
import Service from "../Service";

class CarouselService extends Service implements IServiceFactory {
  async getbykeyword(id: string): Promise<ResultData> {
    try {
      const model = await super.getbyid(
        Parameter.apiurl + Http_Api_Url.getbycarousel,
        id
      );
      return model;
    } catch (error: any) {
      throw new Error(error.message as string);
    }
  }

  async getall(): Promise<ResultData> {
    try {
      const models = await super.getalls(
        Parameter.apiurl + Http_Api_Url.getallcarousel
      );
      return models;
    } catch (error: any) {
      throw new Error(error.message as string);
    }
  }
}

export default new CarouselService();
