import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public redirectGit() {
    window.open(
      'https://github.com/NassimaZIANI/portfolio-nassima-ziani',
      '_blank'
    );
  }

  public consult() {
    window.open('https://nassima-ziani.fr', '_blank');
  }
}
