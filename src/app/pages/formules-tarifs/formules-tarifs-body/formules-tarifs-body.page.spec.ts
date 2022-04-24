import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormulesTarifsBodyPage } from './formules-tarifs-body.page';

describe('FormulesTarifsBodyPage', () => {
  let component: FormulesTarifsBodyPage;
  let fixture: ComponentFixture<FormulesTarifsBodyPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulesTarifsBodyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormulesTarifsBodyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
