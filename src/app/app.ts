import { Component, signal } from '@angular/core';
import { email } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Card } from "./card/card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  collegename="Amal Jyothi College of Engineering"
  person={
    name:'Diya Saira Charly',
    email:'diya@gmail.com',
    branch:'Computer Science Engineering'
  }

  protected readonly title = signal('secondproject');
}
