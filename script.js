const musicInfo = [
  {
    musicName: "Perfect",
    musicSrc: "https://www.dropbox.com/s/3mjzj73400sxovk/perfect.mp3?raw=1",
    artistName: "Ed Sheeran",
    musicPoster: "https://www.dropbox.com/s/crlthbozdznb13g/perfect.jpeg?raw=1",
    liked: true,
  },
  {
    musicName: "Stay",
    musicSrc: "https://www.dropbox.com/s/umam9olakop001d/stay.mp3?raw=1",
    artistName: "Justin Bieber",
    musicPoster: "https://www.dropbox.com/s/kierj5lzst1yx9n/stay.jpg?raw=1",
  },
  
  {
    musicName: "Happier",
    musicSrc: "https://www.dropbox.com/s/zp1xfir101y4sc3/happier.mp3?raw=1",
    artistName: "Marshmello",
    musicPoster: "https://www.dropbox.com/s/xxmwcz14hkn7iwl/happier.png?raw=1",
    liked: true,
  },
  {
    musicName: "Girls Like You",
    musicSrc:
      "https://www.dropbox.com/s/yi1cpg16snrl3fc/girls-like-you.mp3?raw=1",
    artistName: "Maroon 5",
    musicPoster:
      "https://www.dropbox.com/s/ouq5zzgbqsk9zx0/girls-like-you.png?raw=1",
    liked: true,
  },
  {
    musicName: "7 Rings",
    musicSrc: "https://www.dropbox.com/s/yo5tcfdjoz95ozf/7-rings.mp3?raw=1",
    artistName: "Ariana Grande",
    musicPoster: "https://www.dropbox.com/s/gobvfxj4r0t053v/7-rings.jpg?raw=1",
  },
  {
      musicName: "My Addiction",
       artistName: "Alex Guesta",
       musicSrc: "./music/song2.mp3",
       musicPoster: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg",
       liked: false,
     },
     
];

  const addSong = () => {
  const musicName = prompt("Enter the song name:");
  const musicSrc = prompt("Enter the MP3 file URL:");
  const newSong = {
    musicName: musicName,
    musicSrc: musicSrc,
    artistName: artistName,
    musicPoster: musicPoster,
  };

  musicInfo.push(newSong);
  updatePlaylist();
  musicIndex = musicInfo.length - 1;
  currentMusic(musicIndex);
  playMusic();

  const addSong = () => {
  const musicName = prompt("Enter the song name:");

  // Check if the user cancels adding a song
  if (musicName === null) {
    return; // Do nothing if the user cancels
  }

  const musicSrc = prompt("Enter the MP3 file URL:");
  const artistName = prompt("Enter the artist name:");
  const musicPoster = prompt("Enter the poster image URL:");

  const newSong = {
    musicName: musicName,
    musicSrc: musicSrc,
    artistName: artistName,
    musicPoster: musicPoster,
  };

  musicInfo.push(newSong);

  // Sort the musicInfo array by index to maintain the order
  musicInfo.sort((a, b) => musicInfo.indexOf(a) - musicInfo.indexOf(b));

  updatePlaylist();

  // Automatically play the newly added song
  currentPlayingIndex = musicInfo.length - 1;
  currentMusic(currentPlayingIndex);
  playMusic();
  const addSong = () => {
    const musicName = prompt("Enter the song name:");
  
    // Check if the user cancels adding a song
    if (musicName === null) {
      // Play the previously playing song and exit
      playMusic();
      return;
    }
  
    const musicSrc = prompt("Enter the MP3 file URL:");
    const artistName = prompt("Enter the artist name:");
    const musicPoster = prompt("Enter the poster image URL:");
  
    const newSong = {
      musicName: musicName,
      musicSrc: musicSrc,
      artistName: artistName,
      musicPoster: musicPoster,
    };
  
    musicInfo.push(newSong);
  
    // Sort the musicInfo array by index to maintain the order
    musicInfo.sort((a, b) => musicInfo.indexOf(a) - musicInfo.indexOf(b));
  
    updatePlaylist();
  
    // Automatically play the newly added song
    currentPlayingIndex = musicInfo.length - 1;
    currentMusic(currentPlayingIndex);
    playMusic();
  };
};
};

