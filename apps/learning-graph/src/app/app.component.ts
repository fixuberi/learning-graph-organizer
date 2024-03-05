import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ShellComponent } from '@learning-graph/ui';
import { appRoutes } from './app.routes';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, ShellComponent],
  selector: 'learning-graph-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  navItems = appRoutes.map(({ path, label }) => ({
    path: path as string,
    label,
  }));
}
