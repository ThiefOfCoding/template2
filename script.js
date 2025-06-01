document.addEventListener("DOMContentLoaded", function () {
  let player;

  // YouTube API setup
  function onYouTubeIframeAPIReady() {
    player = new YT.Player("ytplayer", {
      height: "180",
      width: "320",
      videoId: "fGSnkunPijg",
      playerVars: {
        playsinline: 1,
        controls: 0,
        modestbranding: 1,
      },
    });
  }

  window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

  // Load YouTube iframe API script
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Modal Elements
  const galleryModal = document.getElementById("galleryModal");
  const friendsModal = document.getElementById("friendsModal");

  // Buttons
  const openGalleryBtn = document.getElementById("openGallery");
  const closeGalleryBtn = document.getElementById("closeGallery");
  const openFriendsBtn = document.getElementById("openFriends");
  const closeFriendsBtn = document.getElementById("closeFriends");

  // Open Gallery Modal
  openGalleryBtn.addEventListener("click", () => {
    galleryModal.classList.add("active");
    friendsModal.classList.remove("active");
    document.body.classList.add("blurred");
  });

  // Close Gallery Modal
  closeGalleryBtn.addEventListener("click", () => {
    galleryModal.classList.remove("active");
    document.body.classList.remove("blurred");
  });

  // Open Friends Modal
  openFriendsBtn.addEventListener("click", () => {
    friendsModal.classList.add("active");
    galleryModal.classList.remove("active");
    document.body.classList.add("blurred");
  });

  // Close Friends Modal
  closeFriendsBtn.addEventListener("click", () => {
    friendsModal.classList.remove("active");
    document.body.classList.remove("blurred");
  });

  // Play YouTube video
  window.playVideo = function () {
    if (player) player.playVideo();
  };

  // Pause YouTube video
  window.pauseVideo = function () {
    if (player) player.pauseVideo();
  };
});
