import { noticeController } from "Utils/Libs/requestUrls";
import RequestApi from "Utils/Libs/requestApi";

class notice {
  async adminGetNotice() {
    try {
      return await RequestApi({
        method: "get",
        url: noticeController.getNotice(),
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async adminGetNoticeDetail(page: number) {
    try {
      return await RequestApi({
        method: "get",
        url: noticeController.getNoticeDetail(page),
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async adminGetNoticeItem(boardId) {
    try {
      return await RequestApi({
        method: "get",
        url: noticeController.getNoticeItem(boardId),
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async adminWrite(title: string, content: string) {
    try {
      const data = {
        title: title,
        content: content,
      };
      return await RequestApi({
        method: "POST",
        url: noticeController.adminNoticeWrite(),
        data: data,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async adminDeleteNotice(boardId) {
    try {
      return await RequestApi({
        method: "DELETE",
        url: noticeController.deleteNotice(boardId),
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async adminUpdateNotice(boardId, title, content) {
    try {
      const data = {
        title: title,
        content: content,
      };
      return await RequestApi({
        method: "PUT",
        url: noticeController.updateNotice(boardId),
        data: data,
      });
    } catch (e: any) {
      throw new Error(e);
    }
  }
}

export default new notice();
