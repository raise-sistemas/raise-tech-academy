export function onNavigate(pathname) {
  window.history.pushState({}, '', pathname);
  window.dispatchEvent(new PopStateEvent('popstate'));
}
