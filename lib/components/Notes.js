const debug = require('debug')('msssg-plugin-notes:lib:components:Notes');

class Notes {
  constructor(dictionaryName, author, webRoot, perPage, perDateItemOrdering = 'chronological') {
    this.dictionaryName = dictionaryName;
    this.author = author;
    this.webRoot = webRoot;
    this.perPage = perPage;
    this.perDateItemOrdering = perDateItemOrdering;
    
    debug(`Notes: [${JSON.stringify(this.getData(), 0, 2)}]`);
  }
  
  getData() {
    return {
      dictionaryName: this.dictionaryName,
      author: this.author,
      webRoot: this.webRoot,
      perPage: this.perPage,
      perDateItemOrdering: this.perDateItemOrdering
    };
  }
  
  getTemplate() {
    return `
      <article>
        <% const postsByCalendarItemComponentEnvProps = { itemTitleHtmlTag, listClass, author, includeContent, webRoot }; %>
      
        <%- await renderComponent(new components.PostsByCalendar(dictionaryName, webRoot, perPage, postsByCalendarItemComponentEnvProps, 'chronological'), { postsByCalendarItemComponentName, itemTitleHtmlTag, listClass }); %>
      </article>
    `;
  }
}

module.exports = Notes;