// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

  const base = 'https://coginitiveservicesapi2.azurewebsites.net/'
export const environment = {
  production: false,
  
  url: 'https://coginitiveservicesapi2.azurewebsites.net',

  // siteKey: '6Ldd2AsdAAAAAOJTo79cmflQFe5sXCXJ2BSqW9qN',
  siteKey: '6LciKgwdAAAAALHpK1_XcROY9pBTs1F08coiGnZc',


  sendImage:  `${base}getRelationship`,
  getImage:  `${base}getImageById`
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
