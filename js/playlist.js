document.addEventListener("DOMContentLoaded", function () {
  const detailPanel = document.querySelector(".detail-panel");
  const detailOverlay = document.querySelector(".detail-overlay");

  const detailCover = document.querySelector(".detail-cover");
  const detailTitle = document.querySelector(".detail-info h2");
  const detailArtist = document.querySelector(".detail-info p");
  const detailTags = document.querySelector(".detail-tags");
  const detailText = document.querySelector(".detail-text");
  const detailArrow = document.querySelector(".detail-arrow");

  const playButton = document.querySelector(".play-button");
  const audio = document.querySelector("#detail-audio");

  const songData = {
    "super-duper": {
      title: "Mash It To The Youth Man, Mash It",
      artist: "Musical Youth",
      cover: "./img/album/musicalyouth.jpg",
      audio: "./audio/superduper.mp3",
      link: "special.html",
      overlayClass: "overlay-yellow",
      tags: ["Radiant", "Purple Heatwave"],
      text: `
        <p>
          영국 버밍엄 출신의 청소년 레게 밴드 <span class="en">Musical Youth</span>가 발표한 곡이다.
          곡은 거리의 활기와 청춘의 에너지를 내세운다.
        </p>
      `
    },

    "ngiculela": {
      title: "Ngiculela-Es Una Historia",
      artist: "Stevie Wonder",
      cover: "./img/album/ngiculela.jpg",
      audio: "./audio/ngiculela.mp3",
      link: "ngiculela.html",
      overlayClass: "overlay-red",
      tags: ["Radiant", "Purple Heatwave"],
      text: `
        <p>
          1976년 앨범 <span class="en">Songs in the Key of Life</span>에 수록된 곡으로,
          여러 언어가 교차하는 구조를 통해 노래한다는 행위를 하나의 세계관으로 확장한다.
        </p>
      `
    },

    "iwantyou": {
      title: "I Want You Back",
      artist: "Jackson 5",
      cover: "./img/album/iwantyou.jpg",
      audio: "./audio/iwantyou.mp3",
      link: "special.html",
      overlayClass: "overlay-skyblue",
      tags: ["Radiant"],
      text: `
        <p>
          1969년 발표된 <span class="en">Jackson 5</span>의 데뷔 싱글이다.
          젊음의 낙관과 순수한 열정을 압축한 곡에 가깝다.
        </p>
      `
    }
  };

  document.querySelectorAll("[data-song]").forEach(function (button) {
    button.addEventListener("click", function () {
      const songId = button.dataset.song;
      const data = songData[songId];

      if (!data) return;

      detailTitle.innerHTML = data.title;
      detailArtist.textContent = data.artist;
      detailCover.src = data.cover;
      detailArrow.href = data.link;

      detailTags.innerHTML = data.tags
        .map(function (tag) {
          return `<span>${tag}</span>`;
        })
        .join("");

      detailText.innerHTML = data.text;

      detailOverlay.className = "detail-overlay";
      detailOverlay.classList.add(data.overlayClass);

      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.src = data.audio;
      }

      if (playButton) {
        playButton.textContent = "▶";
        playButton.classList.remove("is-playing");
      }

      document.body.classList.add("detail-open");
      detailPanel.setAttribute("aria-hidden", "false");
    });
  });

  if (detailOverlay) {
    detailOverlay.addEventListener("click", function () {
      document.body.classList.remove("detail-open");
      detailPanel.setAttribute("aria-hidden", "true");

      if (audio) {
        audio.pause();
      }

      if (playButton) {
        playButton.textContent = "▶";
        playButton.classList.remove("is-playing");
      }
    });
  }

  if (playButton && audio) {
    playButton.addEventListener("click", function () {
      if (playButton.classList.contains("is-playing")) {
        audio.pause();
        playButton.textContent = "▶";
        playButton.classList.remove("is-playing");
      } else {
        audio.play();
        playButton.textContent = "❚❚";
        playButton.classList.add("is-playing");
      }
    });

    audio.addEventListener("ended", function () {
      playButton.textContent = "▶";
      playButton.classList.remove("is-playing");
    });
  }
});