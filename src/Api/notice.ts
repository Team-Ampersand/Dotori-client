import { noticeController } from "Utils/Libs/requestUrls";
import RequestApi from "Utils/Libs/requestApi";

class notice {
  async adminGetNotice(role: string) {
    try {
      return await RequestApi({
        method: "get",
        url: noticeController.getNotice(role),
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async adminGetNoticeDetail(role: string, page: number) {
    try {
      return await RequestApi({
        method: "get",
        url: noticeController.getNoticeDetail(role, page),
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async adminGetNoticeItem(role: string, boardId: number) {
    try {
      return await RequestApi({
        method: "get",
        url: noticeController.getNoticeItem(role, boardId),
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async adminWrite(role: string, title: string, content: string) {
    try {
      const data = {
        title: title,
        content: content,
      };
      return await RequestApi({
        method: "POST",
        url: noticeController.adminNoticeWrite(role),
        data: data,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async adminDeleteNotice(role: string, boardId: number) {
    try {
      return await RequestApi({
        method: "DELETE",
        url: noticeController.deleteNotice(role, boardId),
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async adminUpdateNotice(role: string, boardId: number, title, content) {
    try {
      const data = {
        title: title,
        content: content,
      };
      return await RequestApi({
        method: "PUT",
        url: noticeController.updateNotice(role, boardId),
        data: data,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default new notice();
