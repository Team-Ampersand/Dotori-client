import { StuInfoController } from "Utils/Libs/requestUrls";
import RequestApi from "Utils/Libs/requestApi";

class stuInfo {
  async getClassStuInfo(role: string, classId: number) {
    try {
      return await RequestApi({
        method: "GET",
        url: StuInfoController.getClassStuInfo(role, classId),
      });
    } catch (e: any) {
      throw Error(e);
    }
  }
}

export default new stuInfo();
