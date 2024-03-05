import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../primeng/primeng.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ui-shell',
  standalone: true,
  imports: [CommonModule, PrimengModule, RouterModule],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  @Input() title = '';

  @Input() navItems: { path: string; label: string }[] = [];
}
