/* eslint-env mocha */
const debug = require('debug')('msssg-plugin-notes:test:integration:notesByCalendar'); // eslint-disable-line no-unused-vars

const expect = require('chai').expect;
const cheerio = require('cheerio');

const fs = require('fs');
const path = require('path');

describe('Notes pages', function() {
  beforeEach(function() {
    this.outputDir = process.env.OUTPUT_DIR;
  });

  afterEach(function() {
    delete this.outputDir;
  });

  it('should render site homepage', function(done) {
    // setup
    const outputPath = path.join(
      this.outputDir,
      'index.html'
    );
    
    debug(`outputPath: [${outputPath}]`);
    
    // run
    fs.access(outputPath, fs.constants.F_OK, (err) => {
      // test
      expect(err).to.be.null;
      return done();
    });
  });
  
   it('should render the main notes page', function(done) {
    // setup
    const outputPath = path.join(
      this.outputDir,
      'linksByCalendar',
      'index.html'
    );
    
    debug(`outputPath: [${outputPath}]`);
    
    // run
    fs.access(outputPath, fs.constants.F_OK, (err) => {
      // test
      expect(err).to.be.null;
      return done();
    });
  });
});
