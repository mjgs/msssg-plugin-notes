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
    this.item = item;
    
    debug(`props: [${JSON.stringify(this.getData(), 0, 2)}]`);
  }
  
  log(name, value, level = 0) {
    if (level <= verbosity) {
      debug(`log - ${name}: ${JSON.stringify(value, 0, 2)}`);
    }
  }

  getData() {
    return {
      item: this.item
    };
  }
  
  mdToHtml(text) {
    return markdownIt.renderInline(text);
  }
  
  getItemUrl(webRoot) {
    const url = `${webRoot}/${this.item.itemDateKey}/${this.item.itemSlug}`;
    
    debug(`getItemUrl - url: [${url}]`);
    
    return url;
  }
  
  getTemplate() {
    return `
      <% const time = item.date.split(' ')[1]; %>
      <% const tz = item.date.split(' ')[2]; %>
      <% const prefix = time + ' ' + tz; %>
      <% const dateTimePrefixSpecified = ((typeof dateTimePrefix !== 'undefined') && (dateTimePrefix === true)); %>
      
      <% if (dateTimePrefixSpecified) { %><%= prefix %><% } %> <%- mdToHtml(item.body) %> <a href="<%= getItemUrl(webRoot) %>">#</a>
    `;
  }
}

module.exports = NotesItem;