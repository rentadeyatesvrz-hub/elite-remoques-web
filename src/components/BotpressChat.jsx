import { useEffect } from 'react';

export default function BotpressChat() {
  useEffect(() => {
    // Evita inyectar el script más de una vez si React hace re-render
    if (document.getElementById('botpress-webchat-inject')) return;

    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.id = 'botpress-webchat-inject';
    script.async = true;

    script.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Chatea con Mia",
        "botConversationDescription": "Asistente Virtual - Elite Trailers & Yachts",
        "botId": "bcf1a9b6-dee4-46a7-94d0-423962ce9a36",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "bcf1a9b6-dee4-46a7-94d0-423962ce9a36",
        "lazySocket": true,
        "themeName": "prism",
        "botName": "Mia",
        "frontendVersion": "v1",
        "theme": "prism",
        "themeColor": "#3b82f6", // Tailwind blue-500
        "className": "dark-botpress",
        "containerWidth": "100%25",
        "layoutWidth": "100%25",
        "hideWidget": false,
        "disableAnimations": false,
        "closeOnEscape": true,
        "showConversationsButton": true,
        "enableTranscriptDownload": false
      });
    };

    document.body.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.getElementById('botpress-webchat-inject');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      // Note: Botpress doesn't easily expose a destroy method, so the widget UI might remain 
      // if hot-reloaded, but this cleanup prevents multiple inject scripts.
    };
  }, []);

  return null; // Este componente no renderiza UI de React, solo inyecta el widget
}
