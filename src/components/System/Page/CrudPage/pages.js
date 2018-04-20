export default (pageName, overrideRoutes) => ({
  view: `/${pageName}/view/:id`,
  create: `/${pageName}/new`,
  list: `/${pageName}`,
  ...overrideRoutes
});
