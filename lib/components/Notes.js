const debug = require('debug')('msssg-plugin-notes:lib:components:Notes');

class Notes {
  constructor(dictionaryName, author, webRoot, postsPerPage, perDateItemOrdering = 'chronological') {
    this.dictionaryName = dictionaryName;
    this.author = author;
    this.webRoot = webRoot;
    this.postsPerPage = postsPerPage;
    this.perDateItemOrdering = perDateItemOrdering;
    
    debug(`Notes: [${JSON.stringify(this.getData(), 0, 2)}]`);
  }
  
  getData() {
    return {
      dictionaryName: this.dictionaryName,
      author: this.author,
      webRoot: this.webRoot,
      postsPerPage: this.postsPerPage,
      perDateItemOrdering: this.perDateItemOrdering
    };
  }
  
  getTemplate() {
    return `
      <article> 
        <%- await renderComponent(new components.PostsByCalendar(dictionaryName, webRoot, postsPerPage, perDateItemOrdering), { postsByCalendarItemComponentName: 'NotesItem', itemTitleHtmlTag, listClass }); %>
      </article>
    `;
  }
}

module.exports = Notes;