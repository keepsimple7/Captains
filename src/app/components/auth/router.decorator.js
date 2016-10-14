/** @ngInject */
export function routerDecorator($rootScope, $state, Auth) {
  // Redirect to login if route requires auth and the user is not logged in, or doesn't have required role
  $rootScope.$on('$stateChangeStart', function(event, next) {
    if (!next.authenticate) {
      return;
    }

    Auth.isLoggedIn(_.noop)
      .then(is => {
        if (is) {
          return;
        }

        event.preventDefault();
        $state.go('main.home');
      });
  });
}
