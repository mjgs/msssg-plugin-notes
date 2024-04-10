const debug = require('debug')('msssg-plugin-notes:lib:components:NotesItem');

const verbosity = [
 'none',
 'info',
 'debug',
 'silly' 
].indexOf(process.env.VERBOSITY || 'none');

const markdownIt = require('markdown-it')();

class NotesItem {
  constructor(item) {
    this.text = item.body;
    this.slug = item.itemSlug;
    this.dateKey = item.itemDateKey;
    this.date = item.date;
    
    debug(`NotesItem: [${JSON.stringify(this.getData(), 0, 2)}]`);
  }
  
  log(name, value, level = 0) {
    if (level <= verbosity) {
      debug(`log - ${name}: ${JSON.stringify(value, 0, 2)}`);
    }
  }

  getData() {
    return {
      text: this.text,
      slug: this.slug,
      dateKey: this.dateKey,
      date: this.date
    };
  }
  
  mdToHtml(text) {
    return markdownIt.renderInline(text);
  }
  
  getItemUrl(webRoot) {
    return `${webRoot}/${this.dateKey}/${this.slug}`;
  }
  
  getTemplate() {
    return `
      <% const time = date.split(' ')[1]; %>
      <% const tz = date.split(' ')[2]; %>
      <% const prefix = time + ' ' + tz; %>
      <% const dateTimePrefixSpecified = ((typeof dateTimePrefix !== 'undefined') && (dateTimePrefix === true)); %>
      
      <% if (dateTimePrefixSpecified) { %><%= prefix %><% } %> <%- mdToHtml(text) %> <a href="<%= getItemUrl(webRoot) %>">#</a>
    `;
  }
}

module.exports = NotesItem;