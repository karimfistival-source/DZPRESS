import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxBadgeComponent, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { LiveFeedsComponent } from './live-feeds.component';

describe('LiveFeedsComponent', () => {
  let component: LiveFeedsComponent;
  let fixture: ComponentFixture<LiveFeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveFeedsComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxBadgeComponent, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
