import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Home from './components/Home';
import JavascriptIcon from './assets/java-script 2.svg';
import reactIcon from './assets/React-icon 2.svg';
import typescriptIcon from './assets/typescript.svg';
import reactRouter from './assets/react-router-logo.png';
import SassIcon from './assets/sass.svg';
import StyledComponentIcon from './assets/styledComponent.png';
import axiosIcon from './assets/AXIOS.png';
import contextIcon from './assets/context.png';
import FirebaseIcon from './assets/FIREBASE.png';

//project
import FishEyes from './assets/photographer-g49d64b04e_1920.jpg';
import Kazaa from './assets/real-estate-g2b0617dbc_1920.jpg';
import Perfect from './assets/shower-389273.jpeg';
import LesPetitsPlats from './assets/vegetables-g3d48dfe51_1920.jpg';
import OhMyFood from './assets/food-g0337634a0_1920.jpg';
import MetApp from './assets/clouds-gd9dc718eb_1920.jpg';
import GameOn from './assets/gamepad-g0e871246a_1920.jpg';
import Reservia from './assets/reservia_illu.jpg'
import BurgerGenius from './assets/burger-g9541753d8_1920.jpg';
import BlueBerryHr from './assets/pexels-cottonbro-3205570.jpg';

import myPortFolio from './assets/software-developer-gcc50032e1_1920.jpg';

