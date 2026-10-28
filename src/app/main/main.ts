import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  imports: [RouterLink],
  selector: 'app-main',
  templateUrl: './main.html',
})
export class Main {
  readonly awesomeThings = [{
    name: 'Angular',
    description: 'Angular is a web framework for building applications.',
  }, {
    name: 'TypeScript',
    description: 'TypeScript is JavaScript with syntax for types.',
  }, {
    name: 'Vitest',
    description: 'A unit test framework powered by Vite.',
  }]
}
