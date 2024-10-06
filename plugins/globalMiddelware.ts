export default defineNuxtPlugin(() => {
    addRouteMiddleware('restrict', (to) => {
        const underConstruction = false

        const isDev = process.env.NODE_ENV === 'development';

        const allowedPaths = ['/'];

        if (underConstruction && to.path !== '/underconstruction') {
            return navigateTo('/underconstruction');
        }

        if (!isDev && !underConstruction && !allowedPaths.includes(to.path)) {
            return navigateTo('/');
        }
    }, { global: true });
});
