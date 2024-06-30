const debug = require('debug')('msssg-plugin-notes:lib:components:Notes');

const verbosity = [
 'none',
 'info',
 'debug',
 'silly' 
].indexOf(process.env.VERBOSITY || 'none');

class Notes {
constructor(dictionaryName, sortedBy, author, webRoot, perPage, perDateItemOrdering = 'reverse-chronological', postsListClass = 'bulletless', itemsListClass = 'bulletless', postItemComponentName, postItemComponentEnvProps) {
    this.dictionaryName = dictionaryName;
    this.sortedBy = sortedBy;
    this.author = author;
    this.webRoot = webRoot;
    this.perPage = perPage;
    this.perDateItemOrdering = perDateItemOrdering;
    this.postsListClass = postsListClass;
    this.itemsListClass = itemsListClass;
    this.postItemComponentName = postItemComponentName;
    this.postItemComponentEnvProps = postItemComponentEnvProps;
    
    debug(`props: [${JSON.stringify(this.getData(), 0, 2)}]`);
  }
  
  log(name, value, level = 0) {
    if (level <= verbosity) {
      debug(`log - ${name}: ${JSON.stringify(value, 0, 2)}`);
    } 
  }
  
  getData() {
    return {
      dictionaryName: this.dictionaryName,
      sortedBy: this.sortedBy,
      author: this.author,
      webRoot: this.webRoot,
      perPage: this.perPage,
      perDateItemOrdering: this.perDateItemOrdering,
      postsListClass: this.postsListClass,
      itemsListClass: this.itemsListClass,
      postItemComponentName: this.postItemComponentName,
      postItemComponentEnvProps: this.postItemComponentEnvProps
    };
  }
  
  getTemplate() {
    return `
      <% log('postItemComponentName', postItemComponentName); %>
      <% log('postItemComponentEnvProps', postItemComponentEnvProps); %>
      
      <% const dateKey = undefined; %>
      
      <%- await renderComponent(new components.Posts(dictionaryName, sortedBy, author, webRoot, perPage, perDateItemOrdering, dateKey, postsListClass, itemsListClass, postItemComponentName, postItemComponentEnvProps), {}); %>
    `;
  }
}

module.exports = Notes;