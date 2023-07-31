module.exports = `
  <title><%= title %></title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  
  <style type="text/css">
    --font-size-default: 14px;
      
    <%- render(includes.mincss, {}); %>
  
    ul.bulletless {
      list-style: none;
      margin: 0px;
      padding: 0px;
    }
  </style> 
`;