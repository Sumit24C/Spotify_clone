const home = document.getElementById("home-icon")
console.log(home)
const likedSongs = document.getElementById("liked-songs")
const japaneseSongs = document.getElementById("japanese-songs")
const hindiSongs = document.getElementById("hindi-songs")
const rightContainer = document.querySelector(".right-container")
const temp = rightContainer.innerHTML
console.log(temp)
const dynamicContainer = document.querySelector(".dynamic-container")


home.addEventListener("click", function(){
    rightContainer.innerHTML = temp
})
likedSongs.addEventListener("click", function () {
    rightContainer.innerHTML = ""
    let dynamicContainer = `<div class="dynamic-container">
                <div class="navbar flex align-center">
                    <img src="liked.png" alt="liked">
                    <div class="current-list-info">
                        <p>Playlist</p>
                        <h1>Liked Songs</h1>
                        <h6>56 songs</h6>
                    </div>
                </div>
                <i class="fa-solid fa-play play-icon"></i>

            </div>`
    rightContainer.innerHTML = rightContainer.innerHTML + dynamicContainer
})

japaneseSongs.addEventListener("click", function () {
    rightContainer.innerHTML = ""
    let dynamicContainer = `<div class="dynamic-container">
                <div class="navbar flex align-center">
                    <img src="japan.png" alt="liked">
                    <div class="current-list-info">
                        <p>Playlist</p>
                        <h1>Japanese Songs</h1>
                        <h6>6 songs</h6>
                    </div>
                </div>
                <i class="fa-solid fa-play play-icon"></i>

            </div>`
    rightContainer.innerHTML = rightContainer.innerHTML + dynamicContainer
})

hindiSongs.addEventListener("click", function () {
    rightContainer.innerHTML = ""
    let dynamicContainer = `<div class="dynamic-container">
                <div class="navbar flex align-center">
                    <img src="hindi.png" alt="liked">
                    <div class="current-list-info">
                        <p>Playlist</p>
                        <h1>Hindi Songs</h1>
                        <h6>12 songs</h6>
                    </div>
                </div>
                <i class="fa-solid fa-play play-icon"></i>

            </div>`
    rightContainer.innerHTML = rightContainer.innerHTML + dynamicContainer
})


