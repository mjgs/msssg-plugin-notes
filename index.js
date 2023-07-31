const debug = require('debug')('msssg-plugin-notes:index');

const postsByCalendar = require('msssg-plugin-postsbycalendar');

const components = require('./lib/components');

const chalk = require('chalk');
const pkgjson = require('./package.json');

module.exports = function(app, options) {
  console.log(`${pkgjson.name}: ${chalk.blue('Adding plugin:')} v${pkgjson.version}`);
  
  postsByCalendar(app);

  // Configs
  app.createOne('notesDataDir', 'NOTES_DATA_DIR', '_posts/notes');
  app.createOne('datesPerPage', 'DATES_PER_PAGE', 5);
  
  // Components
  app.addComponent('Notes', components.Notes);
  app.addComponent('NotesItem', components.NotesItem);

  return app;
}