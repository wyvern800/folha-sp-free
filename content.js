const originalFetch = window.fetch;
window.fetch = function (url, options) {
  if (url === 'https://paywall.folha.uol.com.br/wall.json') {
    console.log('Blocking request:', url);
   
    return new Promise(() => {});  
  }
  return originalFetch(url, options);  
};