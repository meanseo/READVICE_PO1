import React from 'react';
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import IconButton from '@mui/material/IconButton';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import BottomNavigation from '@mui/material/BottomNavigation';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';


export function ModifyReadingBooks() {
    const [value, setValue] = React.useState();
    const itemData = [
        {
            src: 'http://image.kyobobook.co.kr/images/book/large/225/l9791191114225.jpg',
            title: ' 작별인사',
            author: '김영하',
            genre: '장편소설',
            publisher: '복복서가',
          },
          {
            src: 'http://image.kyobobook.co.kr/images/book/large/188/l9791161571188.jpg',
            title: '불편한 편의점',
            author: '김호연',
            genre: '장편소설',
            publisher: '나무옆의자',
          },
          {
            src: 'http://image.kyobobook.co.kr/images/book/large/685/l9791191347685.jpg',
            title: '마음의 법칙',
            author: '폴커 키츠',
            genre: '인문/심리학',
            publisher: '포레스트북스',
          },
          {
            src: 'http://image.kyobobook.co.kr/images/book/large/805/l9788933871805.jpg',
            title: '무엇이 옳은가',
            author: '후안 엔리케스',
            genre: '인문/인문학일반',
            publisher: '세계사',
          },
    ];
    return (
        <div className='center'>
            <form >
                <h1>내 서재 관리</h1>
                <BottomNavigation
                    showLabels="showLabels"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}>
                    <BottomNavigationAction label="읽은 책 목록" icon={<MenuBookIcon/>}/>
                    <BottomNavigationAction label="찜한 책 목록" icon={<FavoriteIcon/>}/>
                </BottomNavigation>
                <Box  sx={{ width: 'auth', display: 'flex', my: 5 }}>
                <ImageList sx={{ width: 'auth', height: 'auth' }}>
                  <ImageListItem  cols={4}>
                  </ImageListItem>
                  {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.src}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        actionIcon={
                          <IconButton aria-label={`info about ${item.title}`}>
                            <InfoIcon />
                            <DeleteOutlineIcon/> 
                            </IconButton>                     
                        }
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
                </Box>
                <label className='right' htmlFor="icon-button-file">
                    <input accept="image/*" id="icon-button-file" type="file"/>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera/>
                    </IconButton>
                </label>
            </form>
        </div>
    );
}
