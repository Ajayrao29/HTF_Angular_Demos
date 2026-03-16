import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'names/show',         
		pathMatch: 'full'
	},
	{
		path: 'counter/increment',
		loadComponent: () => import('../features/counter/components/increment/increment').then((module) => module.Increment)
	},   
	{  
		path: 'counter/show',
		loadComponent: () => import('../features/counter/components/show-count/show-count').then((module) => module.ShowCount)
	},                                                    
	{                                                   
		path: 'names/add',
		loadComponent: () => import('../features/names/components/add-name/add-name').then((module) => module.AddName)
	},
	{
		path: 'names/show',
		loadComponent: () => import('../features/names/components/show-names/show-names').then((module) => module.ShowNames)
	},
	{
		path: 'show-names',
		loadComponent: () => import('../features/names/components/show-names/show-names').then((module) => module.ShowNames)
	},
	{
		path: 'names/remove',
		loadComponent: () => import('../features/names/components/remove-name/remove-name').then((module) => module.RemoveName)
	},
	{
	    path: 'names/edit/:index',
		loadComponent: () => import('../features/names/components/edit-name/edit-name').then((module) => module.EditName)
	},
	{
		path: 'update/:index',
		loadComponent: () => import('../features/names/components/edit-name/edit-name').then((module) => module.EditName)
	},   
	{
		path: 'persons/add',
		loadComponent: () => import('../features/persons/components/add-person/add-person').then((module) => module.AddPerson)
	},
	{
		path: 'persons/show',
		loadComponent: () => import('../features/persons/components/show-persons/show-persons').then((module) => module.ShowPersons)
	},
	{
		path: 'persons/edit/:id',
		loadComponent: () => import('../features/persons/components/edit-person/edit-person').then((module) => module.EditPerson)
	},
	{
		path: 'persons/all',
		loadComponent: () => import('../features/persons/components/persons/persons').then((module) => module.Persons)
	},
	{
		path: '**',
		redirectTo: 'names/show'
	}
];


