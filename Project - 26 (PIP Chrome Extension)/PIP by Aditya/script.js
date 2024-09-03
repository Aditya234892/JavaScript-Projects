function findLargestRectangleVideoTag() {
  const videosArray = Array.from(document.querySelectorAll("video"));

  const readyToPlayVideos = videosArray.filter((video) => {
    return video.readyState != 0 && video.disablePictureInPicture == false;
  });

  const videos = readyToPlayVideos.sort((a, b) => {
    const v1VideoRectangle = a.getClientRects()[0] || { width: 0, height: 0 };
    const v2VideoRectangle = b.getClientRects()[0] || { width: 0, height: 0 };
    return (
      v2VideoRectangle.width * v2VideoRectangle.height - v1VideoRectangle.width * v1VideoRectangle.height );
  });

  if (videos.length === 0) {
    return;
  }
  return videos[0];
}

async function requestForPIP(video) {
  await video.requestPictureInPicture();
  video.setAttribute("pipEnabled", true);
  video.addEventListener(
    "leavepictureinpicture",
    (event) => {
      video.removeAttribute("pipEnabled");
    },
    { once: true }
  );
  new ResizeObserver(checkAndUpdatePIPVideo).observe(video);
}

function checkAndUpdatePIPVideo(entries, observer) {
  const observedVideo = entries[0].target;
  if (!document.querySelector("[pipEnabled]")) {
    observer.unobserve(observedVideo);
    return;
  }
  const video = findLargestRectangleVideoTag();
  if (video && !video.hasAttribute("pipEnabled")) {
    observer.unobserve(observedVideo);
    requestForPIP(video);
  }
}

(async () => {
  const video = findLargestRectangleVideoTag();
  if (!video) {
    return;
  }
  if (video.hasAttribute("pipEnabled")) {
    document.exitPictureInPicture();
    return;
  }
  await requestForPIP(video);
})();
