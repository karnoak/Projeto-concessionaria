import { Component, signal } from '@angular/core';
import { Navbar } from '../components/navbar/navbar';
import { Home } from '../pages/home/home';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
