/* global moment:false, $ */
import './pages/index'
import './common/index'
import './components/auth/index'

import { Footer } from './components/footer/index';
import { Header } from './components/header/index';
import { SearchCmt } from './search/index';
import { config } from './index.config';
import { runBlock } from './index.run';

angular.module('captainscook', [
    'ngAnimate',
    'ngCookies',
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'ngMaterial',
    'toastr',
    'captainscook.pages',
    'captainscook.common',
    'captainscook.auth',
    'pasvaz.bindonce',
    'slick',
    'angular-flexslider'
  ])
  .component('ctFooter', Footer)
  .component('ctHeader', Header)
  .component('ctSearch', SearchCmt)
  .constant('$', $)
  .constant('moment', moment)
  .config(config)
  .run(runBlock)
