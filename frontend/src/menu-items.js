
export default {
    items: [
        {
            id: 'ui-element-1',
            title: 'Menu',
            type: 'group',
            icon: 'icon-ui',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/',
                    icon: 'feather icon-home',
                },
                {
                    id: 'profile',
                    title: 'Perfil',
                    type: 'item',
                    url: '/account/profile',
                    icon: 'feather icon-user',
                },
                {
                    id: 'roles-items',
                    title: 'Roles',
                    type: 'collapse',
                    icon: 'feather icon-user-check',
                    children: [
                        {
                            id: 'roles-list',
                            title: 'Listar Roles',
                            type: 'item',
                            url: '/roles'
                        },
                        {
                            id: 'roles-create',
                            title: 'Crear Rol',
                            type: 'item',
                            url: '/roles/create'
                        },
                        
                    ]
                },{
                    id: 'users-items',
                    title: 'Usuiarios',
                    type: 'collapse',
                    icon: 'feather icon-users',
                    children: [
                        {
                            id: 'users-list',
                            title: 'Listar Usuarios',
                            type: 'item',
                            url: '/users'
                        },
                        {
                            id: 'users-create',
                            title: 'Crear Usuario',
                            type: 'item',
                            url: '/users/create'
                        },
                        
                    ]
                },{
                    id: 'item',
                    title: 'Items',
                    type: 'collapse',
                    icon: 'feather icon-lock',
                    children: [
                        {
                            id: 'items-list',
                            title: 'Listar Items',
                            type: 'item',
                            url: '/item/list'
                        },
                        {
                            id: 'roles-create',
                            title: 'Crear Item',
                            type: 'item',
                            url: '/item/create'
                        },
                        
                    ]
                },{
                    id: 'inventory',
                    title: 'Inventario',
                    type: 'collapse',
                    icon: 'feather icon-lock',
                    children: [
                        {
                            id: 'inventory-list',
                            title: 'Inventario',
                            type: 'item',
                            url: '/inventory/list'
                        },
                        {
                            id: 'inventory-create',
                            title: 'Crear Entrada',
                            type: 'item',
                            url: '/inventory/create'
                        },
                        
                    ]
                },{
                    id: 'shop',
                    title: 'Tienda',
                    type: 'collapse',
                    icon: 'feather icon-lock',
                    children: [
                        {
                            id: 'shop-list',
                            title: 'Tienda',
                            type: 'item',
                            url: '/shop/'
                        },
                        {
                            id: 'cart-shop',
                            title: 'Ir al Carrito',
                            type: 'item',
                            url: '/cart'
                        },
                        
                    ]
                },
                {
                    id: 'franchise',
                    title: 'Franquicias',
                    type: 'collapse',
                    icon: 'feather icon-lock',
                    children: [
                        {
                            id: 'franchise-list',
                            title: 'Listar Franquicias',
                            type: 'item',
                            url: '/franchise/list'
                        },
                        {
                            id: 'franchise-create',
                            title: 'Crear Franquicias',
                            type: 'item',
                            url: '/franchise/create'
                        },
                        
                    ]
                }

            ]
        },
        // {
        //     id: 'ui-element',
        //     title: 'UI ELEMENT',
        //     type: 'group',
        //     icon: 'icon-ui',
        //     children: [
        //         {
        //             id: 'basic',
        //             title: 'Component',
        //             type: 'collapse',
        //             icon: 'feather icon-box',
        //             children: [
        //                 {
        //                     id: 'button',
        //                     title: 'Button',
        //                     type: 'item',
        //                     url: '/basic/button'
        //                 },
        //                 {
        //                     id: 'badges',
        //                     title: 'Badges',
        //                     type: 'item',
        //                     url: '/basic/badges'
        //                 },
        //                 {
        //                     id: 'breadcrumb-pagination',
        //                     title: 'Breadcrumb & Pagination',
        //                     type: 'item',
        //                     url: '/basic/breadcrumb-paging'
        //                 },
        //                 {
        //                     id: 'collapse',
        //                     title: 'Collapse',
        //                     type: 'item',
        //                     url: '/basic/collapse'
        //                 },
        //                 {
        //                     id: 'tabs-pills',
        //                     title: 'Tabs & Pills',
        //                     type: 'item',
        //                     url: '/basic/tabs-pills'
        //                 },
        //                 {
        //                     id: 'typography',
        //                     title: 'Typography',
        //                     type: 'item',
        //                     url: '/basic/typography'
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     id: 'ui-forms',
        //     title: 'Forms & Tables',
        //     type: 'group',
        //     icon: 'icon-group',
        //     children: [
        //         {
        //             id: 'form-basic',
        //             title: 'Form Elements',
        //             type: 'item',
        //             url: '/forms/form-basic',
        //             icon: 'feather icon-file-text'
        //         },
        //         {
        //             id: 'bootstrap',
        //             title: 'Table',
        //             type: 'item',
        //             icon: 'feather icon-server',
        //             url: '/tables/bootstrap'
        //         }
        //     ]
        // },
        // {
        //     id: 'chart-maps',
        //     title: 'Chart & Maps',
        //     type: 'group',
        //     icon: 'icon-charts',
        //     children: [
        //         {
        //             id: 'charts',
        //             title: 'Charts',
        //             type: 'item',
        //             icon: 'feather icon-pie-chart',
        //             url: '/charts/nvd3'
        //         },
        //         {
        //             id: 'maps',
        //             title: 'Map',
        //             type: 'item',
        //             icon: 'feather icon-map',
        //             url: '/maps/google-map'
        //         }
        //     ]
        // },
        // {
        //     id: 'pages',
        //     title: 'Pages',
        //     type: 'group',
        //     icon: 'icon-pages',
        //     children: [
        //         {
        //             id: 'auth',
        //             title: 'Authentication',
        //             type: 'collapse',
        //             icon: 'feather icon-lock',
        //             badge: {
        //                 title: 'New',
        //                 type: 'label-danger'
        //             },
        //             children: [
        //                 {
        //                     id: 'signup-1',
        //                     title: 'Sign up',
        //                     type: 'item',
        //                     url: '/auth/signup-1',
        //                     target: true,
        //                     breadcrumbs: false
        //                 },
        //                 {
        //                     id: 'signin-1',
        //                     title: 'Sign in',
        //                     type: 'item',
        //                     url: '/auth/signin-1',
        //                     target: true,
        //                     breadcrumbs: false
        //                 }
        //             ]
        //         },

        //         {
        //             id: 'sample-page',
        //             title: 'Sample Page',
        //             type: 'item',
        //             url: '/sample-page',
        //             classes: 'nav-item',
        //             icon: 'feather icon-sidebar'
        //         },
        //         {
        //             id: 'docs',
        //             title: 'Documentation',
        //             type: 'item',
        //             url: '/docs',
        //             classes: 'nav-item',
        //             icon: 'feather icon-help-circle'
        //         },
        //         {
        //             id: 'menu-level',
        //             title: 'Menu Levels',
        //             type: 'collapse',
        //             icon: 'feather icon-menu',
        //             children: [
        //                 {
        //                     id: 'menu-level-1.1',
        //                     title: 'Menu Level 1.1',
        //                     type: 'item',
        //                     url: '#!',
        //                 },
        //                 {
        //                     id: 'menu-level-1.2',
        //                     title: 'Menu Level 2.2',
        //                     type: 'collapse',
        //                     children: [
        //                         {
        //                             id: 'menu-level-2.1',
        //                             title: 'Menu Level 2.1',
        //                             type: 'item',
        //                             url: '#',
        //                         },
        //                         {
        //                             id: 'menu-level-2.2',
        //                             title: 'Menu Level 2.2',
        //                             type: 'collapse',
        //                             children: [
        //                                 {
        //                                     id: 'menu-level-3.1',
        //                                     title: 'Menu Level 3.1',
        //                                     type: 'item',
        //                                     url: '#',
        //                                 },
        //                                 {
        //                                     id: 'menu-level-3.2',
        //                                     title: 'Menu Level 3.2',
        //                                     type: 'item',
        //                                     url: '#',
        //                                 }
        //                             ]
        //                         }
        //                     ]
        //                 }
        //             ]
        //         },
        //         {
        //             id: 'disabled-menu',
        //             title: 'Disabled Menu',
        //             type: 'item',
        //             url: '#',
        //             classes: 'nav-item disabled',
        //             icon: 'feather icon-power'
        //         },
        //         /*{
        //             id: 'buy-now',
        //             title: 'Buy Now',
        //             type: 'item',
        //             icon: 'feather icon-user',
        //             classes: 'nav-item',
        //             url: 'https://codedthemes.com',
        //             target: true,
        //             external: true,
        //             badge: {
        //                 title: 'v1.0',
        //                 type: 'label-primary'
        //             }
        //         }*/
        //     ]
        // }
    ]
}