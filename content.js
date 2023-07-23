let removed = [];

const componentsToRemove = [
  { name: "paywallFill", elementId: "paywall-fill" },
  { name: "paywallFlutuante", elementId: "paywall-flutuante" },
  { name: "cTopSignup", elementId: "top-signup-close-bf" },
  { name: "paywallContent", elementId: "paywall-content" },
];

function manipulateComponents() {
  if (componentsToRemove.every(({ name }) => removed.includes(name))) {
    console.log('skipped');
    return;
  }

  for (const { name, elementId } of componentsToRemove) {
    const component = document.getElementById(elementId);
    if (component && !removed.includes(name)) {
      if (name === "paywallContent") {
        component.style.overflowY = "scroll";
      } else {
        component.remove();
      }
      removed.push(name);
      console.log(name + " executed!");
    }
  }
}

const intervalTime = 2000; // 2 seconds
setInterval(manipulateComponents, intervalTime);