import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelDoUsuarioComponent } from './painel-do-usuario.component';

describe('PainelDoUsuarioComponent', () => {
  let component: PainelDoUsuarioComponent;
  let fixture: ComponentFixture<PainelDoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelDoUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PainelDoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
