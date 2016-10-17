import { LocalityService } from './locality/index.service';
import { ChefService } from './chef/index.service';
import { MealService } from './meal/index.service';
import { PromotionService } from './promotion/index.service';

export default angular.module('captainscook.models', [])
  .factory('Locality', LocalityService)
  .factory('Chef', ChefService)
  .factory('Meal', MealService)
  .factory('Promotion', PromotionService);
