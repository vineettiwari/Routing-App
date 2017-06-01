import { Component, OnInit } from '@angular/core';


const users = [
    {
        id: 1,
        name: 'Chris',
        username: 'sevilayha',
        avatar: 'https://images.pexels.com/photos/258136/pexels-photo-258136.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
    },
    {
        id: 2,
        name: 'Nick',
        username: 'whatnicktweets',
        avatar: 'https://images.pexels.com/photos/336561/pexels-photo-336561.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
    },
    {
        id: 3,
        name: 'Holly',
        username: 'hollylawly',
        avatar: 'https://images.pexels.com/photos/101577/pexels-photo-101577.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
    }
]


@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

    title = "This is the About page";

    users = users;

    constructor() { }

    ngOnInit() { }

}
