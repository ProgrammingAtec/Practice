import { CollectionModel } from './collection.model';

export const Collections: CollectionModel[] = [
  {
    id: 1,
    target: 'flooop',
    description: 'lorem1',
    avatar: './assets/flooop.png',
    chart: {
      data: [
        {
          name: 'population',
          min: 1,
          max: 100,
          value: 50
        },
        {
          name: 'Coutries',
          min: 1,
          max: 50,
          value: 10
        },
        {
          name: 'Skyscrappers',
          min: 1,
          max: 100,
          value: 80
        },
        {
          name: 'Presidents',
          min: 1,
          max: 30,
          value: 10
        }

      ]
    }
  },
  {
    id: 2,
    target: 'BMW',
    description: 'lorem2',
    avatar: './assets/bmw_2020_logo_evolution.jpg',
    chart: {
      data: [
        {
          name: 'Soldiers',
          min: 1,
          max: 400,
          value: 100
        },
        {
          name: 'Squads',
          min: 1,
          max: 50,
          value: 10
        },
        {
          name: 'Guns',
          min: 1,
          max: 300,
          value: 110
        },
        {
          name: 'Commander',
          min: 1,
          max: 30,
          value: 10
        },
        {
          name: 'Heroes',
          min: 1,
          max: 150,
          value: 100
        }
      ]
    }
  },
  {
    id: 3,
    target: 'Firefox',
    description: 'lorem3',
    avatar: './assets/firefox_2019_logo_new.jpg',
    chart: {
      data: [
        {
          name: 'Women',
          min: 1,
          max: 100,
          value: 20
        },
        {
          name: 'Dresses',
          min: 1,
          max: 100,
          value: 40
        },
        {
          name: 'Men',
          min: 1,
          max: 100,
          value: 20
        },
        {
          name: 'Socks',
          min: 1,
          max: 100,
          value: 33
        }
      ]
    }
  },
  {
    id: 4,
    target: 'Brackets',
    description: 'lorem4',
    avatar: './assets/images.png',
    chart: {
      data: [
        {
          name: 'Pinguins',
          min: 1,
          max: 100,
          value: 40
        },
        {
          name: 'Cats',
          min: 1,
          max: 100,
          value: 10
        },
        {
          name: 'Pandas',
          min: 1,
          max: 100,
          value: 20
        },
        {
          name: 'booboo',
          min: 1,
          max: 100,
          value: 15
        }
      ]
    }
  },
  {
    id: 5,
    target: 'PS5',
    description: 'lorem5',
    avatar: './assets/logo-officiel-ps5.jpg'
  },
  {
    id: 6,
    target: 'Puma',
    description: 'lorem6',
    avatar: './assets/puma-logo.svg',
    chart: {
      data: [
        {
          name: 'Sticks',
          min: 1,
          max: 100,
          value: 100
        },
        {
          name: 'Pens',
          min: 1,
          max: 100,
          value: 10
        },
        {
          name: 'Pencils',
          min: 1,
          max: 100,
          value: 110
        },
        {
          name: 'Cameras',
          min: 1,
          max: 100,
          value: 10
        },
        {
          name: 'Windows',
          min: 1,
          max: 100,
          value: 100
        }
      ]
    }
  },
  {
    id: 7,
    target: 'Ростелеком',
    description: 'lorem7',
    avatar: './assets/Логотип_компании_«Ростелеком».png',
    chart: {
      data: [
        {
          name: 'Movies',
          min: 1,
          max: 30,
          value: 9
        },
        {
          name: 'Nobel premium',
          min: 1,
          max: 10,
          value: 1
        },
        {
          name: 'Robert de niro',
          min: 1,
          max: 5,
          value: 1
        },
        {
          name: 'Grands',
          min: 1,
          max: 10,
          value: 3
        }
      ]
    }
  },
];
