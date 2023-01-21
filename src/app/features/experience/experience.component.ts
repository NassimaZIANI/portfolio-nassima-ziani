import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExperienceComponent implements OnInit {
  ngOnInit(): void {}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };

  slides = [
    {
      id: '1',
      experience: 'Developpeuse Full-stack',
      type: 'CDI',
      duration: '3 mois',
      company: 'Hiero',
      img: '../../../assets/logo-hiero.png',
    },
    {
      id: '2',
      experience: 'Developpeuse Full-stack',
      type: 'Alternance',
      duration: '12 mois',
      company: 'Hiero',
      img: '../../../assets/logo-hiero.png',
    },
    {
      id: '3',
      experience: "Systèmes d'informations",
      type: 'Alternance',
      duration: '9 mois',
      company: 'Université de Paris-Est Créteil',
      img: '../../../assets/UPEC_logo.png',
    },
    {
      id: '4',
      experience: 'Technologie LoRa',
      type: 'Stage',
      duration: '2 mois',
      company: 'Université de Versailles Saint-Quentin-en-Yvelines',
      img: '../../../assets/UVSQ_logo.png',
    },
  ];
}
