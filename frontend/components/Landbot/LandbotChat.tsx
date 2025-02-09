// components/LandbotChat.tsx
"use client"
import { useEffect } from 'react';

const LandbotChat = () => {
    useEffect(() => {
        const initLandbot = () => {
            if (!document.getElementById('landbot-script')) {
                const script = document.createElement('script');
                script.id = 'landbot-script';
                script.type = 'module';
                script.async = true;

                script.addEventListener('load', () => {
                    // @ts-ignore - Ignore TypeScript error if Landbot types are not available
                    const myLandbot = new Landbot.Livechat({
                        configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2778762-FFY69BSOL1BR6R0A/index.json',
                    });
                });

                script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';
                document.body.appendChild(script);
            }
        };

        // Initialize Landbot on mouseover or touchstart
        window.addEventListener('mouseover', initLandbot, { once: true });
        window.addEventListener('touchstart', initLandbot, { once: true });

        // Cleanup event listeners when component unmounts
        return () => {
            window.removeEventListener('mouseover', initLandbot);
            window.removeEventListener('touchstart', initLandbot);
        };
    }, []);

    return null; // This component doesn't render anything visually
};

export default LandbotChat;
