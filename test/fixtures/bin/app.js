#!/usr/bin/env node

const debug = require('debug')('msssg-plugin-notes:test:fixtures:bin:app');

const MsSsg = require('mark-smiths-ssg');
const Ssg = MsSsg.Ssg;

const msssgPluginNotes = require('../../../index');

const dictionaries = require('../assets/dictionaries');
const includes = require('../assets/includes');

const app = new MsSsg();

msssgPluginNotes(app);

// Dictionaries
app.addDictionary('notes', dictionaries.notes);

// Includes
app.addInclude('head', includes.head);

debug('Initialising...');

const ssg = Ssg.createSsg(app);

(async () => {
  try {
    const outputFiles = await ssg.run();
  }
  catch(e) {
    debug(e);
  }
  
  debug(`app.dictionaries: [${JSON.stringify(app.dictionaries, 0, 2)}]`);
})();