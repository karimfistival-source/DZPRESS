import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-live-feeds',
  imports: [IGX_CARD_DIRECTIVES, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent],
  templateUrl: './live-feeds.component.html',
  styleUrls: ['./live-feeds.component.scss']
})
export class LiveFeedsComponent {}
