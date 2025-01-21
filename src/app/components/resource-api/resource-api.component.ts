import { JsonPipe } from '@angular/common';
import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-resource-api',
  imports: [JsonPipe],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css'
})
export class ResourceAPIComponent {
    // with resource API we normally use fetchAPI rather than HTTP client
    userList = resource({
      loader:() => {
        return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json() as Promise<any[]>)
      }
    })

    reloadData() {
      this.userList.reload(); // to gwt the data just like the GET api there it is gonna call loader function again
    }


}
