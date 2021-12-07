export function onNavigate(nav) {
  window.history.pushState({}, '', nav)
  window.dispatchEvent(new PopStateEvent('popstate'))
}
