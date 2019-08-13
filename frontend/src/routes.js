import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));

const UIBasicButton = React.lazy(() => import('./Demo/UIElements/Basic/Button'));
const UIBasicBadges = React.lazy(() => import('./Demo/UIElements/Basic/Badges'));
const UIBasicBreadcrumbPagination = React.lazy(() => import('./Demo/UIElements/Basic/BreadcrumbPagination'));

const UIBasicCollapse = React.lazy(() => import('./Demo/UIElements/Basic/Collapse'));
const UIBasicTabsPills = React.lazy(() => import('./Demo/UIElements/Basic/TabsPills'));
const UIBasicBasicTypography = React.lazy(() => import('./Demo/UIElements/Basic/Typography'));

const FormsElements = React.lazy(() => import('./Demo/Forms/FormsElements'));

const BootstrapTable = React.lazy(() => import('./Demo/Tables/BootstrapTable'));

const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));

const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));

const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('./Demo/Other/Docs'));
// franchise
const CreateFranchise =  React.lazy(() => import('./components/Franchise/CreateFranchise/CreateFranchise'));
const ListFranchises =  React.lazy(() => import('./components/Franchise/ListFranchises/ListFranchises'));

// inventory
const CreateInventory =  React.lazy(() => import('./components/Inventory/CreateInventory/CreateInventory'));
const ListInventory =  React.lazy(() => import('./components/Inventory/ListInventory/ListInventory'));

// item
const CreateItem =  React.lazy(() => import('./components/Item/CreateItem/CreateItem'));
const ListItem =  React.lazy(() => import('./components/Item/ListItem/ListItem'));

//Rutas para usuarios
const UserList = React.lazy(() => import('./components/Users/UserList/UserList'));

// shop
const ProductList =  React.lazy(() => import('./components/Shop/ProductList/ProductList'));
const ProductDetail =  React.lazy(() => import('./components/Shop/ProductDetail/ProductDetail'));

// Cart
const CartList =  React.lazy(() => import('./components/Cart/CartList/CartList'));

const routes = [
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/basic/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    { path: '/basic/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    { path: '/basic/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    { path: '/basic/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    { path: '/basic/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    { path: '/basic/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    { path: '/forms/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    { path: '/tables/bootstrap', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    { path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },
    { path: '/users', exact: true, name: 'UserList', component: UserList },
    // franchise
    { path: '/franchise/create', exact: true, name: 'New Franchise', component: CreateFranchise },
    { path: '/franchise/update/:pk', exact: true, name: 'Update Franchise', component: CreateFranchise },
    { path: '/franchise/list', exact: true, name: 'List Franchises', component: ListFranchises },
    // shop
    { path: '/shop', exact: true, name: 'Shop Product List', component: ProductList },
    //{ path: '/shop/:category_slug', exact: true, name: 'Shop Product List By Category', component: ProductList },
    { path: '/shop/:pk/:product_slug', exact: true, name: 'Product Detail', component: ProductDetail },
    // Cart
    { path: '/cart', exact: true, name: 'Shopping Cart', component: CartList },
    // item
    { path: '/item/create', exact: true, name: 'New Item', component: CreateItem },
    { path: '/item/update/:pk', exact: true, name: 'Update Item', component: CreateItem },
    { path: '/item/list', exact: true, name: 'List Item', component: ListItem },
    // inventory
    { path: '/inventory/create', exact: true, name: 'New Inventory', component: CreateInventory },
    { path: '/inventory/update/:pk', exact: true, name: 'Update Inventory', component: CreateInventory },
    { path: '/inventory/list', exact: true, name: 'List Inventory', component: ListInventory }

];

export default routes;