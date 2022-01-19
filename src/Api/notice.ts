import { noticeController } from "Utils/Libs/requestUrls";
import RequestApi from "Utils/Libs/requestApi";
import fs from "fs";

class notice {
  async getNotice(role: string | null) {
    try {
      return await RequestApi({
        method: "get",
        url: noticeController.getNotice(role),
      });
    } catch (e: any) {
      if (e.message === "Request failed with status code 401") {
        alert("로그아웃 되었습니다. 다시 로그인 해주세요.");
      } else throw new Error(e);
      // throw new Error(e);
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
  async noticeWrite(
    role: string | null,
    title: string,
    content: string,
    img: string
  ) {
    try {
      let formData = new FormData();
      formData.append("files", img);
      let boardDto = {
        title: title,
        content: content,
      };
      formData.append(
        "boardDto",
        new Blob([JSON.stringify(boardDto)], { type: "application/json" })
      );
      return await RequestApi({
        method: "POST",
        url: noticeController.noticeWrite(role),
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
