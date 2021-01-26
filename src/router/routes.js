
const routes = [
	{ path: '/', redirect:'/lanzador' },
	{ path:'/lanzador', component: () => import('layouts/LauncherLy') },
	{ path: '/acceso', component: () => import('layouts/SigninLy.vue') },
	{
		path: '/almacen', component: () => import('layouts/WarehousesLy.vue'),
		children:[
			{ path: '', component: () => import('pages/Warehouses/Index.vue') },
			{ path: 'admin', component: () => import('pages/Warehouses/Admin.vue') },
			{ path: 'contador', component: () => import('pages/Warehouses/Counter/Index.vue') },
			{ path: 'contador/config/:id', component: () => import('pages/Warehouses/Counter/Config.vue') },
			{ path: 'contador/:id', component: () => import('pages/Warehouses/Counter/Counting.vue') },
			{ path: 'ubicador', component: () => import('pages/Warehouses/Locator/Index.vue') },
			{ path: 'minymax', component: () => import('pages/Warehouses/Minymax/Index.vue') },
			{ path: 'existencias', component: () => import('pages/Warehouses/Existences/Index.vue') }
		]
	},
	{
		path:'/pedidos', component: () => import('layouts/RequisitionsLy.vue'),
		children:[
			{ path:'',component: () => import('pages/Requisitions/Index.vue') },
			{ path:'dashboard',component: () => import('pages/Requisitions/Dashboard/Index.vue') },
			{ path:':id',component: () => import('pages/Requisitions/Orders/Order.vue') },
		]
	},
	{
		path:'/preventa', component: () => import('layouts/PreventaLy.vue'),
		children:[
			{path:'',component: () => import('pages/Preventa/Index.vue')},
			{path:':id',component: () => import('pages/Preventa/Order.vue')},
		]
	},
	{
		path:'/cluster', component:() => import('layouts/ClusterLy.vue'),
		children:[
			{ path:'ventas', component:() => import('pages/Cluster/Sales.vue') }
		]
	},
	{
		path:'/perfil', component:() => import('layouts/ProfileLy.vue'),
	},
	{
		path:'/etiquetas', component:() => import('layouts/LabelsLy.vue'),
	},
	{
		path:'/qdev',
		component: () => import('pages/Test/test.vue'),
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '*',
		component: () => import('pages/Error404.vue')
	}
]

export default routes