function App() {
  const IconArray = [
    { img: JavascriptIcon, title: 'Javascript' },
    { img: reactIcon, title: 'React.JS' },
    ,
    /*     { img: typescriptIcon, title: 'TypeScript' } */ {
      img: reactRouter,
      title: 'React Router',
    },
    { img: contextIcon, title: 'Context' },
    { img: SassIcon, title: 'Sass' },
    { img: StyledComponentIcon, title: 'Styled Component' },
    { img: axiosIcon, title: 'Axios' },
    { img: FirebaseIcon, title: 'FireBase' },
  ];
  const projectArray = [
    /*     {
      name: 'Burger Genius',
      url: 'https://allsgit.github.io/met-app/',
      thumb: BurgerGenius,
      describe: `Application de click and collect avec gestion du paiement`,
      tech: ['REACT', 'STYLED COMPONENT', 'FIREBASE', 'STRIPE', "CONTEXT"],
      gitHub : "",
      website: 'https://allsgit.github.io/met-app/',
    }, */
    {
      name: 'Fish Eyes',
      url: 'www.google.fr',
      thumb: FishEyes,
      describe: `Plateforme de photographe Freelance, cod?? en Javascript. Les fonctionalit??s sont : la gestion des URL de chaque photographe, l'affichage des photos de chaque utilisateur via un fichier JSON FETCH, tri des images par date, popularit??, nom. Enfin, une light box carousel pour les photos des utilisateurs`,
      tech: ['JAVASCRIPT', 'SASS', 'HTML', 'FETCH'],
      gitHub: 'https://github.com/allsgit/SeuAllan_6_24012020',
      website: 'https://allsgit.github.io/SeuAllan_6_24012020/index.html',
    },
    {
      name: 'Kazaa',
      thumb: Kazaa,
      describe: `Projet de location immobilier entre particulier (entr??e sur erreur 404 pour d??mo de la gestion des routes 404). Dans le cadre de ma formation OpenClassRooms il m'??tait demand?? d'utiliser uniquement des Class Component. Gestion des composant reutilisable, FETCH afin d'obtenir les infos de chaque loueur`,
      tech: ['REACT', 'FETCH', 'SASS', 'HTML', 'REACT-ROUTER'],
      gitHub: 'https://github.com/allsgit/AZAK-p11',
      website: 'https://allsgit.github.io/AZAK-p11/',
    },
    {
      name: 'MetApp',
      url: 'https://allsgit.github.io/met-app/',
      thumb: MetApp,
      describe: `Petite application de m??t??o avec exploitation de l'API OpenWeatherMAp qui permet en temps r??el d'onbtenir les temp??ratures de la ville souhait?? en la saissant dans le champ. Des conditions de couleur ont ??t?? cod?? afin d'apdater la teinte en fonction des seuil de tempr??ature (froid, temp??r??, chaud), l'exploitationd de L'api permet ??galement d'afficher les icon de m??t??o en fonction de la situation m??t??rologique `,
      tech: ['HTML', 'SASS', 'REACT', 'AXIOS'],
      gitHub: 'https://github.com/allsgit/met-app',
      website: 'https://allsgit.github.io/met-app/',
    },
    /*     {
      name: 'BlueBerry HR ',
      url: 'www.google.fr',
      thumb: BlueBerryHr,
      describe: 'Logiciel de gestion RH',
      tech: ['REACT', 'STYLED-COMPONENT', 'FIREBASE', 'CONTEXT'],
      gitHub : "",
      website: 'https://allsgit.github.io/AllanSeu_7_25042021./',
    }, */
    {
      name: 'Les Petits Plats',
      url: 'www.google.fr',
      thumb: LesPetitsPlats,
      describe: `Cr??ation d'un algoritme de recherche de recette en Javascript Vanilla, il permet de trouver une recette soit par mot cl??e, soit par tag selectionn??. Dans le cadre de ma formation OpenClassRooms il ma ??t?? demander d'effectuer deux algoritmes et de les bencher afin de selectionner le plus efficient `,
      tech: ['JAVASCRIPT', 'SASS', 'HTML', 'FETCH'],
      gitHub: 'https://github.com/allsgit/AllanSeu_7_25042021.',
      website: 'https://allsgit.github.io/AllanSeu_7_25042021./',
    },

    {
      name: 'Perfect-Renovation (push le git + mettre en public)',
      url: 'www.google.fr',
      thumb: Perfect,
      describe: `Cr??ation d'un site pour un artisant du batiment, la maquette ?? ??t?? r??alis?? sur Figma, le site est r??alis?? en HTML, SASS, Javascript Vanilla pour les fonctionalit??s de carousel, lightbox, contact. La gestion du back-end pour la partie contact utilise EmailJS. Enfin le referencement google ?? ??t?? effectu?? et les performances sont r??guli??rement suivi via google search console`,
      tech: ['JAVASCRIPT', 'SASS', 'HTML', 'FIGMA', 'EMAIL-JS'],
      gitHub: 'https://github.com/allsgit/perfectrenov',
      website: 'http://www.perfect-renovation.fr/',
    },
    {
      name: 'Oh My Food',
      url: 'www.google.fr',
      thumb: OhMyFood,
      describe: `Int??gration d'une maquette en mobile first dans le cadre de ma formation OpenClassRooms, cr??ation d'un loader au chargement de la page, ajout des menus de chaque restaurant, pratique de des animations via Keyframes`,
      tech: ['SASS', 'HTML'],
      gitHub: '',
      website: 'https://allsgit.github.io/AllanSeu_3_14112020/',
    },
    {
      name: 'Mon Portfolio',
      url: 'www.google.fr',
      thumb: myPortFolio,
      describe: `Portfolio sur lequel vous vous trouver, cr??ation du design, int??gration des diff??rent project et technologie via useState pour une meilleur maintenabilit??e, custom hook pour trigger la navbar, styled-component pour la gestion du css et des animation. Une version plus "Geek" :) de mon cv est disponible ici => `,
      tech: ['REACT', 'STYLED COMPONENT', 'REACT ROUTER'],
      gitHub: '',
      website: 'http://www.allan-seu.com',
    },
    {
      name: 'GameOn Landing Page',
      url: 'whttps://allsgit.github.io/Allan_Seu_P4/starterOnly/',
      thumb: GameOn,
      describe: `1er Projet Javascript Vanilla dans le cadre de ma Formation OpenClassRoom, landing page GameOn permet au utilisateur de s'incrire pour un evenement gaming, le formulaire d'inscription devais g??rer les conditions de validit?? cot?? frontend avec des conditions bloquantes du chaque champ en cas de non respect des requis`,
      tech: ['HTML', 'CSS', 'JAVASCRIPT'],
      gitHub: 'https://github.com/allsgit/Allan_Seu_P4',
      website: 'https://allsgit.github.io/Allan_Seu_P4/starterOnly/',
    },
    {
      name: 'Reservia',
      url: 'https://allsgit.github.io/AllanSeu_2_09102020./',
      thumb: Reservia,
      describe: `int??gration maquette`,
      tech: ['css', 'HTML'],
      gitHub: 'https://github.com/allsgit/AllanSeu_2_09102020.',
      website: 'https://allsgit.github.io/AllanSeu_2_09102020./',
    },
  ];

  //

  return (
    <div className="App">
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<Home projectArray={projectArray} IconArray={IconArray} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
