import headlines from './headlines.js'

const ecosystems = ['os','eth','dot','bnb','trx','eos','neo']

const getNewsFeedItems = () => {
  let feedItems = []
  for (let [i, headline] of headlines.entries()) {
    feedItems.push(`<li class="os-news-feed__list-item">${headline}</li>`)
  }
  return feedItems.join('')
}

const animateHeaderNewsFeed = () => {
  const newsFeedItemEls = document.querySelectorAll('.os-news-feed__list-item')
  let i = 0
  const headerNewsPoller = setInterval(() => {
    i++
    let prevNewsItem = i <= 0 ? newsFeedItemEls[newsFeedItemEls.length] : newsFeedItemEls[i-1]
    i >= newsFeedItemEls.length ? i = 0 : ''
    for (let newsFeedItem of newsFeedItemEls) {
      prevNewsItem.classList.remove('fade-in')

    }
  }, 6000)
}

const initHeaderNewsFeed = () => {
  const newsFeedEl = document.querySelector('.os-news-feed__inner') ? document.querySelector('.os-news-feed__inner') : ''
  let newsFeedItems = getNewsFeedItems()
  let headerNewsFeedList = `
    <ul class="os-news-feed__list">
      ${newsFeedItems}
    </ul>
  `
  newsFeedEl.innerHTML = headerNewsFeedList
  // animateHeaderNewsFeed()
}

const setConsentListeners = () => {
  const consentBtnEl = document.querySelector('.xvr-consent-banner-hide') ? document.querySelector('.xvr-consent-banner-hide') : ''
  const consentBannerEl = document.querySelector('.xvr-consent-banner') ? document.querySelector('.xvr-consent-banner') : ''

  consentBtnEl.addEventListener('click', () => {
    consentBannerEl ? consentBannerEl.remove() : ''
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initHeaderNewsFeed()
  setConsentListeners()
})
