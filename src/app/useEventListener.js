import { useEffect, useRef } from "react";

export default function useEventListener(eventType, callback, element) {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        let targetElement = element;
        
        if (typeof window !== "undefined" && !element) {
            targetElement = window;
        }

        if (!targetElement) return;

        const handler = (e) => callbackRef.current(e);
        targetElement.addEventListener(eventType, handler);
        
        return () => targetElement.removeEventListener(eventType, handler);
    }, [eventType, element]);
}
