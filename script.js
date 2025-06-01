document.addEventListener("DOMContentLoaded", function () {
  let player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player("ytplayer", {
      height: "180",
      width: "320",
      videoId: "fGSnkunPijg",
      playerVars: {
        autoplay: 0,
        controls: 0,
      },
      events: {
        onReady: () => {},
      },
    });
  }

  // Load YouTube IFrame API asynchronously
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.body.appendChild(tag);
  window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

  // Play/pause functions
  window.playVideo = () => {
    if (player) player.playVideo();
  };
  window.pauseVideo = () => {
    if (player) player.pauseVideo();
  };

  // Modal toggle
  const galleryModal = document.getElementById("galleryModal");
  const friendsModal = document.getElementById("friendsModal");
  const openGalleryBtn = document.getElementById("openGallery");
  const closeGalleryBtn = document.getElementById("closeGallery");
  const openFriendsBtn = document.getElementById("openFriends");
  const closeFriendsBtn = document.getElementById("closeFriends");

  openGalleryBtn.addEventListener("click", () => {
    galleryModal.classList.add("active");
  });

  closeGalleryBtn.addEventListener("click", () => {
    galleryModal.classList.remove("active");
  });

  openFriendsBtn.addEventListener("click", () => {
    friendsModal.classList.add("active");
  });

  closeFriendsBtn.addEventListener("click", () => {
    friendsModal.classList.remove("active");
  });
});
