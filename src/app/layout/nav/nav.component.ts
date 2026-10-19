import { AuthService } from '../../core/services/auth.service';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive, NgIf, TranslateModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(public _AuthService:AuthService) {}
}
