"use client"
import { useSupabaseAuth } from '@/lib/supabase/provider/auth';
import { useEffect, useRef } from 'react';

// Add this type declaration at the top of your file
declare global {
    interface Window {
        google: any;
    }
}

const GoogleOneTapLogin = ({ onSuccess, onError, mode = 'signin' }) => {
    const { googleOneTapLogin, loading, supabase } = useSupabaseAuth();
    const scriptLoaded = useRef(false);

    useEffect(() => {
        if (!loading && supabase && !scriptLoaded.current) {
            const script = document.createElement('script');
            script.src = 'https://accounts.google.com/gsi/client';
            script.async = true;
            script.defer = true;
            script.onload = initializeGoogleOneTap;
            document.body.appendChild(script);

            scriptLoaded.current = true;

            return () => {
                document.body.removeChild(script);
            };
        }
    }, [loading, supabase]);

    const initializeGoogleOneTap = () => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
                callback: handleCredentialResponse,
            });
            window.google.accounts.id.renderButton(
                document.getElementById("googleOneTapButton"),
                { 
                    theme: "outline", 
                    size: "large", 
                    width: 400,
                    text: mode === 'signup' ? 'continue_with' : 'continue_with'
                }
            );
        } else {
            console.error('Google object not found on window.');
        }
    };

    const handleCredentialResponse = async (response) => {
        try {
            const result = await googleOneTapLogin(response.credential);
            if (onSuccess) onSuccess(result);
        } catch (error) {
            if (onError) onError(error);
        }
    };

    return <div id="googleOneTapButton"></div>;
};

export default GoogleOneTapLogin;
