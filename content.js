const originalFetch = window.fetch;

window.fetch = function (url, options) {
  if (url === 'https://paywall.folha.uol.com.br/wall.json') {
    console.log('Blocking request:', url);
   
    return new Promise(() => {});  
  }
  return originalFetch(url, options);  
};

let removed = [];

const componentsToRemove = [
  { name: "c-top-signup-inner", elementId: "top-signup-close" },
  { name: "c-top-signup--secondary", className: "c-top-signup--secondary" },
  { name: "c-top-signup", className: "c-top-signup" },
  { name: "c-subscribe-ads__description", className: "c-subscribe-ads__description" },
  { name: "comments-tooltip--blue", className: "comments-tooltip--blue" },
  { name: "c-subscribe-ads", className: "c-subscribe-ads" },
  { name: "c-subscribe-ads--azul", className: "c-subscribe-ads--azul" },
];

function manipulateComponents() {
  if (componentsToRemove.every(({ name }) => removed.includes(name))) {
    console.log('skipped');
    return;
  }

  for (const { name, elementId } of componentsToRemove) {
    const component = document.getElementById(elementId) || document.getElementsByClassName(name)[0];
    if (component && !removed.includes(name)) {
      component.remove();
      removed.push(name);
      console.log(name + " executed!");
    }
  }
}

const intervalTime = 1000; // 2 seconds
setInterval(manipulateComponents, intervalTime);