const debug = require('debug')('msssg-plugin-notes:test:fixtures:assets:dictionaries:notes');

const fs = require('fs');
const path = require('path');

module.exports = function(app) {
  debug('Dictionary fn: notes');
  
  const notesDataDir = app.getOne('notesDataDir');
  
  debug(`notesDataDir: [${notesDataDir}]`);
  
  const options = {
    bodyKey: 'body',
    storeBody: true,
    regex: /(md)$/,
    timeInSlug: true
  };
  
  return app.utils.load.calendar
    .daily(linkblogDataDir, options);
};