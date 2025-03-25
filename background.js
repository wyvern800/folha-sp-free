chrome.runtime.onInstalled.addListener(() => {
  console.log('Fetch Interceptor Extension Installed');
  
  // Define a rule to block requests to the specific URL
  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: 1,
        priority: 1,
        action: {
          type: 'block'
        },
        condition: {
          urlFilter: 'https://paywall.folha.uol.com.br/wall.json',
          resourceTypes: ['xmlhttprequest'] 
        }
      }
    ],
    removeRuleIds: [1]
  });
});
