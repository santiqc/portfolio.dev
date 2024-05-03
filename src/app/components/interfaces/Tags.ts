import { Type } from "@angular/core";

export interface Tag {
    name: string;
    class: string;
    component: Type<any>;
}

export interface Project {
    title: string;
    description: string;
    link: string;
    github: string;
    image: string;
    tags: Tag[];
}