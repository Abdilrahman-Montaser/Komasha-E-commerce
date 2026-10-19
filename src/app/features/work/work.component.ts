import {
  Component,
  computed,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-work',
  imports: [DecimalPipe],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css',
})
export class WorkComponent {
  name: WritableSignal<string> = signal('abdo');
  counter: WritableSignal<number> = signal(21);
  price: WritableSignal<number> = signal(200);
  quantitiy: WritableSignal<number> = signal(100);
  totalPrice: Signal<number> = computed(() => this.price() * this.quantitiy());

  userMessage = computed(
    () => `${this.name()} has ${this.counter()} year's old.`,
  );

  changeName() {
    this.name.update((oldName) => `${oldName}o`);
  }
  changeCounter() {
    this.counter.update((oldVal) => oldVal + 1);
  }

  getNameFunction() {
    console.log('Function is called!');
    return 'Abdo';
  }

  changeTotal() {
    console.log(this.totalPrice());
    this.quantitiy.set(3);
    console.log(this.totalPrice());
  }
}
