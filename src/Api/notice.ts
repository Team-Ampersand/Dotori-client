import { noticeController } from 'Utils/Libs/requestUrls';
import { apiClient } from 'Utils/Libs/apiClient';

export const getNotice = async (role: string) => {
	try {
		const { data } = await apiClient.get(noticeController.getNotice(role));
		return { data };
	} catch (e) {
		alert(e);
	}
};

export const getNoticeDetail = async (role: string, page: number) => {
	try {
		const { data } = await apiClient.get(
			noticeController.getNoticeDetail(role, page)
		);
		return { data };
	} catch (e) {
		alert(e);
	}
};

export const getNoticeItem = async (role: string, boardId: number) => {
	try {
		const { data } = await apiClient.get(
			noticeController.getNoticeItem(role, boardId)
		);
		return { data };
	} catch (e: any) {
		alert(e);
	}
};

export const noticeWrite = async (
	role: string,
	title: string,
	content: string,
	img: string
) => {
	try {
		let formData = new FormData();
		formData.append('files', img);
		let boardDto = {
			title: title,
			content: content,
		};
		formData.append(
			'boardDto',
			new Blob([JSON.stringify(boardDto)], { type: 'application/json' })
		);
		const { data } = await apiClient.post(
			noticeController.noticeWrite(role),
			formData,
			{ headers: { 'Content-Type': 'multipart/form-data' } }
		);
		return { data };
	} catch (e: any) {
		alert("제목과 내용을 확인해주세요");
	}
};

export const noticeDelete = async (role: string | null, boardId: number) => {
	try {
		const { data } = await apiClient.delete(
			noticeController.noticeDelete(role, boardId)
		);
		return { data };
	} catch (e: any) {
		alert(e);
	}
};

export const noticeUpdate = async (
	role: string | null,
	boardId: number,
	title,
	content
) => {
	try {
		const { data } = await apiClient.put(
			noticeController.noticeUpdate(role, boardId),
			{
				title: title,
				content: content,
			}
		);
		return { data };
	} catch (e: any) {
		alert(e);
	}
};
