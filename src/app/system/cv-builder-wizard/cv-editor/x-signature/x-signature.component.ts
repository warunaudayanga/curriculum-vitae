import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from "@angular/core";
import { Signature } from "../../../../core/interfaces/system.interfaces";
import { Modal } from "bootstrap";

@Component({
    selector: "app-x-signature",
    templateUrl: "./x-signature.component.html",
    styleUrls: ["./x-signature.component.scss"],
})
export class XSignatureComponent implements AfterViewInit {
    @ViewChild("nameInput") nameInput?: ElementRef<HTMLInputElement>;

    @ViewChild("dateInput") dateInput?: ElementRef<HTMLInputElement>;

    @Input() signature?: Signature;

    @Output() signatureChange: EventEmitter<Signature> = new EventEmitter<Signature>();

    name: string = "";

    sign: string = "";

    date: string = "11/30/2023";

    editName: boolean = false;

    editDate: boolean = false;

    alertModal?: Modal;

    alertMessage?: string;

    ngAfterViewInit(): void {
        this.alertModal = new Modal("#signatureAlertModal");
        setTimeout(() => {
            this.name = this.signature?.name || "";
            this.sign = this.signature?.sign || "";
            this.date = this.signature?.date || "";
        });
    }

    onChange(): void {
        this.signature = {
            name: this.name,
            sign: this.sign,
            date: this.date,
        };
        this.signatureChange.emit(this.signature);
    }

    showNameInput(): void {
        this.editName = true;
        setTimeout(() => {
            this.nameInput?.nativeElement.select();
        });
    }

    showDateInput(): void {
        this.editDate = true;
        setTimeout(() => {
            this.dateInput?.nativeElement.select();
        });
    }

    async setSign(e: Event): Promise<void> {
        const sign = (e.target as HTMLInputElement).files?.[0];
        if (sign?.type.match(/image\/*/)) {
            if (sign.size > 1000000) {
                this.alertMessage = "The signature image is too large. Please upload an image less than 1MB.";
                this.alertModal?.show();
                return;
            }
            this.sign = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (event: any): void => {
                    resolve(event.target.result);
                };
                reader.onerror = (error): void => {
                    reject(error);
                };
                reader.readAsDataURL(sign);
            });
            this.onChange();
        }
    }

    removeSign(e: MouseEvent): void {
        e.stopPropagation();
        // eslint-disable-next-line no-alert
        if (confirm("Are you sure you want to remove the signature?")) {
            this.sign = "";
            this.onChange();
        }
    }
}
