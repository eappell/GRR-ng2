import { Photo } from '../photos/Photo';
import { Event } from '../events/Event';
import { IProject } from '../projects/Project';

export interface IAnimal {
    animalId: string;
    animalName: string;
    animalCode: string;
    description: string;
    events: Array<Event>;
    fatherId: string;
    hatchColor: string;
    hatchDate: string;
    lineage: string;
    motherId: string;
    photos: Array<Photo>;
    pinkiesTaken: number;
    price: number;
    productOfProject: IProject;
    species: string;
    speciesLatin: string;
    status: AnimalStatus;
    takenMeal: boolean;
}

export class Animal implements IAnimal {
    animalId: string;
    animalName: string;
    animalCode: string;
    description: string;
    events: Array<Event>;
    fatherId: string;
    hatchColor: string;
    hatchDate: string;
    lineage: string;
    motherId: string;
    photos: Array<Photo>;
    pinkiesTaken: number;
    price: number;
    productOfProject: IProject;
    species: string;
    speciesLatin: string;
    status: AnimalStatus;
    takenMeal: boolean;
}

export enum AnimalStatus {
    active,
    hold,
    sold,
    deceased,
    feeding,
    waitinglist
}
