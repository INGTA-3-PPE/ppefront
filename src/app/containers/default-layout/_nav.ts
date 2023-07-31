import { INavData } from '@coreui/angular';

export const navItemsChef: INavData[] = [
  {
    title: true,
    name: 'Menu'
  },
  {
    name: 'Tableaux de bord',
    url: '/Tableaux de bord',
    iconComponent: { name: 'cil-home' },
  },
  {
    title: true,
    name: 'Découvrir'
  },
  

 
  
  
 

  {
    name: 'Demande',
    url: '/base',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Pret et avance',
        url: '/base/accordion'
      },
      {
        name: 'Autorisation',
        url: '/base/breadcrumbs'
      },
      {
        name: 'Congé',
        url: '/base/cards'
      },
      {
        name: 'Situation',
        url: '/base/carousel'
      },
      {
        name: 'mutation',
        url: '/base/collapse'
      },
      {
        name: 'Document ',
        url: '/base/list-group'
      },
     
     
  
    ]
  },
  
  {
    name: 'Liste des demandes',
    url: '/base/progress',
    iconComponent: { name: 'cil-calendar' }
  },

  {
    name: 'Liste de mes Demandes',
    url: '/listmesdem',
    iconComponent: { name: 'cil-notes' },
    
      
    
  },
 
  
  {
    name: 'Employé',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Informations personelles',
        url: '/notifications/alerts'
      },
      {
        name: 'Information professionnelle',
        url: '/notifications/badges'
      },
    
      
      
    ]
  },
 
 

];
export const navItemsUser: INavData[] = [
  {
    title: true,
    name: 'Menu'
  },
  {
    name: 'Tableaux de bord',
    url: '/Tableaux de bord',
    iconComponent: { name: 'cil-home' },
  },
  {
    title: true,
    name: 'Découvrir'
  },
  

 
  
  
 

  {
    name: 'Demande',
    url: '/base',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Pret et avance',
        url: '/base/accordion'
      },
      {
        name: 'Autorisation',
        url: '/base/breadcrumbs'
      },
      {
        name: 'Congé',
        url: '/base/cards'
      },
      {
        name: 'Situation',
        url: '/base/carousel'
      },
      {
        name: 'mutation',
        url: '/base/collapse'
      },
      {
        name: 'Document ',
        url: '/base/list-group'
      },
     
     
  
    ]
  },

  {
    name: 'Liste de mes Demande',
    url: '/listmesdem',
    iconComponent: { name: 'cil-calendar' }
  },
  
 
  
  {
    name: 'Employé',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Informations personelles',
        url: '/notifications/alerts'
      },
      {
        name: 'Information professionnelle',
        url: '/notifications/badges'
      },
    
      
      
    ]
  },
 
  {
    title: true,
    name: 'Extras'
  },
 
];
export const navItemsAdmin: INavData[] = [
  {
    title: true,
    name: 'Menu'
  },
  {
    name: 'Tableaux de bord',
    url: '/Tableaux de bord',
    iconComponent: { name: 'cil-home' },
  },
  {
    title: true,
    name: 'Découvrir'
  },
  

 

  
  
 



 
  
  {
    name: 'Employé',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Informations personelles',
        url: '/notifications/alerts'
      },
      {
        name: 'Information professionnelle',
        url: '/notifications/badges'
      },
    
      
      
    ]
  },

  {
    name: 'Liste des demandes',
    url: '/listadm',
    iconComponent: { name: 'cil-calendar' }
  },
  

 
 
  {
    name: 'Liste des personnes',
    url: '/gestion',
    iconComponent: { name: 'cil-calendar' }
  },
  
];

