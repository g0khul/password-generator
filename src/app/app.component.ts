import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isNull } from 'node:util';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  length = 0;
  password = '';
  useLetters = false;
  useSymbols = false;
  useNumbers = false;

  onChangeLength(event: Event) {
    const eventValue = event.target as HTMLInputElement;
    const parsedLength = parseInt(eventValue.value);

    if (!isNaN(parsedLength)) {
      this.length = parsedLength;
      console.log(`Length : ${this.length}`);
    }
  }

  onChangeUseLetters() {
    this.useLetters = !this.useLetters;
    console.log(this.useLetters);
  }

  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols;
    console.log(this.useSymbols);
  }

  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers;
    console.log(this.useNumbers);
  }

  onGenerateButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const symbols = '!@#$%^&*()';

    let passwordPool = '';

    if (this.useLetters) {
      passwordPool += letters;
    }

    if (this.useSymbols) {
      passwordPool += symbols;
    }

    if (this.useNumbers) {
      passwordPool += numbers;
    }

    let generatedPassword = '';
    for (let index = 0; index < this.length; index++) {
      const randomIndex = Math.floor(Math.random() * passwordPool.length);
      generatedPassword += passwordPool.charAt(randomIndex);
    }

    this.password = generatedPassword;
  }

  getPassword() {
    console.log('password-----------------', this.password);
    return this.password;
  }
}
