import React, { useEffect } from 'react';

export default function HeaderChatBot() {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = 'https://mediafiles.botpress.cloud/72644bb8-3a35-44c1-a2cc-92ccc47c898d/webchat/config.js';
    script2.defer = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null; // No necesitas un contenedor, ya que este componente no renderiza nada visible
}
