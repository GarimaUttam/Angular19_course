import { Component } from '@angular/core';

@Component({
  selector: 'app-single-file-component',
  imports: [],
  template: "<h1 class='text-danger'>Hi, from the single component file. </h1>",
  styles:['.text-danger {color:blue}']
})
export class SingleFileComponentComponent {

}
