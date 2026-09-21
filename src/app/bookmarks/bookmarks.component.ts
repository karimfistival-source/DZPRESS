import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-bookmarks',
  imports: [IGX_SELECT_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxBadgeComponent, IgxButtonDirective, IgxIconComponent],
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent {}
