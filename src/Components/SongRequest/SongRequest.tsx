import React, { useState, useCallback } from 'react';
import axios from 'axios';
import * as S from './Style';

type SubmitFormProps = {
    onSubmit: (form: { music: string; singer: string; link: string }) => void;
};


const SongRequest: React.FC<SubmitFormProps> = ({ onSubmit }) => {

    const [form, setForm] = useState({
        music: '',
        singer: '',
        link: ''
    });

    const { music, singer, link } = form;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (music.length < 1) {
            alert("음악제목을 입력하세요.");
        } else if (singer.length < 1) {
            alert("아티스트를 입력하세요.");
        } else if (link.length < 1) {
            alert("주소를 입력하세요.");
        } else if (!CheckUrl(link)) {
            alert("주소 형식이 올바르지 않습니다.");
        } else {
            e.preventDefault();
            onSubmit(form);
            axios.post('http://localhost:5000/api/music/v1', {
                user_id: 1,
                music: music,
                singer: singer,
                link: link
            })
                .then(response => {
                    console.log(response)
                    if (response.status === 201) {
                        alert("음악 신청에 성공하였습니다!");
                    } else if (response.status === 400) {
                        alert("유저 토큰 인증 과정 중 오류 발생");
                    } else {
                        alert("Error");
                    }
                })
                .catch(response => { console.log(response) });
            setForm({
                music: '',
                singer: '',
                link: ''
            });
        }
    };

    return (
        <S.Postioner>
            <label>기상음악 신청</label>
            <form onSubmit={handleSubmit}>
                <S.InputWrapper>
                    <p>노래 제목</p>
                    <input name="music" value={music} onChange={onChange} placeholder="노래제목을 입력하세요." type="text" />
                    <p>아티스트명</p>
                    <input name="singer" value={singer} onChange={onChange} placeholder="아티스트명을 입력하세요." type="text" />
                    <p>url 주소</p>
                    <input name="link" value={link} onChange={onChange} placeholder="url을 입력하세요." type="text" />
                    <button>신청하기</button>
                </S.InputWrapper>
            </form>
        </S.Postioner>
    );
};

export const CheckUrl = url => {
    let regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/

    return regex.test(url);
}

export default SongRequest;