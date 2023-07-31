const debug = require('debug')('msssg-plugin-notes:lib:components:NotesItem');

const markdownIt = require('markdown-it')();

class NotesItem {
  constructor(item) {
    this.text = item.body;
    this.slug = item.itemSlug;
    this.dateKey = item.itemDateKey;
    this.date = item.date;
    
    debug(`NotesItem: [${JSON.stringify(this.getData(), 0, 2)}]`);
  }
  
  mdToHtml(text) {
    return markdownIt.renderInline(text);
  }
  
  getItemUrl(webRoot) {
    return `${webRoot}/${this.dateKey}/${this.slug}`;
  }

  getData() {
    return {
      text: this.text,
      slug: this.slug,
      dateKey: this.dateKey,
      date: this.date
    };
  }
  
  getTemplate() {
    return `
      <% const time = date.split(' ')[1]; %>
      <% const tz = date.split(' ')[2]; %>
      <% const prefix = time + ' ' + tz; %>
      
      <% if (typeof addDateTimePrefix !== 'undefined') { %>
      
      <%= prefix %> <%- mdToHtml(text) %> <a href="<%= getItemUrl(webRoot) %>">#</a>
      
      <% } else { %>
      
      <%- mdToHtml(text) %> <a href="<%= getItemUrl(webRoot) %>">#</a>
      
      <% } %>
    `;
  }
}

module.exports = NotesItem;