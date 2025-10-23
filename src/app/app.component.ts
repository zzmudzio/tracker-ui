import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    this.tokenStorageService.checkIfThereIsATokenInLocalStorage();
  }
}
