import Helper from 'src/app/shared/models/helper.model';

export default class HelperCacheService {

  private constructor() {
    HelperCacheService.CachePopulated = false;
  }

  private static Instance: HelperCacheService;

  private static Cache: Helper[];
  private static Postcode: string;

  private static CachePopulated: boolean;

  public static GetInstance(): HelperCacheService {
    if (!HelperCacheService.Instance) {
      HelperCacheService.Instance = new HelperCacheService();
    }

    return HelperCacheService.Instance;
  }

  public getCache(): { helpers: Helper[], postcode: string } | false {
    if (HelperCacheService.CachePopulated) {
      return {
        helpers: HelperCacheService.Cache,
        postcode: HelperCacheService.Postcode
      };
    } else {
      return false;
    }
  }

  public setCache(helpers: Helper[], postcode: string): void {
    HelperCacheService.Cache = helpers;
    HelperCacheService.Postcode = postcode;
    HelperCacheService.CachePopulated = true;
  }
}
