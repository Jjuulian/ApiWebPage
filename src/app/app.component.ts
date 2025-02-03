import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Character {
  id: number;
  name: string;
  image: string;
}

interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Asegúrate de importar HttpClientModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  characters: Character[] = [];
  currentPage = 1;
  totalPages = 1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    const url = `https://rickandmortyapi.com/api/character?page=${this.currentPage}`;
    this.http.get<ApiResponse>(url).subscribe((response) => {
      this.characters = response.results;
      this.totalPages = response.info.pages;
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCharacters();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }
}