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
        alert("등록된 학생 규정위반 정보가 없습니다.");
      } else return;
    }
  }
  updatePenaltyInfo(date: string, rule: string, stuNum: Array<string>){
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
  async getModifyPenaltyInfo(role: string | null, stuNum) {
    try{
      return await RequestApi({
        method: "GET",
        url: PenaltyController.getModifyPenaltyInfo(role, stuNum),
      });
    } catch (e: any) {
      if (e.message === "Request failed with status code 404") {
        alert("등록된 학생 규정위반 정보가 없습니다.")
      } else return;
    }
  }
  async deletePenaltyInfo(role: string | null, PenaltyId: number){
    try{
      return await RequestApi({
        method: "DELETE",
        url: PenaltyController.deletePenaltyInfo(role, PenaltyId),
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default new penaltyInfo();