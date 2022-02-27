import replace from 'gulp-replace'; //search and replace
import plumber from 'gulp-plumber'; // error processing
import notify from 'gulp-notify'; // messages (tips)
import browsersync from 'browser-sync'; // local server
import newer from 'gulp-newer'; // updates checking

// Export object
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer
}