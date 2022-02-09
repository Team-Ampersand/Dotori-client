import { PenaltyController } from "Utils/Libs/requestUrls";
import RequestApi from "Utils/Libs/requestApi";
import { EnumType } from "typescript";

class penaltyInfo {
  async getPenaltyInfo(role: string | null, stuNum: string){
    try{
      return await RequestApi({
        method: "GET",
        url: PenaltyController.getPenaltyInfo(role, stuNum),
      });
    } catch (e: any) {
      if (e.message === "Request failed with status code 404") {
        alert("1");
      } else return;
    }
  }
  updatePenaltyInfo(date: string, rule: EnumType, stuNum: string){
    try{
      const data = {
        date: date,
        rule: rule,
        stuNum: stuNum,
      };
      return RequestApi({
        method: "POST",
        url: PenaltyController.updatePenaltyInfo(localStorage.getItem("role")),
        data: data,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default new penaltyInfo();