import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { User } from './components/user/user';
import { Admin } from "./components/admin/admin";
import { Databinding } from "./components/databinding/databinding";
import { ControlFlow } from "./components/control-flow/control-flow";
import { SignalEx } from './components/signal-ex/signal-ex';

@Component({
  selector: 'app-root',
  imports: [RouterLink,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular20';
}
