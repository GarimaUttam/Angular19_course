import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceAPIComponent } from './resource-api.component';

describe('ResourceAPIComponent', () => {
  let component: ResourceAPIComponent;
  let fixture: ComponentFixture<ResourceAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
