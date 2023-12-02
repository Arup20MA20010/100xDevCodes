var player = videojs(
  "my-video",
  {
    controls: true,
    fluid: true,
    html5: {
      vhs: {
        overrideNative: true,
      },
    },
  },
  function () {
    var player = this;
    player.eme();
    player.src({
      src: "https://cdn.bitmovin.com/content/assets/art-of-motion_drm/mpds/11331.mpd",
      type: "application/dash+xml",
      keySystems: {
        "com.widevine.alpha": "https://cwip-shaka-proxy.appspot.com/no_auth",
      },
    });

    player.ready(function () {
      player.tech(true).on("keystatuschange", function (event) {
        console.log("event: ", event);
      });
    });
  }
);
// Listen for the 'loadedmetadata' event to get the duration of the video
player.on("loadedmetadata", function () {
  // Access the duration and create chapter markers
  createChapterMarkers(player.duration());
});
function lowerBound(arr, target) {
  let low = Number(0);
  let high = Number(arr.length - 1);
  let ans = Number(-1);
  while (high >= low) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= target) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}
function createChapterMarkers(duration) {
  // Define chapter information (time in seconds and title)
  var chapters = [
    { time: 0, title: "Chapter 1", description: "This is Chapter 1" },
    {
      time: duration * 0.25,
      title: "Chapter 2",
      description: "This is Chapter 2",
    },
    {
      time: duration * 0.5,
      title: "Chapter 3",
      description: "This is Chapter 3",
    },
    {
      time: duration * 0.75,
      title: "Chapter 4",
      description: "This is Chapter 4",
    },
  ];
  let intervals = [0, 0.25, 0.5, 0.75, 1];
  //adding the scroll effect
  let progressControl = player.controlBar.progressControl.el();
  //   let controlBar = document.querySelector(".vjs-progress-control.vjs-control");
  progressControl.addEventListener("mousemove", function (e) {
    // console.log(progressControl);
    let mouseX = e.clientX - progressControl.getBoundingClientRect().x;
    let progressWidth = progressControl.offsetWidth;
    let fraction = mouseX / progressWidth;
    // console.log(fraction);
    let index = lowerBound(intervals, fraction);
    let chapterTitle = chapters[index].title;
    const mouseTimeDisplay =
      player.controlBar.progressControl.seekBar.mouseTimeDisplay;
    const mouseTimeDiv = mouseTimeDisplay.el();
    // console.log(mouseTimeDiv.children.length);
    let chapterDiv = document.createElement("div");
    chapterDiv.className = "vjs-time-tooltip";
    chapterDiv.textContent = chapterTitle;
    // const timeStyle = mouseTimeDiv.children[0].getBoundingClientRect();
    // console.log(timeStyle);
    // console.log(timeStyle);
    const toolTip = document.querySelector(".vjs-time-tooltip");
    const timeStyle = toolTip.getBoundingClientRect();
    chapterDiv.style.right = `${timeStyle.x - 82}px`;
    chapterDiv.style.height = `${timeStyle.height + 13}px`;
    // chapterDiv.style.rigth = `${timeStyle.x - 20}%`;
    // chapterDiv.style.top = `${timeStyle.y - 30}px`;
    // chapterDiv.style.bottom = `${timeStyle.y - 10}px`;
    if (mouseTimeDiv.children.length == 1) {
      mouseTimeDiv.append(chapterDiv);
    } else {
      //   console.log("Moved");
      mouseTimeDiv.children[1].innerText = chapterTitle;
    }
    // console.log(mouseTimeDiv);
  });
  // Create a custom overlay for each chapter
  chapters.forEach(function (chapter) {
    const marker = document.createElement("div");
    marker.className = "vjs-chapter-marker";
    marker.textContent = chapter.title;
    // Calculate the position of the chapter marker
    var position = (chapter.time / duration) * 100;
    marker.style.left = `${position}%`;
    const li = document.createElement("li");
    li.append(marker);
    const chaptersContainer = document.querySelector("#ChaptersList");
    li.classList.add("button");
    li.addEventListener("click", function () {
      player.currentTime(chapter.time);
    });
    chaptersContainer.append(li);
    //   chaptersDiv.append(marker);
  });
}
