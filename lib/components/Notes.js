const debug = require('debug')('msssg-plugin-notes:lib:components:Notes');

class Notes {
constructor(dictionaryName, sortedBy, author, webRoot, perPage, perDateItemOrdering = 'reverse-chronological', dateTimePrefix = false, itemTitleHtmlTag = 'h2', postsListClass = 'bulletless', itemsListClass = 'bulletless') {
    this.dictionaryName = dictionaryName;
    this.sortedBy = sortedBy;
    this.author = author;
    this.webRoot = webRoot;
    this.perPage = perPage;
    this.perDateItemOrdering = perDateItemOrdering;
    this.dateTimePrefix = dateTimePrefix;
    this.itemTitleHtmlTag = itemTitleHtmlTag;
    this.postsListClass = postsListClass;
    this.itemsListClass = itemsListClass;
    
    debug(`props: [${JSON.stringify(this.getData(), 0, 2)}]`);
  }
  
  getData() {
    return {
      dictionaryName: this.dictionaryName,
      sortedBy: this.sortedBy,
      author: this.author,
      webRoot: this.webRoot,
      perPage: this.perPage,
      perDateItemOrdering: this.perDateItemOrdering,
      dateTimePrefix: this.dateTimePrefix,
      itemTitleHtmlTag: this.itemTitleHtmlTag,
      postsListClass: this.postsListClass,
      itemsListClass: this.itemsListClass
    };
  }
  
  getTemplate() {
    return `
      <% const postItemComponentName = 'NotesItem'; %>
      <% const postItemComponentEnvProps = { dateTimePrefix, itemTitleHtmlTag, listClass: itemsListClass, webRoot }; %>
      
      <%- await renderComponent(new components.Posts(dictionaryName, sortedBy, author, webRoot, perPage, perDateItemOrdering, undefined, postsListClass, itemsListClass, postItemComponentName, postItemComponentEnvProps), {}); %>
    `;
  }
}

module.exports = Notes;