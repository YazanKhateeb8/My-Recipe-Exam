const render = new Render();

const displayReciperPerPage = 5;

$('#recipe-btn').on('click', function () {

  const glutenCheck = $('#gluten-btn').is(':checked')
  const dairyCheck = $('#dairy-btn').is(':checked')
  const ingredient = $('input').val()

  $.get(`/recipes/${ingredient}?gluten=${glutenCheck}&diary=${dairyCheck}`)
  .then((recipes) => {
    
    render.renderRecipes(recipes);
  })
});


$('.pagination').on('click', 'a', function () { 
  const ingredient = $('input').val()
  const currentPage = parseInt($(this).text())
  $.get(`/recipes/pages/${ingredient}?page=${currentPage}`)
  .then((recipes) => {
    console.log(currentPage);
    render.renderRecipes(recipes);
  })
})





$('.main').on('click', 'img', function () {
  alert($(this).siblings('ul').find('li:first-child').text());
});








