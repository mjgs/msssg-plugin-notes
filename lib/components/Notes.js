const debug = require('debug')('msssg-plugin-notes:lib:components:Notes');

class Notes {
  constructor(dictionaryName, author, webRoot, perPage, perDateItemOrdering = 'chronological', postsByCalendar = true) {
    this.dictionaryName = dictionaryName;
    this.author = author;
    this.webRoot = webRoot;
    this.perPage = perPage;
    this.perDateItemOrdering = perDateItemOrdering;
    this.postsByCalendar = postsByCalendar;
    
    debug(`Notes: [${JSON.stringify(this.getData(), 0, 2)}]`);
  }
  
  getData() {
    return {
      dictionaryName: this.dictionaryName,
      author: this.author,
      webRoot: this.webRoot,
      perPage: this.perPage,
      perDateItemOrdering: this.perDateItemOrdering,
      postsByCalendar: this.postsByCalendar
    };
  }
  
  itemsFromSortedByItem(keyedItems) {
    const items = Object.keys(keyedItems).reduce((acc, curr) => {
      const item = keyedItems[curr];
      acc.push(item);
      return acc;
    }, []);
    
    if (verbosity >= 3) {
      debug(`itemsFromSortedByItem - items: [${JSON.stringify(items, 0, 2)}]`);
    } 
    
    return items;
  }
  
  getTemplate() {
    return `
      <% if (postsByCalendar) { %>
      
      <% const postsByCalendarItemComponentEnvProps = { itemTitleHtmlTag, listClass, author, webRoot, postsByCalendar, dateTimePrefix }; %>
      
      <%- await renderComponent(new components.PostsByCalendar(dictionaryName, webRoot, perPage, postsByCalendarItemComponentEnvProps, 'chronological'), { postsByCalendarItemComponentName, itemTitleHtmlTag, listClass }); %>
      
      <% } else { %>
      
      <% const keyedItems = dictionaries[dictionaryName].sortedByItem; %>
      <% const items = itemsFromSortedByItem(keyedItems); %>
      <% const totalNumberOfItems = items.length; %>
      <% const numberOfItems = (totalNumberOfItems < perPage) ? totalNumberOfItems : perPage; %>
      
      <ul class="<%= listClass %>">
            
        <% for(var i = 0; i < numberOfItems; i++) { %>
      
        <% const item = items[i]; %>
        
        <li>
          <article>
            <p>
              <%- await renderComponent(new components.NotesItem(item), { itemTitleHtmlTag, listClass, webRoot, postsByCalendar, dateTimePrefix }); %>
            </p>
          </article>
        </li>
    
        <% } %>
    
      </ul>
      
      <% } %>
    `;
  }
}

module.exports = Notes;