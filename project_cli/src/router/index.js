import IndexPage from "@/assets/pages/IndexPage.vue"
import BlogPage from "@/assets/pages/BlogPage.vue"
import ProjectPage from "@/assets/pages/ProjectPage.vue"
import BlogDetails from '@/assets/pages/BlogDetails.vue';
import ProjectDetails from '@/assets/pages/ProjectDetails.vue';
import NotFound from '@/assets/pages/NotFoundPage.vue';

const routes = [
    {
        name: 'IndexPage',
        path: '/',
        component: IndexPage
    },
    {
        name: 'IndexPage',
        path: '/IndexPage',
        component: IndexPage
    },
    {
        name: 'BlogPage',
        path: '/BlogPage',
        component: BlogPage
    },
    {
        name: 'BlogPage',
        path: '/BlogPage/:page',
        component: BlogPage
    },
    {
        name: 'BlogDetails',
        path: '/BlogDetails',
        component: BlogDetails
    },
    {
        name: 'ProjectPage',
        path: '/ProjectPage',
        component: ProjectPage,
    },
    {
        name: 'ProjectCatalog',
        path: '/ProjectPage/:page',
        component: ProjectPage,
    },
    {
        name: 'ProjectDetails',
        path: '/ProjectDetails',
        component: ProjectDetails
    },
    {
        name: '404',
        path: '*',
        component: NotFound
    },
];

export default routes;