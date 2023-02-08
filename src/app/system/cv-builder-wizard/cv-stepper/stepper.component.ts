import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChildren } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-stepper",
    templateUrl: "./stepper.component.html",
    styleUrls: ["./stepper.component.scss"],
})
export class StepperComponent implements AfterViewInit {
    @ViewChildren("step") stepsButton?: QueryList<ElementRef<HTMLDivElement>>;

    @Input() steps: any[] = [1, 2, 3, 4, 5, 6, 7];

    finished: boolean = false;

    activeIndex: number = 0;

    initialized: boolean = false;

    constructor(private router: Router) {}

    ngAfterViewInit(): void {
        this.steps = this.stepsButton?.toArray() ?? [];
        this.activate(0);
        setTimeout(() => {
            this.initialized = true;
        });
    }

    activate(index: number): void {
        this.activeIndex = index;
    }

    prev(): void {
        if (this.activeIndex > 0) this.activeIndex--;
        this.finished = false;
    }

    next(): void {
        if (this.activeIndex < this.steps.length - 1) this.activeIndex++;
        this.finished = false;
    }

    finish(): void {
        this.activeIndex++;
        this.finished = true;
        setTimeout(async () => {
            await this.router.navigate(["/generator"]);
        }, 700);
    }
}
