var projectList = '';

function createProjectList(){
  for(var i = 0; i < projects.length; i++){
    projectList += '<a href="' + projects[i].url + '"><div class="project-preview"><img src="' + projects[i].img + '" alt="' + projects[i].imgAlt + '" class="img-thumbnail"><div class="project-info"><div class="project-title"><h5>' + projects[i].title + '</h5></div><div class="project-desc">' + projects[i].desc + '</div></div></div></a>';
  }
  $('.project-list').html(projectList);
}

$(document).ready(function(){
  createProjectList();
});
