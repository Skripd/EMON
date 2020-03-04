export interface Alert {
    uuid: string;
    closeable: boolean;
    globalAlert: boolean;
    type: string;
    text: string;
    button?: string;
}
