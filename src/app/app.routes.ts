import { Routes } from '@angular/router';

import { NotFound } from './error-routing/not-found/not-found';
import { UncaughtError } from './error-routing/error/uncaught-error';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LiveFeedsComponent } from './live-feeds/live-feeds.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'error', component: UncaughtError },
  { path: 'dashboard', component: DashboardComponent, data: { text: 'Dashboard' } },
  { path: 'live-feeds', component: LiveFeedsComponent, data: { text: 'Live-Feeds' } },
  { path: 'bookmarks', component: BookmarksComponent, data: { text: 'Bookmarks' } },
  { path: '**', component: NotFound } // must always be last
];
