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
  async updateStuNum(role: string, stuId: number, stuNum: string) {
    try {
      const data = {
        receiverId: stuId,
        stuNum: stuNum,
      };
      return await RequestApi({
        method: "PUT",
        url: StuInfoController.updateStuNum(role),
        data: data,
      });
    } catch (e: any) {
      throw Error(e);
    }
  }
  async updateStuName(role: string, stuId: number, stuName: string) {
    try {
      const data = {
        receiverId: stuId,
        username: stuName,
      };
      return await RequestApi({
        method: "PUT",
        url: StuInfoController.updateStuName(role),
        data: data,
      });
    } catch (e: any) {
      throw Error(e);
    }
  }
  async updateStuRole(role: string, stuId: number, stuRole: string) {
    try {
      const data = {
        receiverId: stuId,
        roles: [stuRole],
      };
      return await RequestApi({
        method: "PUT",
        url: StuInfoController.updateStuRole(role),
        data: data,
      });
    } catch (e: any) {
      throw Error(e);
    }
  }
}

export default new stuInfo();
