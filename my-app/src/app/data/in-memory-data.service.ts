import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const recipes = [{
      id: 1,
      title: "Poulet curry et oignons facile",
      description: "",
      ingredient: [{
        id: 1,
        label: "blancs de poulet",
        description: ""
      },
      {
        id: 2,
        label: "pot de crème fraîche allégée",
        description: ""
      },
      {
        id: 3,
        label: "Curry",
        description: ""
      },
      {
        id: 4,
        label: "Cumin",
        description: ""
      },
      {
        id: 5,
        label: "Piment",
        description: ""
      },
      {
        id: 6,
        label: "Poivre",
        description: ""
      },
      {
        id: 7,
        label: "Sel",
        description: ""
      }]
    },
    {
      id: 2,
      title: "Gâteau au chocolat fondant rapide",
      description: "",
      ingredient: [{
        id: 8,
        label: "chocolat à pâtisser noir",
        description: ""
      },
      {
        id: 9,
        label: "beurre",
        description: ""
      },
      {
        id: 10,
        label: "oeufs",
        description: ""
      },
      {
        id: 11,
        label: "farine",
        description: ""
      },
      {
        id: 12,
        label: "sucre en poudre",
        description: ""
      }]
    }];

    const ingredients = [{
      id: 1,
      label: "blancs de poulet",
      description: ""
    },
    {
      id: 2,
      label: "pot de crème fraîche allégée",
      description: ""
    },
    {
      id: 3,
      label: "Curry",
      description: ""
    },
    {
      id: 4,
      label: "Cumin",
      description: ""
    },
    {
      id: 5,
      label: "Piment",
      description: ""
    },
    {
      id: 6,
      label: "Poivre",
      description: ""
    },
    {
      id: 7,
      label: "Sel",
      description: ""
    },
    {
      id: 8,
      label: "chocolat à pâtisser noir",
      description: ""
    },
    {
      id: 9,
      label: "beurre",
      description: ""
    },
    {
      id: 10,
      label: "oeufs",
      description: ""
    },
    {
      id: 11,
      label: "farine",
      description: ""
    },
    {
      id: 12,
      label: "sucre en poudre",
      description: ""
    }]
    return { heroes, recipes, ingredients };
  }
}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/