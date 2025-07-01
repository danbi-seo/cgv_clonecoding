const scheduleData = [
{
"date": "2025-06-14",
"month": "06월",
"weekday": "토",
"day": "14",
"selected": true
},
{
"date": "2025-06-15",
"month": "06월",
"weekday": "일",
"day": "15",
"selected": false
},
{
"date": "2025-06-16",
"month": "06월",
"weekday": "월",
"day": "16",
"selected": false
},
{
"date": "2025-06-17",
"month": "06월",
"weekday": "화",
"day": "17",
"selected": false
},
{
"date": "2025-06-18",
"month": "06월",
"weekday": "수",
"day": "18",
"selected": false
},
{
"date": "2025-06-19",
"month": "06월",
"weekday": "목",
"day": "19",
"selected": false
},
{
"date": "2025-06-20",
"month": "06월",
"weekday": "금",
"day": "20",
"selected": false
},
{
"date": "2025-06-21",
"month": "06월",
"weekday": "토",
"day": "21",
"selected": false
}
];


const showTimes = [
{
"title": "신명",
"genre": "드라마",
"rating": "15",
"duration": 118,
"release_date": "2025-06-02",
"showtimes": [
    { "time": "12:10", "screen": "2관 6층", "seats": 90 },
    { "time": "16:00", "screen": "6관 10층", "seats": 83 },
    { "time": "21:10", "screen": "1관 6층", "seats": 129 }
]
},
{
"title": "미션 임파서블: 파이널 레코닝",
"genre": "액션",
"rating": "15",
"duration": 169,
"release_date": "2025-05-17",
"showtimes": [
    { "time": "11:00", "screen": "1관 6층", "seats": 112 },
    { "time": "14:20", "screen": "1관 6층", "seats": 56 },
    { "time": "17:45", "screen": "1관 6층", "seats": 124 },
    { "time": "18:30", "screen": "6관 10층", "seats": 98 },
    { "time": "21:50", "screen": "6관 10층", "seats": 123 },
    { "time": "23:40", "screen": "1관 6층", "seats": 144 }
]
},
{
"title": "인생은 아름다워",
"genre": "드라마, 전쟁, 코미디",
"rating": "All",
"duration": 116,
"release_date": "2025-06-11",
"showtimes": [
    { "time": "14:45", "screen": "2관 6층", "seats": 72 },
    { "time": "19:40", "screen": "2관 6층", "seats": 95 }
]
},
{
"title": "드래곤 길들이기",
"genre": "액션, 어드벤처, 환타지",
"rating": "All",
"duration": 125,
"release_date": "2025-06-06",
"showtimes": [
    { "time": "10:30", "screen": "4관 SCREENX 8층", "seats": 109 },
    { "time": "11:55", "screen": "3관 8층", "seats": 136 },
    { "time": "13:05", "screen": "4관 SCREENX 8층", "seats": 92 },
    { "time": "14:30", "screen": "3관 8층", "seats": 58 },
    { "time": "15:40", "screen": "4관 SCREENX 8층", "seats": 56 },
    { "time": "17:10", "screen": "3관 8층", "seats": 76 },
    { "time": "18:15", "screen": "4관 SCREENX 8층", "seats": 96 },
    { "time": "19:50", "screen": "3관 8층", "seats": 104 },
    { "time": "20:50", "screen": "4관 SCREENX 8층", "seats": 123 },
    { "time": "22:30", "screen": "3관 8층", "seats": 172 },
    { "time": "23:30", "screen": "4관 SCREENX 8층", "seats": 119 }
]
},
{
"title": "태양의 노래",
"genre": "로맨스, 멜로",
"rating": "12",
"duration": 108,
"release_date": "2025-06-11",
"showtimes": [
    { "time": "09:50", "screen": "2관 6층", "seats": 0, "status": "마감" },
    { "time": "22:10", "screen": "2관 6층", "seats": 123 }
]
},
{
"title": "하이파이브",
"genre": "코미디, 액션",
"rating": "15",
"duration": 119,
"release_date": "2025-05-30",
"showtimes": [
    { "time": "11:30", "screen": "5관 10층", "seats": 158 },
    { "time": "14:00", "screen": "5관 10층", "seats": 93 },
    { "time": "16:30", "screen": "5관 10층", "seats": 117 },
    { "time": "19:00", "screen": "5관 10층", "seats": 138 },
    { "time": "21:30", "screen": "5관 10층", "seats": 166 },
    { "time": "24:00", "screen": "5관 10층", "seats": 172 }
]
},
{
"title": "브링 허 백",
"genre": "호러",
"rating": "18",
"duration": 104,
"release_date": "2025-06-06",
"showtimes": [
    { "time": "13:40", "screen": "6관 10층", "seats": 94 },
    { "time": "17:20", "screen": "2관 6층", "seats": 81 }
]
},
{
"title": "인피니트 15주년 콘서트 리미티드 에디션 더 무비",
"genre": "콘서트 무비",
"rating": "All",
"duration": 115,
"release_date": "2025-06-11",
"showtimes": [
    { "time": "11:15", "screen": "6관 10층", "seats": 114 }
]
}
]

const daysData = [
    { date: "2025-06-14", day: "토", selected: true },
    { date: "2025-06-15", day: "일", selected: false },
    { date: "2025-06-16", day: "월", selected: false },
    { date: "2025-06-17", day: "화", selected: false },
    { date: "2025-06-18", day: "수", selected: false },
    { date: "2025-06-19", day: "목", selected: false },
    { date: "2025-06-20", day: "금", selected: false },
];

