import { noticeController } from 'Utils/Libs/requestUrls';
import { apiClient } from 'Utils/Libs/apiClient';
import { toast } from 'react-toastify';

export const getNotice = async (role: string) => {
	try {
		const { data } = await apiClient.get(noticeController.getNotice(role));
		return { data };
	} catch (e: any) {
		if (
			e.message === 'Request failed with status code 401' ||
			e.message === 'Request failed with status code 403'
		) {
			localStorage.removeItem('Dotori_accessToken');
			localStorage.removeItem('Dotori_refreshToken');
			localStorage.removeItem('role');

			window.location.replace('/');
			toast.info('로그아웃 되었어요');
		}
	}
};

export const getNoticeDetail = async (role: string, page: number) => {
	try {
		const { data } = await apiClient.get(
			noticeController.getNoticeDetail(role, page)
		);
		return { data };
	} catch (e) { }
};

export const getNoticeItem = async (role: string, boardId: number) => {
	try {
		const { data } = await apiClient.get(
			noticeController.getNoticeItem(role, boardId)
		);
		return { data };
	} catch (e: any) { }
};

export const noticeWrite = async (
	role: string,
	title: string,
	content: string,
	img: string[],
) => {
	try {
		let formData = new FormData();
		img.map(item => formData.append('files', item));
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
		toast.warning('제목과 내용을 확인해주세요');
	}
};

export const noticeDelete = async (role: string | null, boardId: number) => {
	try {
		const { data } = await apiClient.delete(
			noticeController.noticeDelete(role, boardId)
		);
		return { data };
	} catch (e: any) {
		if (e.message === 'Request failed with status code 404') {
			toast.warning('공지사항을 찾을 수 없어요');
		}
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
		if (e.message === 'Request failed with status code 404') {
			toast.warning('공지사항을 찾을 수 없어요');
		}
	}
};

export const boardAlarm = async () => {
	const { data } = await apiClient.get(noticeController.boardAlarm());
	return { data };
};
