addEventListener('load', () => document.body.scrollTop = +localStorage.getItem(location.pathname));
addEventListener('beforeunload', () => localStorage.setItem(location.pathname, document.body.scrollTop));
