/* eslint-env mocha */
const debug = require('debug')('msssg-plugin-notes:test:integration:notes'); // eslint-disable-line no-unused-vars

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
  
   it('should render the notes ByCalendar with prefix page', function(done) {
    // setup
    const outputPath = path.join(
      this.outputDir,
      'notesByCalendarWithPrefix',
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
  
    it('should render the notes ByCalendar without prefix page', function(done) {
    // setup
    const outputPath = path.join(
      this.outputDir,
      'notesByCalendarWithoutPrefix',
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
  
  it('should render the notes ByDate with prefix page', function(done) {
    // setup
    const outputPath = path.join(
      this.outputDir,
      'notesByDateWithPrefix',
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
  
    it('should render the notes ByDate without prefix page', function(done) {
    // setup
    const outputPath = path.join(
      this.outputDir,
      'notesByDateWithoutPrefix',
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
  
  it('should render the notes ByItem with prefix page', function(done) {
    // setup
    const outputPath = path.join(
      this.outputDir,
      'notesByItemWithPrefix',
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
  
  it('should render the notes ByItem without prefix page', function(done) {
    // setup
    const outputPath = path.join(
      this.outputDir,
      'notesByItemWithoutPrefix',
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