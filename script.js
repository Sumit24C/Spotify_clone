const home = document.getElementById("home-icon")
const rightContainer = document.querySelector(".right-container")
const temp = rightContainer.innerHTML

home.addEventListener("click", function () {
    rightContainer.innerHTML = temp
})

const Songs = [
    {
        id: 1,
        songName: `Mr. Green Apple
                    <p>Mr. Green Apple </p>`,
        songImg: "img/SongImg/1.jpeg",
        audio: `Audio/1.mp3`,
        totalTime: '3:32'
    },
    {
        id: 2,
        songName: `Shinunoga E-Wa
                    <p>Fujii Kaze</p>`,
        songImg: "img/SongImg/2.jpeg",
        audio: `Audio/2.mp3`,
        totalTime: '3:05'


    },
    {
        id: 3,
        songName: `We'll Be Alright
                    <p>RADWIMPS</p>`,
        songImg: "img/SongImg/3.jpeg",
        audio: `Audio/3.mp3`,
        totalTime: '5:35'


    },
    {
        id: 4,
        songName: `Zenzenzense - movie ver
                    <p>RADWIMPS</p>`,
        songImg: "img/SongImg/4.jpeg",
        audio: `Audio/4.mp3`,
        totalTime: '4:45'


    },
    {
        id: 5,
        songName: `Deva Deva(From Bramhastra)
                  <p>Pritam, Arjit Singh </p>`,
        songImg: "img/SongImg/5.jpeg",
        audio: `Audio/5.mp3`,
        totalTime: '4:39'

    },
    {
        id: 6,
        songName: `death bed(Coffee for your head)
                    <p>Powfu, beabadoobee</p>`,
        songImg: "img/SongImg/6.jpeg",
        audio: `Audio/6.mp3`,
        totalTime: '2:53'

    },
    {
        id: 7,
        songName: `I Wanna  Be Yours
                    <p>Arctic Monkeys</p>`,
        songImg: "img/SongImg/7.jpeg",
        audio: `Audio/7.mp3`,
        totalTime: '3:03'


    },
    {
        id: 8,
        songName: `No Friends
                    <p>CADMIUM, Rosendale</p>`,
        songImg: "img/SongImg/8.jpeg",
        audio: `Audio/8.mp3`,
        totalTime: '3:55'


    },
]

const songItems = document.querySelectorAll('.songItem');

Array.from(songItems).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = Songs[i].songImg;
    e.getElementsByTagName('button')[0].innerHTML = Songs[i].id;
    e.getElementsByTagName('h4')[0].innerHTML = Songs[i].songName;
    e.getElementsByClassName('total-time')[0].innerHTML = Songs[i].totalTime;
})

const makeAllBackground = () => {
    Array.from(songItems).forEach((e) => {
        currentBtn = e.getElementsByTagName('button')[0]
        Array.from(currentBtn).forEach((e, i) => {
            e.innerHTML = i
        })
        e.getElementsByTagName('h4')[0].style.color = `#fff`;
        e.getElementsByTagName('button')[0].style.color = `#fff`;
    })
}

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("tracker-no")).forEach((e, i) => {
        e.classList.add("paused")
        e.classList.remove("played")
    })
}

const updateUIForCurrentSong = (songIndex) => {
    Array.from(songItems).forEach((e, i) => {
        if (i == (songIndex - 1)) {
            e.getElementsByTagName('h4')[0].style.color = `rgba(76, 202, 76, 1)`;
            let currentBtn = e.getElementsByTagName('button')[0]
            currentBtn.style.color = `rgba(76, 202, 76, 1)`;
        }
    })

    button.forEach((e, i) => {
        if (i == (songIndex - 1)) {

            if (music.paused) {
                e.classList.add("paused")
                e.classList.remove("played")
            } else {
                e.classList.remove("paused")
                e.classList.add("played")
            }
        }
    })

    Array.from(document.getElementsByClassName("playing-info")).forEach((item) => {
        item.getElementsByTagName('img')[0].src = Songs[songIndex - 1].songImg;
        item.getElementsByTagName('h4')[0].innerHTML = Songs[songIndex - 1].songName;
    })

    // console.log(event.currentTarget.id);
}

