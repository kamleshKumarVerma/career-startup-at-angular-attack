/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
};

/** User packages configuration. */
const packages: any = {
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/router-deprecated',

  // Thirdparty barrels.
  'angular2-cookie',
  'rxjs',
  'bootstrap',
  'font-awesome',
  'jquery',

  // App specific barrels.
  'utility',
  'app',
  'app/shared',
  'app/+home',
  'app/navbar',
  'app/footer',
  'app/+add-education',
  'app/+searchby',
  'app/+education-detail',
  'app/login',
  'app/signup',
  'app/+my-education-center',
  'app/+profile',
  'app/+search-result',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'angular2-cookie': 'vendor/angular2-cookie',
    'rxjs': 'vendor/rxjs',
    'bootstrap': 'vendor/bootstrap',
    'font-awesome': 'vendor/font-awesome',
    'jquery': 'vendor/jquery',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
