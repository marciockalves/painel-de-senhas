import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelDeSenhasComponent } from './painel-de-senhas.component';

describe('PainelDeSenhasComponent', () => {
  let component: PainelDeSenhasComponent;
  let fixture: ComponentFixture<PainelDeSenhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelDeSenhasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PainelDeSenhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
