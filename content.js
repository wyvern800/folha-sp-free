// Your function to manipulate components
let removed = [];

function manipulateComponents() {
  let hasAllComponentsRemoved =
    removed?.length === 4 &&
    removed.includes("paywallFill") &&
    removed.includes("paywallFlutuante") &&
    removed.includes("cTopSignup") &&
    removed.includes("paywallContent");

  if (hasAllComponentsRemoved) { 
    console.log('skipped');
    
    return; 
  }

  const paywallFill = document.getElementById("paywall-fill");
  const paywallFlutuante = document.getElementById("paywall-flutuante");
  const cTopSignup = document.getElementById("top-signup-close-bf");
  const paywallContent = document.getElementById("paywall-content");

  const actions = [
    {
      name: "paywallFill",
      exec: () => {
        if (paywallFill && !removed.includes("paywallFill")) {
          paywallFill.style.backgroundImage = "";
          paywallFill.style.opacity = 0;
          removed.push("paywallFill");
        }
      },
    },
    {
      name: "paywallFlutuante",
      exec: () => {
        if (paywallFlutuante && !removed.includes("paywallFlutuante")) {
          paywallFlutuante.remove();
          removed.push("paywallFlutuante");
        }
      },
    },
    {
      name: "cTopSignup",
      exec: () => {
        if (cTopSignup && !removed.includes("cTopSignup")) {
          cTopSignup.remove();
          removed.push("cTopSignup");
        }
      },
    },
    {
      name: "paywallContent",
      exec: () => {
        if (paywallContent && !removed.includes("paywallContent")) {
          paywallContent.style.overflowY = "scroll";
          removed.push("paywallContent");
        }
      },
    },
  ];

  for (const action of actions) {
    console.log(action.name + " executed!");
    action.exec();
  }
}

// Set the interval to run your function every 2 seconds (adjust as needed)
const intervalTime = 2000; // 2 seconds

setInterval(manipulateComponents, intervalTime);