const updatePlaylist = () => {
  playlist.innerHTML = "";

  musicInfo.forEach((item, index) => {
    let playlistItem = document.createElement("div");
    playlistItem.classList.add("playlist-item");
    // ... (similar code to your existing playlist item creation)
    playlist.appendChild(playlistItem);
  });

  const playlistItems = document.querySelectorAll(".playlist-item");
  playlistItems.forEach((item, index) => {
    item.onclick = () => {
      currentMusic(index);
      closePlaylist();
      playMusic();
    };
  });

  posterContainer.innerHTML = "";
  musicInfo.forEach((item, index) => {
    let poster = document.createElement("img");
    poster.classList.add("poster");
    poster.src = item.musicPoster;
    poster.alt = item.musicName;
    posterContainer.appendChild(poster);
  });
};

const addSongButton = document.querySelector("button");
addSongButton.onclick = () => addSong();
const musicPlaylist = document.querySelector(".music-playlist");
const musicPlayer = document.querySelector(".music-player");
const playlistOpenBtn = document.querySelector(".playlist-open-btn");
const playlistCloseBtn = document.querySelector(".playlist-close-btn");
const playlist = document.querySelector(".playlist");

const openPlaylist = () => {
  musicPlayer.classList.add("open");
  musicPlaylist.classList.add("open");
};

const closePlaylist = () => {
  musicPlayer.classList.remove("open");
  musicPlaylist.classList.remove("open");
};

playlistOpenBtn.onclick = () => openPlaylist();
playlistCloseBtn.onclick = () => closePlaylist();

// Hammer.js swipe for playlist and player center
let manager1 = new Hammer.Manager(musicPlayer);
let Swipe1 = new Hammer.Swipe();
manager1.add(Swipe1);

manager1.on("swipe", function (e) {
  let direction = e.offsetDirection;
  if (direction == 16) {
    openPlaylist();
  }
  if (direction == 8) {
    closePlaylist();
  }
});

const playerCenter = document.querySelector(".player-center");
let manager = new Hammer.Manager(playerCenter);
let Swipe = new Hammer.Swipe();
manager.add(Swipe);

manager.on("swipe", function (e) {
  let direction = e.offsetDirection;
  if (direction == 4) {
    musicIndex = musicIndex - 1;
    currentMusic(musicIndex);
    playMusic();
  } else if (direction == 2) {
    musicIndex = musicIndex + 1;
    currentMusic(musicIndex);
    playMusic();
  }
});

musicInfo.forEach((item, index) => {
  let playlistItem = document.createElement("div");
  playlistItem.classList.add("playlist-item");

  let playlistItemPoster = document.createElement("div");
  playlistItemPoster.classList.add("playlist-item-poster");
  playlistItem.appendChild(playlistItemPoster);

  let playlistItemPosterImg = document.createElement("img");
  playlistItemPosterImg.src = item.musicPoster;
  playlistItemPoster.appendChild(playlistItemPosterImg);

  let playlistItemInfo = document.createElement("div");
  playlistItemInfo.classList.add("playlist-item-info");
  playlistItem.appendChild(playlistItemInfo);

  let playlistItemName = document.createElement("p");
  playlistItemName.classList.add("plalist-item-name");
  playlistItemName.innerText = item.musicName;
  playlistItemInfo.appendChild(playlistItemName);

  let playlistItemArtist = document.createElement("p");
  playlistItemArtist.classList.add("playlist-artist-name");
  playlistItemArtist.innerText = item.artistName;
  playlistItemInfo.appendChild(playlistItemArtist);

  let playlistHeartBtn = document.createElement("div");
  playlistHeartBtn.classList.add("playlist-heart-btn");
  playlistItem.appendChild(playlistHeartBtn);

  let playlistHeartIcon = document.createElement("i");
  playlistHeartIcon.setAttribute("class", "fa fa-heart playlist-heart-icon");
  playlistHeartBtn.appendChild(playlistHeartIcon);

  let playlistMenuBtn = document.createElement("div");
  playlistMenuBtn.classList.add("playlist-heart-btn");
  playlistItem.appendChild(playlistMenuBtn);

  let playlistMenuIcon = document.createElement("i");
  playlistMenuIcon.setAttribute(
    "class",
    "fa fa-ellipsis-v playlist-item-menu-icon"
  );
  playlistMenuBtn.appendChild(playlistMenuIcon);

  playlist.appendChild(playlistItem);
});

const playlistItems = document.querySelectorAll(".playlist-item");
playlistItems.forEach((item, index) => {
  item.onclick = () => {
    currentMusic(index);
    closePlaylist();
    playMusic();
  };
});

const posterContainer = document.querySelector(".poster-container");
musicInfo.forEach((item, index) => {
  let poster = document.createElement("img");
  poster.classList.add("poster");
  poster.src = item.musicPoster;
  poster.alt = item.musicName;
  posterContainer.appendChild(poster);
});