const updatePrevNext = (songIndex) => {
    music.src = `Audio/${songIndex}.mp3`;
    togglePlayPause(songIndex)
}

const togglePlayPause = (songIndex) => {

    if (music.paused || music.currentTime <= 0) {
        music.play();
        footPlay.innerHTML = `<i class="fa-solid fa-circle-pause play-btn"></i>`
    } else {
        music.pause();
        footPlay.innerHTML = `<i class="fa-solid fa-circle-play play-btn"></i>`
    }
    makeAllBackground()
    makeAllPlays()
    updateUIForCurrentSong(songIndex)
}

const music = new Audio('Audio/1.mp3')

let songIndex = 1

let button = Array.from(document.getElementsByClassName("tracker-no"))

button.forEach((e, i) => {
    e.addEventListener('click', (event) => {
        songIndex = event.currentTarget.id;
        music.src = `Audio/${songIndex}.mp3`
        togglePlayPause(songIndex, event)
    });
})

let footPlay = document.getElementById("foot-play")
let prev = document.getElementById("prev")
let next = document.getElementById('next')

footPlay.addEventListener("click", () => togglePlayPause(songIndex))

prev.addEventListener('click', () => {
    songIndex = `${eval(`${songIndex} - 1`)}`
    if (songIndex < 1) {
        songIndex = Array.from(Songs).length
    }
    updatePrevNext(songIndex)
})

next.addEventListener('click', () => {
    songIndex = `${eval(`${songIndex} + 1`)}`
    if (songIndex > Array.from(Songs).length) {
        songIndex = 1
    }
    updatePrevNext(songIndex)
})

// duration Bar
let currentDuration = document.getElementById("current-duration")
let totalDuration = document.getElementById("total-duration")
let durationBar = document.getElementById("duration-bar")
let bar2 = document.getElementById("bar2")
let dot = document.getElementsByClassName("dot")[0]

music.addEventListener('timeupdate', () => {
    let musicCurrent = music.currentTime;
    let musicTotal = music.duration;

    let minCurrent = Math.floor(musicCurrent / 60)
    let secCurrent = Math.floor(musicCurrent % 60)

    let minTotal = Math.floor(musicTotal / 60)
    let secTotal = Math.floor(musicTotal % 60)

    if (secCurrent < 10) {
        secCurrent = `0${secCurrent}`
    }

    if (secTotal < 10) {
        secTotal = `0${secTotal}`
    }

    currentDuration.innerHTML = `${minCurrent}:${secCurrent}`
    totalDuration.innerHTML = `${minTotal}:${secTotal}`

    let progressBar = parseInt((musicCurrent / musicTotal) * 100)
    durationBar.value = progressBar
    bar2.style.width = `${durationBar.value}%`
    dot.style.left = `${eval(` ${durationBar.value} - 0.5`)}%`
    // music
});

durationBar.addEventListener('change', () => {
    music.currentTime = durationBar.value * music.duration / 100
    bar2.style.width = `${durationBar.value}%`
    dot.style.left = `${eval(` ${durationBar.value} - 0.5`)}%`
})

// Volume section

let volIcon = document.getElementById("vol-icon")
let vol = document.getElementById("vol-input")
let volBar = document.getElementsByClassName("vol-bar")[0]
let volDot = document.getElementById("vol-dot")

vol.addEventListener('change', () => {
    console.log(vol.value)

    if (vol.value == 0) {
        volIcon.classList.remove('fa-volume-high')
        volIcon.classList.remove('fa-volume-low')
        volIcon.classList.add('fa-volume-off')
    }
    else if (vol.value > 0 && vol.value <= 50) {
        volIcon.classList.remove('fa-volume-high')
        volIcon.classList.add('fa-volume-low')
        volIcon.classList.remove('fa-volume-off')
    }
    else if (vol.value > 50) {
        volIcon.classList.add('fa-volume-high')
        volIcon.classList.remove('fa-volume-low')
        volIcon.classList.remove('fa-volume-off')
    }
    let volControl = vol.value;
    volBar.style.width = `${volControl}%`
    volDot.style.left = `${eval(` ${volControl} - 5`)}%`
    music.volume = volControl / 100;
})





