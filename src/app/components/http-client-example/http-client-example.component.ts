import { Component, inject } from '@angular/core';
import { JokesService } from '../../shared/services/jokes.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css',
})
export class HttpClientExampleComponent {
  jokesService = inject(JokesService);
  dadJoke: string = '';
  chuckJoke: string = '';

  ngOnInit() {
    this.getdadJoke();
    this.getChuckJoke();
  }

  refreshDadJoke() {
    this.getdadJoke();
  }
  refreshChuckJoke() {
    this.getChuckJoke();
  }

  getdadJoke() {
    this.jokesService.getDadJokes().subscribe((data) => {
      console.log('Dad Joke', data.joke);
      this.dadJoke = data.joke;
    });
  }
  getChuckJoke() {
    this.jokesService.getChuckNorrisJoke().subscribe((data) => {
      console.log('Chuck Joke', data.value);
      this.chuckJoke = data.value;
    });
  }
}
