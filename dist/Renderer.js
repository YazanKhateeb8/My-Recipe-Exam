class Render {
  
  constructor() {}

  renderRecipes(recipes) {
    $('.main').empty();
    const source = $('#recipes-template').html();
    const template = Handlebars.compile(source);
    const recipe = template({recipes});
    $('.main').append(recipe);
  }
}
