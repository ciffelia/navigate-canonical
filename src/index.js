const navigate = () => {
  location.href = document.querySelector('link[rel=canonical]').href
}

GM_registerMenuCommand('Go to the canonical page', navigate, 'g')
