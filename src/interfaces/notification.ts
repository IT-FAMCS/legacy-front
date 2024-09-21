export interface NotificationProps {
    message: string;
    severity: "error" | "success" | "info" | "warning";
    open: boolean;
    onClose: () => void;
}