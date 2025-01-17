import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from "./components/admin/admin.component";
import { UserComponent } from './components/user/user.component';
import { SingleFileComponentComponent } from './components/single-file-component/single-file-component.component';
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { NgIfDirectiveComponent } from "./components/ng-if-directive/ng-if-directive.component";

@Component({
  selector: 'app-root',
  imports: [DataBindingComponent, NgIfDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19_Course';
}
