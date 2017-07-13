import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wckit-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  landingPage = {
    logo: {ref: '#page-top', text: 'Webcat Toolkit'},
    navItems: [
      {ref: '#services', text: 'Services'},
      {ref: '#portfolio', text: 'Portfolio'},
      {ref: '#about', text: 'About'},
      {ref: '#team', text: 'Team'},
      {ref: '#contact', text: 'Contact'}
    ],
    header: {
      leadText: 'Welcome To My Studio!', headingText: `It's Nice To Meet You`, tellMore: {ref: '#services', text: 'Tell Me More'}
    },
    services: {
      sectionId: 'services', title: 'Services',
      description: 'This project supporting many online services. And it shows how to use them in Angular Projects.',
      subjects: [
        {
          iconClass: 'fa-code', title: 'Open Source',
          description: 'Open source software is software with source code that anyone can inspect, modify, and enhance.'
        }, {
          iconClass: 'fa-google', title: 'Google',
          description: 'GCP frees you from the overhead of managing infrastructure, provisioning servers and configuring networks. ' +
          'To let innovators innovate and let coders, well, just code.'
        }, {
          iconClass: 'fa-github', title: 'Github',
          description: `Build your app on GitHub's platform. ` +
          `We’ve put together some handy guides and reference documentation you can use to start building.`
        }
      ]
    },
    portfolio: {
      sectionId: 'portfolio', title: 'Portfolio',
      description: 'Here are my portfolios',
      subjects: [
        {
          imgUrl: 'assets/landing-page/img/portfolio/01-thumbnail.jpg', title: 'Threads',
          description: 'Illustration', modalId: '1Modal'
        }, {
          imgUrl: 'assets/landing-page/img/portfolio/02-thumbnail.jpg', title: 'Explore',
          description: 'Graphic Design', modalId: '2Modal'
        }, {
          imgUrl: 'assets/landing-page/img/portfolio/03-thumbnail.jpg', title: 'Finish',
          description: 'Identity', modalId: '3Modal'
        }, {
          imgUrl: 'assets/landing-page/img/portfolio/04-thumbnail.jpg', title: 'Lines',
          description: 'Branding', modalId: '4Modal'
        }, {
          imgUrl: 'assets/landing-page/img/portfolio/05-thumbnail.jpg', title: 'Southwest',
          description: 'Website Design', modalId: '5Modal'
        }, {
          imgUrl: 'assets/landing-page/img/portfolio/06-thumbnail.jpg', title: 'Window',
          description: 'Photography', modalId: '6Modal'
        }
      ]
    },
    about: {
      sectionId: 'about', title: 'About',
      description: 'I would like to build beautiful things with Angular',
      subjects: [
        {
          imgUrl: 'assets/landing-page/img/about/1.jpg', title: 'Our Humble Beginnings', date: '2009-2011',
          description: 'Startup companies can come in all forms and sizes'
        }, {
          imgUrl: 'assets/landing-page/img/about/2.jpg', title: 'An Agency is Born', date: 'March 2011',
          description: 'His calls and pleadings to the Department of Education and the loan service agency went unheeded.'
        }, {
          imgUrl: 'assets/landing-page/img/about/3.jpg', title: 'Transition to Full Service', date: 'December 2012',
          description: 'This is a page of premium content for site members. Please join us and Become a Member now.'
        }, {
          imgUrl: 'assets/landing-page/img/about/3.jpg', title: 'Phase Two Expansion', date: 'July 2014',
          description: 'The doors installed by Your Home Improvement Company are high in quality but quite pricey.'
        }
      ]
    },
    clients: {
      sectionId: 'clients',
      subjects: [
        {imgUrl: 'assets/landing-page/img/logos/envato.jpg', title: 'envato'},
        {imgUrl: 'assets/landing-page/img/logos/designmodo.jpg', title: 'designmodo'},
        {imgUrl: 'assets/landing-page/img/logos/themeforest.jpg', title: 'themeforest'},
        {imgUrl: 'assets/landing-page/img/logos/creative-market.jpg', title: 'creative-market'}
      ]
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
