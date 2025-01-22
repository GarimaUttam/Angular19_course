import { Component, Input } from '@angular/core';
import { NgStyleComponent } from '../../components/ng-style/ng-style.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  imports: [NgStyleComponent, NgStyle],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  @Input() progressValue: number = 0;
}
