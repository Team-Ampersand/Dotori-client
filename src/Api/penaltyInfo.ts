import { PenaltyController } from "Utils/Libs/requestUrls";
import RequestApi from "Utils/Libs/requestApi";

class penaltyInfo {
  async getPenaltyInfo(role: string | null, stuNum: string){
    try{
      return await RequestApi({
        method: "GET",
        url: PenaltyController.getPenaltyInfo(role, stuNum),
      });
    } catch (e: any) {
      if (e.message === "Request failed with status code 404") {
        alert("tlqkf.");
      } else return;
    }
  }
}

export default new penaltyInfo();