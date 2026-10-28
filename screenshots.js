'use strict';
// Public reference captures, matched only to the controls they actually show.
// Screenshots are historical examples, not a claim about every current client.
const screenshotReferences = {
  bitrate: {
    src: 'assets/screenshots/bitrate-control.png',
    alt: 'Emby Advanced settings showing Max streaming bitrate set to Auto.',
    title: 'Find the Max streaming bitrate control',
    caption: 'Official documentation example. App version and capture date are not specified; your layout may differ.',
    source: 'https://emby.media/support/articles/Android-Mobile.html',
    credit: 'Emby documentation',
    shape: 'wide'
  },
  web: {
    src: 'assets/screenshots/web-home-quality-2022.png',
    alt: 'Emby Web Home network quality menu showing Auto and a list of resolution and bitrate options.',
    title: 'Look for Home network quality',
    caption: 'Emby Web community capture from April 2022. The available values and menu layout can differ in newer releases. Choose the highest value your app offers, not necessarily the value in this image.',
    source: 'https://emby.media/community/topic/107507-understanding-home-network-quality/',
    credit: 'justinrh · Emby Community · April 2022',
    shape: 'portrait'
  },
  tv: {
    src: 'assets/screenshots/android-tv-player-2025.png',
    alt: 'Android TV Emby player settings showing Quality at the top and the playback gear at the bottom.',
    title: 'Alternative: adjust quality during a video',
    caption: 'Android TV player menu, February 2025. This adjusts the current video only. Use the main app settings in the steps above for a persistent preference. Fire TV versions may look different.',
    source: 'https://emby.media/community/topic/136022-how-to-adjust-video-quality/',
    credit: 'seanbuff · Emby Community · February 2025',
    shape: 'tv'
  }
};

let screenshotDialog;
function openScreenshot(reference) {
  if (!screenshotDialog) {
    screenshotDialog = document.createElement('dialog');
    screenshotDialog.className = 'screenshot-dialog';
    screenshotDialog.setAttribute('aria-label', 'Enlarged Emby screenshot');
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'smallbtn';
    close.textContent = 'Close screenshot';
    close.addEventListener('click', () => screenshotDialog.close());
    const image = document.createElement('img');
    const caption = document.createElement('p');
    screenshotDialog.append(close, image, caption);
    document.body.append(screenshotDialog);
    screenshotDialog.addEventListener('click', event => {
      if (event.target === screenshotDialog) screenshotDialog.close();
    });
  }
  const image = screenshotDialog.querySelector('img');
  image.src = reference.src;
  image.alt = reference.alt;
  image.style.width = reference.shape === 'portrait' ? '354px' : reference.shape === 'wide' ? '742px' : '669px';
  screenshotDialog.querySelector('p').textContent = reference.caption;
  screenshotDialog.showModal();
}

function makeScreenshot(reference, heading) {
  const figure = document.createElement('figure');
  figure.className = 'reference-shot ' + reference.shape;
  const label = document.createElement('span');
  label.className = 'shot-label';
  label.textContent = heading || 'Real app screenshot';
  const title = document.createElement('h3');
  title.textContent = reference.title;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'shot-enlarge';
  button.setAttribute('aria-label', 'Enlarge screenshot: ' + reference.title);
  const image = document.createElement('img');
  image.src = reference.src;
  image.alt = reference.alt;
  image.loading = 'lazy';
  image.addEventListener('error', () => {
    figure.hidden = true;
    if (figure.id === 'step-screenshot') document.querySelector('.preview-window').hidden = false;
  });
  const hint = document.createElement('span');
  hint.className = 'shot-hint';
  hint.textContent = 'Tap to enlarge';
  button.append(image, hint);
  button.addEventListener('click', () => openScreenshot(reference));
  const caption = document.createElement('figcaption');
  const note = document.createElement('p');
  note.textContent = reference.caption;
  const link = document.createElement('a');
  link.href = reference.source;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'Source: ' + reference.credit;
  caption.append(note, link);
  figure.append(label, title, button, caption);
  return figure;
}

function renderStepScreenshot(device, stepIndex) {
  document.getElementById('step-screenshot')?.remove();
  const illustration = document.querySelector('.preview-window');
  // The Web screenshot shows a persistent app setting, not a player overlay.
  // It belongs only on the step that discusses the global playback controls.
  const reference = device.id === 'android-mobile' && stepIndex === 2
    ? screenshotReferences.bitrate
    : device.id === 'web' && stepIndex === 1
      ? screenshotReferences.web : null;
  illustration.hidden = Boolean(reference);
  if (reference) {
    const figure = makeScreenshot(reference, 'Step ' + (stepIndex + 1) + ' · Real app screenshot');
    figure.id = 'step-screenshot';
    illustration.before(figure);
  }
}

function renderPlayerReference(device) {
  if (device.id !== 'android-tv' && device.id !== 'fire-tv') return;
  const details = document.createElement('details');
  details.className = 'player-reference';
  const summary = document.createElement('summary');
  summary.textContent = 'See a real Android TV player menu (current video only)';
  details.append(summary, makeScreenshot(screenshotReferences.tv));
  document.getElementById('device-extra').append(details);
}
