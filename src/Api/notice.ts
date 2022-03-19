import { noticeController } from 'Utils/Libs/requestUrls';
import RequestApi from 'Utils/Libs/requestApi';

class notice {
	getNotice(role: string | null) {
		try {
			return RequestApi({
				method: 'get',
				url: noticeController.getNotice(role),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	getNoticeDetail(role: string | null, page: number) {
		try {
			return RequestApi({
				method: 'get',
				url: noticeController.getNoticeDetail(role, page),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	getNoticeItem(role: string | null, boardId: number) {
		try {
			return RequestApi({
				method: 'get',
				url: noticeController.getNoticeItem(role, boardId),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	noticeWrite(
		role: string | null,
		title: string,
		content: string,
		img: string
	) {
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
			return RequestApi({
				method: 'POST',
				url: noticeController.noticeWrite(role),
				data: formData,
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	noticeDelete(role: string | null, boardId: number) {
		try {
			return RequestApi({
				method: 'DELETE',
				url: noticeController.noticeDelete(role, boardId),
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
	noticeUpdate(role: string | null, boardId: number, title, content) {
		try {
			const data = {
				title: title,
				content: content,
			};
			return RequestApi({
				method: 'PUT',
				url: noticeController.noticeUpdate(role, boardId),
				data: data,
			});
		} catch (e: any) {
			throw new Error(e);
		}
	}
}

export default new notice();
