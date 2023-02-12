export interface DialogData {
    title: string;
    message: string;
}

export interface AlertDialogData extends DialogData {
    okBtn: string;
}

export interface ConfirmDialogData extends DialogData {
    yesBtn: string;
    noBtn: string;
}
