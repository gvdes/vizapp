
const routes = [
	{ path: '/', redirect:'/lanzador' },
	{ path:'/lanzador', component: () => import('layouts/LauncherLy') },
	{ path: '/acceso', component: () => import('layouts/SigninLy.vue') },
	{
		path: '/almacen', component: () => import('layouts/WarehousesLy.vue'),
		children:[
			{ path: 'contador', component: () => import('pages/Warehouses/Counter/Index.vue') },
			{ path: 'contador/config/:id', component: () => import('pages/Warehouses/Counter/Config.vue') },
			{ path: 'contador/:id', component: () => import('pages/Warehouses/Counter/Counting.vue') },
			{ path: 'ubicador', component: () => import('pages/Warehouses/Locator/Index.vue') },
			{ path: 'minymax', component: () => import('pages/Warehouses/Minymax/Index.vue') },
			{ path: 'existencias', component: () => import('pages/Warehouses/Existences/Index.vue') },
			{ path: 'informes', component: () => import('pages/Warehouses/Reports.vue') },
			{ path: '', component: () => import('pages/Warehouses/Index.vue'), name:'warehouseidx' },
			{ path: ':idwrh/', component: () => import('pages/Warehouses/Warehouse.vue') },
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
			{path:'pedidos',component: () => import('pages/Preventa/Orders.vue')},
			{path:'pedidos/:id',component: () => import('pages/Preventa/Order.vue')},
			{path:'bodega',component: () => import('pages/Preventa/Warehouse.vue')},
			{path:'validar',component: () => import('pages/Preventa/Validates.vue')},
			{path:'checkin',component: () => import('pages/Preventa/Checkin.vue')},
			{path:'cobro',component: () => import('pages/Preventa/Order.vue')},
			{path:'config',component: () => import('pages/Preventa/Order.vue')},
			{path:'reporteria',component: () => import('pages/Preventa/Order.vue')},
		]
	},
	{
		path:'/cluster', component:() => import('layouts/ClusterLy.vue'),
		children:[
			{ path:'ventas', component:() => import('pages/Cluster/Sales.vue') },
			{
				path:'productos', component:() => import('pages/Cluster/Products.vue'),
				children:[
					{ path: '', redirect:'top' },
					{ path: 'top', component: () => import('pages/Cluster/Products/top.vue') },
					{ path: 'vs', component: () => import('pages/Cluster/Products/vs.vue') },
					{ path: 'cat', component: () => import('pages/Cluster/Products/cat.vue') }
				]	
			},
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