const audio = document.querySelector(".audio");
const bg = document.querySelector(".bg");
let musicName = document.querySelector(".music-name");
let artistName = document.querySelector(".artist-name");
let musicIndex = 0;

const currentMusic = (index) => {
  let i = index % musicInfo.length;
  bg.src = musicInfo[i].musicPoster;
  posterContainer.style.left = -(i * 100) + "%";
  musicName.innerText = musicInfo[i].musicName;
  artistName.innerText = musicInfo[i].artistName;
  audio.src = musicInfo[i].musicSrc;
};

currentMusic(musicIndex);

// Music controls
const prevBtn = document.querySelector(".back-btn");
const playBtn = document.querySelector(".play-btn");
const nextBtn = document.querySelector(".forward-btn");
const loopBtn = document.querySelector(".loop-btn");
const shuffleBtn = document.querySelector(".shuffle-btn");

let isPlaying = false;
let isShuffle = false;
let isLoop = false;

playBtn.onclick = () => {
  startMusic();
};

const startMusic = () => {
  isPlaying ? pauseMusic() : playMusic();
};

loopBtn.onclick = () => {
  isLoop = !isLoop;
  if (isLoop == true) {
    loopBtn.classList.add("active");
  } else {
    loopBtn.classList.remove("active");
  }
};

shuffleBtn.onclick = () => {
  isShuffle = !isShuffle;
  if (isShuffle == true) {
    shuffleBtn.classList.add("active");
  } else {
    shuffleBtn.classList.remove("active");
  }
};

nextBtn.onclick = () => {
  nextMusic();
};

const nextMusic = () => {
  musicIndex = musicIndex + 1;
  currentMusic(musicIndex);
  playMusic();
};

prevBtn.onclick = () => {
  prevMusic();
};

const prevMusic = () => {
  musicIndex = musicIndex - 1;
  currentMusic(musicIndex);
  playMusic();
};

const playMusic = () => {
  isPlaying = true;
  audio.play();
  playBtn.classList.replace("fa-play-circle", "fa-pause-circle-o");
};

const pauseMusic = () => {
  isPlaying = false;
  audio.pause();
  playBtn.classList.replace("fa-pause-circle-o", "fa-play-circle");
};

// Music timebar
const current = document.querySelector(".music-current-time");
const duration = document.querySelector(".music-duration-time");

if (duration.innerText == "NaN:0NaN") {
  duration.innerText = "0:00";
}

audio.addEventListener("timeupdate", () => {
  let time = audio.currentTime;
  let seconds = Math.floor(time % 60);
  let minutes = Math.floor(time / 60);

  if (seconds < 10) {
    current.innerText = minutes + ":0" + seconds;
  } else if (minutes >= 0 && seconds >= 0) {
    current.innerText = minutes + ":" + seconds;
  } else {
    current.innerText = minutes + ":0" + seconds;
  }

  time = audio.duration;
  seconds = Math.floor(time % 60);
  minutes = Math.floor(time / 60);

  if (seconds < 10) {
    duration.innerText = minutes + ":0" + seconds;
  } else if (minutes >= 0 && seconds >= 0) {
    duration.innerText = minutes + ":" + seconds;
  } else {
    duration.innerText = "0:00";
  }

  const timebarCicle = document.querySelector(".music-current-length-circle");
  const timebar = document.querySelector(".music-current-length");


  timebar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
  timebarCicle.style.left = (audio.currentTime / audio.duration) * 100 + "%";

  if (isLoop === false && isShuffle === false && audio.currentTime === audio.duration) {
    musicIndex = musicIndex + 1;
    currentMusic(musicIndex);
    playMusic();
  } else if (isLoop === true && audio.currentTime === audio.duration) {
    audio.currentTime = 0;
    playMusic();
  } else if (isShuffle === true && audio.currentTime === audio.duration) {
    musicIndex = Math.floor(Math.random() * musicInfo.length);
    currentMusic(musicIndex);
    playMusic();
  }
});

const musicTimebar = document.querySelector(".music-timebar");
musicTimebar.addEventListener("click", (e) => {
  let a = e.offsetX;
  const b = e.srcElement.clientWidth;
  audio.currentTime = (a / b) * audio.duration;
});

window.addEventListener("keydown", (e) => {
  let code = e.keyCode;
  if (code === 32) {
    startMusic();
  }
  if (code === 39) {
    audio.currentTime += 5;
    playMusic();
  }
  if (code === 37) {
    playMusic();
    audio.currentTime -= 5;
  }
});

      