import { StuInfoController } from "Utils/Libs/requestUrls";
import RequestApi from "Utils/Libs/requestApi";

class stuInfo {
  async getStuInfo(role: string | null) {
    try {
      return await RequestApi({
        method: "GET",
        url: StuInfoController.getStuInfo(role),
      });
    } catch (e: any) {
      if (e.massage === "Request failed with status code 404") {
        alert("등록된 학생 정보가 없습니다.");
      } else return;
    }
  }
  async getClassStuInfo(role: string | null, classId: number) {
    try {
      return await RequestApi({
        method: "GET",
        url: StuInfoController.getClassStuInfo(role, classId),
      });
    } catch (e: any) {
      if (e.message === "Request failed with status code 404") {
        alert("해당 반에 등록된 학생 정보가 없습니다.");
      } else return;
    }
  }
  async updateStuNum(role: string | null, stuId: number, stuNum: string) {
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
      if (e.message === "Request failed with status code 409") {
        return;
      } else throw Error(e);
    }
  }
  async updateStuName(role: string | null, stuId: number, stuName: string) {
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
      if (e.message === "Request failed with status code 409") {
        return;
      } else throw Error(e);
    }
  }
  async updateStuRole(role: string | null, stuId: number, stuRole: string) {
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
      if (e.message === "Request failed with status code 409") {
        return;
      } else throw Error(e);
    }
  }
}

export default new stuInfo();
