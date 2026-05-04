import ReactGA from "react-ga4";

const GA_ID = "G-9EHLN4BPGH";

let initialized = false;

export function initAnalytics() {
  if (initialized) return;

  ReactGA.initialize(GA_ID);

  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
    title: document.title,
  });

  initialized = true;
}

export function trackEvent(eventName, params = {}) {
  if (!initialized) return;
  ReactGA.event(eventName, params);
}

export function trackPageView(path = window.location.pathname + window.location.search) {
  if (!initialized) return;

  ReactGA.send({
    hitType: "pageview",
    page: path,
    title: document.title,
  });
}
