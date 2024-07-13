console.log("YouTube Shorts Limiter extension is active");

let viewedShortsCount = 0;
const MAX_SHORTS = 4;
let lastCheckedShort = null;

function checkShorts() {
  const shorts = document.querySelectorAll('ytd-reel-video-renderer');
  const currentShort = Array.from(shorts).find(short => {
    const rect = short.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  });

  if (currentShort && currentShort !== lastCheckedShort) {
    viewedShortsCount++;
    console.log(`Viewed Shorts: ${viewedShortsCount}`);
    lastCheckedShort = currentShort;

    if (viewedShortsCount === MAX_SHORTS) {
      alert('You have watched 3 YouTube Shorts. Take a break! and get redirected to youtube homepage');
      window.location.replace('https://www.youtube.com/')
    }
  }
}



// Run the check every 500ms
setInterval(checkShorts, 500);

// Also check on scroll events
window.addEventListener('scroll', checkShorts);