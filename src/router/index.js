import Vue from 'vue'
import Router from 'vue-router'

// article
import User from '../views/user/list'
import AddUser from '../views/user/add'
import EditUser from '../views/user/edit'
import DetailUser from '../views/user/detail'

// article
import article from '../views/article/list'
import Addarticle from '../views/article/add'
import Editarticle from '../views/article/edit'
import Detailarticle from '../views/article/detail'

// notification
import notification from '../views/notification/list'
import Addnotification from '../views/notification/add'
import Editnotification from '../views/notification/edit'
import Detailnotification from '../views/notification/detail'



// Product
import Product from '../views/product/list'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'list-user',
			component: User
		},
		{
			path: '/list-user',
			name: 'list-user',
			component: User
		},
		{
			path: '/add-user',
			name: 'add-user',
			component: AddUser
		},
		{
			path: '/edit-user',
			name: 'edit-user',
			component: EditUser
		},
		{
			path: '/detail-user',
			name: 'detail-user',
			component: DetailUser
		},
		{
			path: '/list-product',
			name: 'list-product',
			component: Product
		},
		{
			path: '/list-article',
			name: 'list-article',
			component: article
		},
		{
			path: '/add-article',
			name: 'list-article',
			component: Addarticle
		},
		{
			path: '/edit-article',
			name: 'list-article',
			component: Editarticle
		},
		{
			path: '/detail-article',
			name: 'list-article',
			component: Detailarticle
		},
		{
			path: '/list-product',
			name: 'list-product',
			component: Product
		},
		{
			path: '/list-notification',
			name: 'list-notification',
			component: notification
		},
		{
			path: '/add-notification',
			name: 'list-notification',
			component: Addnotification
		},
		{
			path: '/edit-notification',
			name: 'list-notification',
			component: Editnotification
		},
		{
			path: '/detail-notification',
			name: 'list-notification',
			component: Detailnotification
		},
		{
			path: '/list-product',
			name: 'list-product',
			component: Product
		},
	]
})