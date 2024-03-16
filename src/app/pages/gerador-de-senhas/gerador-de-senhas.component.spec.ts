import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeradorDeSenhasComponent } from './gerador-de-senhas.component';

describe('GeradorDeSenhasComponent', () => {
  let component: GeradorDeSenhasComponent;
  let fixture: ComponentFixture<GeradorDeSenhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeradorDeSenhasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeradorDeSenhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
