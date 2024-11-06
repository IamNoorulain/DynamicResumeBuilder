document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeContainer = document.getElementById('resume');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        updateResume();
    });
    function updateResume() {
        var name = document.getElementById('name').value;
        var title = document.getElementById('title').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var degree = document.getElementById('degree').value;
        var school = document.getElementById('school').value;
        var eduYear = document.getElementById('eduYear').value;
        var jobTitle = document.getElementById('jobTitle').value;
        var company = document.getElementById('company').value;
        var expYear = document.getElementById('expYear').value;
        var responsibilities = document.getElementById('responsibilities').value;
        var skills = document.getElementById('skills').value;
        document.getElementById('resumeName').textContent = name;
        document.getElementById('resumeTitle').textContent = title;
        document.getElementById('resumeEmail').textContent = "Email: ".concat(email);
        document.getElementById('resumePhone').textContent = "Phone: ".concat(phone);
        document.getElementById('resumeDegree').textContent = degree;
        document.getElementById('resumeSchool').textContent = school;
        document.getElementById('resumeEduYear').textContent = eduYear;
        document.getElementById('resumeJobTitle').textContent = jobTitle;
        document.getElementById('resumeCompany').textContent = company;
        document.getElementById('resumeExpYear').textContent = expYear;
        var responsibilitiesList = document.getElementById('resumeResponsibilities');
        responsibilitiesList.innerHTML = '';
        responsibilities.split(',').forEach(function (resp) {
            var li = document.createElement('li');
            li.textContent = resp.trim();
            responsibilitiesList.appendChild(li);
        });
        var skillsList = document.getElementById('resumeSkills');
        skillsList.innerHTML = '';
        skills.split(',').forEach(function (skill) {
            var li = document.createElement('li');
            li.textContent = skill.trim();
            skillsList.appendChild(li);
        });
        resumeContainer.style.display = 'block';
    }
});
