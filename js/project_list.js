var projectList1 = '';
var projectList2 = '';

function createProjectList(){
  for(var i = 0; i < projects.length; i++){
    if (i % 2 == 0) {
      projectList1 += 
      `
      <div class="card-group project">
        <div class="card bg-light">
          <img class="card-img-top" src="${projects[i].img}" alt="${projects[i].imgAlt}">
          <div class="card-body">
            <h5 class="card-title">${projects[i].title}</h5>
            <p class="card-text">${projects[i].desc}</p>
            <a href="${projects[i].url}" class="btn btn-primary">View Project</a>
          </div>
        </div>
      </div>
      `;
    }
    if (Math.abs(i % 2) == 1)
    projectList2 += 
    `
    <div class="card-group project"">
      <div class="card bg-light">
        <img class="card-img-top" src="${projects[i].img}" alt="${projects[i].imgAlt}">
        <div class="card-body">
          <h5 class="card-title">${projects[i].title}</h5>
          <p class="card-text">${projects[i].desc}</p>
          <a href="${projects[i].url}" class="btn btn-primary">View Project</a>
        </div>
      </div>
    </div>
    `;
  }
  $('.list-1').html(projectList1);
  $('.list-2').html(projectList2);
}

$(document).ready(function(){
  createProjectList();
});
