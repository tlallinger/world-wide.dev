export default defineNuxtPlugin(({ $config }) => {
    addRouteMiddleware('restrict', (to) => {
        const underConstruction = $config.public.underConstruction;
        if (underConstruction === 'true' && to.path !== '/underconstruction') {
            return to.path = '/underconstruction';
        }

        const allowedPaths = ['/'];
        if (underConstruction !== 'true' && !allowedPaths.includes(to.path)) {
            return to.path = '/';
        }
    }, { global: true });
});
