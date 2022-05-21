import styles from '../styles/Search.module.css'

export function Search(){
    return(
        <>
        <div className= {styles.center}>
        <input></input> <button>텍스트 검색</button> <button>사진 검색</button>
        </div>
        <p><img className={styles.img} src="http://image.kyobobook.co.kr/images/book/large/225/l9791191114225.jpg"/>
        작별인사 김영하 복복서가 12,600원 | eBook 10,000원
        </p>
        <p><img className={styles.img} src="http://image.kyobobook.co.kr/images/book/large/610/l9788972773610.jpg"/>
        컬러애 물들다 밥 햄블리 리드리드 16,800원 | eBook 15,120원
        </p>
        <p><img className={styles.img} src="http://image.kyobobook.co.kr/images/book/large/665/l9791166686665.jpg"/>
        저주토끼 정보라 아작 14,800원 | eBook 13,320원
        </p>


        
        </>
    )
}