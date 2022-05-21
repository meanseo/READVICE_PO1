import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

export function ModifyMyInformation() {

    return (
        <div className='center'>
            <form>
                <h1>내 정보 관리</h1>
                <h6 className='right'>SNS 연결계정</h6>
                <Avatar
                    className='right'
                    alt="google"
                    src="data:image/png;base64,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"/>

                <Avatar c="/broken-image.jpg"/>

                <h3>성명</h3>
                <input type="text" name="name" defaultValue="노홍주"/>
                <h3>휴대폰 번호</h3>
                <input type="text" name="phone" placeholder="010-1111-2222"/>
                <button variant="contained" disableElevation="disableElevation">인증하기</button>
                <h3>이메일</h3>
                <input type="text" name="email" defaultValue="hongju@Gmail.com"/>
                <button variant="contained" disableElevation="disableElevation">중복확인</button>
                <h3>비밀번호 수정</h3>
                <input type="text" name="password" defaultValue="*********"/>
                <h3>비밀번호 확인</h3>
                <input type="text" name="checkPassword" defaultValue="*********"/>
                <Box
                    sx={{
                        '& button' : {
                            m: 1
                        }
                    }}>
                    <Button variant="contained" disableElevation="disableElevation" >수정하기</Button>
                    <br/>
                    <Button size="small">회원탈퇴</Button>
                </Box>
            </form>
        </div>
    );
}