/*   */

daysData.forEach(days => {
    const daysWrap = document.createElement('li');
    daysWrap.classList.add('on');
    const daysDiv = document.createElement('div');
    daysDiv.classList.add('day');

    const month = days['date'].slice(5, 7);
    const weekday = days['day']
    const day = days['date'].slice(8, 10);

    daysDiv.innerHTML = `
        <span>${month}<br>${weekday}</span>
		<p class="booking-day">${day}</p>`;

    daysWrap.appendChild(daysDiv);

    document.querySelector('.days').appendChild(daysWrap);
});


/*    시작       */ 

function displayMovies() {
    const movieList = document.querySelector('.movie');
    movieList.innerHTML = ''

    showTimes.forEach(showTime => {
        const movieTitleItem = document.createElement('li');

        //관람나이
        const ratingBox = document.createElement('div');
        ratingBox.classList.add('rating-box');
        ratingBox.textContent = showTime.rating;
        ratingBox.style.display = 'inline-block';

        //영화제목
        const titleText = document.createElement('strong');
        titleText.textContent = showTime.title;
        titleText.classList.add('movie-title');
        titleText.style.fontSize = '24px';
        
        //상영중
        const nowPlaying = document.createElement('span');
        nowPlaying.textContent = ' 상영중 ';
        nowPlaying.classList.add('now-playing');
        nowPlaying.style.border = '3px solid #3E82A4';
        nowPlaying.style.color = ' #3E82A4';
        
        //표시될 콘텐츠들
        movieTitleItem.appendChild(ratingBox);
        movieTitleItem.appendChild(titleText);
        movieTitleItem.appendChild(nowPlaying);
        movieTitleItem.innerHTML += `<span style="margin-left: 3px;">${showTime.genre}</span>/ <span style="margin-left: 3px;">${showTime.duration}분</span>/ <span style="margin-left: 3px;">${showTime.release_date} 개봉</span>`;

        const allShowtimesContainer = document.createElement('div');
        allShowtimesContainer.classList.add('all-showtimes-container');


        const groupedShowtimes = showTime.showtimes.reduce((acc, show) => {
            if (!acc[show.screen]) {
                acc[show.screen] = [];
            }
            acc[show.screen].push(show);
            return acc;
        }, {});

        let currentScreenGroup = null; //현재 상영관 그룹
        let currentTimesWrapper = null; // timebox들을 담은 wrapper


        // 그룹화된 상영 시간들을 순회 생성
        for (const screen in groupedShowtimes) {

            const screenShowtimeGroup = document.createElement('div');
            screenShowtimeGroup.classList.add('screen-showtime-group');
            screenShowtimeGroup.dataset.screen = screen; // 데이터 속성 추가

            // 2D 텍스트 추가 
            const formatText = document.createElement('span');
            // screenInfo.classList.add('screen-info-line'); ///////

            formatText.textContent = '2D '; // 이미지에 '2D' 고정
            formatText.style.fontWeight = 'bold'; // 볼드체 (선택 사항)
            screenShowtimeGroup.appendChild(formatText);

            // 상영관 정보 
            const screenInfo = document.createElement('span');
            screenInfo.classList.add('screen-info'); 

            //첫 번째 상영 시간 객체에서 총 좌석 정보
            const firstShowInGroup = groupedShowtimes[screen][0];
            screenInfo.textContent = `${screen} | 총 ${firstShowInGroup.seats}석`; 
            screenShowtimeGroup.appendChild(screenInfo); 

            // 해당 스크린의 모든 timeBox를 담을 래퍼
            const timesWrapper = document.createElement('div');
            timesWrapper.classList.add('times-wrapper');
            screenInfo.appendChild(timesWrapper); 

            // timeBox 생성
            groupedShowtimes[screen].forEach(show => {
                const timeBox = document.createElement('div');
                timeBox.classList.add('time-box');

                const timeLine = document.createElement('div');
                timeLine.classList.add('time-line');
                timeLine.textContent = show.time;

                const remainingSeats = document.createElement('span');
                remainingSeats.classList.add('remaining-seats');
                remainingSeats.style.color = '#3E82A4'; 
                remainingSeats.textContent = `${show.seats}석`;

                // '마감' 상태 처리
                if (show.status === "마감" || show.seats === 0) {
                    timeBox.classList.add('sold-out'); 
                    remainingSeats.textContent = '마감';
                }

                timeBox.appendChild(timeLine);
                timeBox.appendChild(remainingSeats);


                // 팝업창
                const timeBoxPopup = document.createElement('div');
                timeBoxPopup.classList.add('time-box-popup');
                const popupImage = document.createElement('img');
                // popupImage.style.display = 'block'; 
                // popupImage.style.marginBottom = '5px'; 
                
                const popupSeats = document.createElement('span');
                popupSeats.classList.add('popup-seats');
                popupSeats.textContent = `${show.seats}석`;
                if (show.status === "마감" || show.seats === 0) {
                    popupSeats.textContent = '마감';
                }
                timeBoxPopup.appendChild(popupSeats);

                timeBox.appendChild(timeBoxPopup); 
                timesWrapper.appendChild(timeBox);
            });

            allShowtimesContainer.appendChild(screenShowtimeGroup);
        }

        
        movieTitleItem.appendChild(allShowtimesContainer);
        movieList.appendChild(movieTitleItem); 
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayMovies();
});


const toTheTop = document.getElementById('tothetop');

window.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
});

