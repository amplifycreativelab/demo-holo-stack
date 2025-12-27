import { useEffect, useState } from 'react';

export interface Toast {
    id: string;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
}

interface ToastProps {
    toasts: Toast[];
    onRemove: (id: string) => void;
}

export default function ToastIsland({ toasts, onRemove }: ToastProps) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const typeStyles = {
        success: 'bg-holo-success/10 border-holo-success/30 text-holo-success',
        error: 'bg-signal/10 border-signal/30 text-signal',
        warning: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-500',
        info: 'bg-holo-b/10 border-holo-b/30 text-holo-b',
    };

    const icons = {
        success: '✓',
        error: '✕',
        warning: '⚠',
        info: 'ℹ',
    };

    useEffect(() => {
        toasts.forEach((toast) => {
            if (toast.duration) {
                const timer = setTimeout(() => {
                    onRemove(toast.id);
                }, toast.duration);
                return () => clearTimeout(timer);
            }
        });
    }, [toasts, onRemove]);

    if (!isClient) {
        return null;
    }

    return (
        <div
            className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
            role="alert"
            aria-live="polite"
            aria-label="Notifications"
        >
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className={`glass rounded-xl px-6 py-4 flex items-center gap-3 animate-slide-in ${typeStyles[toast.type]}`}
                    role="alert"
                    aria-atomic="true"
                >
                    <span className="flex-shrink-0 text-lg" aria-hidden="true">
                        {icons[toast.type]}
                    </span>
                    <span className="flex-grow">{toast.message}</span>
                    <button
                        onClick={() => onRemove(toast.id)}
                        className="flex-shrink-0 hover:opacity-70 transition-opacity p-1"
                        aria-label={`Close notification: ${toast.message}`}
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            ))}
        </div>
    );
}

// Toast hook for easy usage
export function useToast() {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = (message: string, type: Toast['type'] = 'info', duration = 5000) => {
        const id = Math.random().toString(36).substring(7);
        setToasts((prev) => [...prev, { id, message, type, duration }]);
    };

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    return {
        toasts,
        addToast,
        removeToast,
        success: (message: string, duration?: number) => addToast(message, 'success', duration),
        error: (message: string, duration?: number) => addToast(message, 'error', duration),
        warning: (message: string, duration?: number) => addToast(message, 'warning', duration),
        info: (message: string, duration?: number) => addToast(message, 'info', duration),
    };
}
