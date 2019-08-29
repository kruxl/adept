/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/dashboard',
    // Relative to /src/views
    view: 'Dashboard'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile'
  },
  {
    path: '/project-list',
    name: 'Project List',
    view: 'ProjectList'
  },
  {
    path: '/add-flow',
    name: 'Flow Form',
    view: 'FlowForm'
  },
  {
    path: '/icons',
    view: 'Icons'
  },
  {
    path: '/io-add-flow',
    name: 'IO Flow Form',
    view: 'IOFlowForm'
  },
  {
    path: '/add-students',
    name: 'Add Students',
    view: 'StudentFlowForm'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/project-view',
    name: 'Project View',
    view: 'ProjectView'
  }
]
