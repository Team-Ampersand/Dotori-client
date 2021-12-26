import { noticeController } from "Utils/Libs/requestUrls";
import RequestApi from "Utils/Libs/requestApi";

class notice {
  async getNotice(role: string | null) {
    try {
      return await RequestApi({
        method: "get",
        url: noticeController.getNotice(role),
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async getNoticeDetail(role: string | null, page: number) {
    try {
      return await RequestApi({
        method: "get",
        url: noticeController.getNoticeDetail(role, page),
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async getNoticeItem(role: string | null, boardId: number) {
    try {
      return await RequestApi({
        method: "get",
        url: noticeController.getNoticeItem(role, boardId),
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async noticeWrite(role: string | null, title: string, content: string) {
    try {
      const data = {
        title: title,
        content: content,
      };
      return await RequestApi({
        method: "POST",
        url: noticeController.noticeWrite(role),
        data: data,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async noticeDelete(role: string | null, boardId: number) {
    try {
      return await RequestApi({
        method: "DELETE",
        url: noticeController.noticeDelete(role, boardId),
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async noticeUpdate(role: string | null, boardId: number, title, content) {
    try {
      const data = {
        title: title,
        content: content,
      };
      return await RequestApi({
        method: "PUT",
        url: noticeController.noticeUpdate(role, boardId),
        data: data,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default new notice();
