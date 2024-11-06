document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const resumeContainer = document.getElementById('resume') as HTMLElement;

    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        updateResume();
    });

    function updateResume() {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const title = (document.getElementById('title') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const degree = (document.getElementById('degree') as HTMLInputElement).value;
        const school = (document.getElementById('school') as HTMLInputElement).value;
        const eduYear = (document.getElementById('eduYear') as HTMLInputElement).value;
        const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
        const company = (document.getElementById('company') as HTMLInputElement).value;
        const expYear = (document.getElementById('expYear') as HTMLInputElement).value;
        const responsibilities = (document.getElementById('responsibilities') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        (document.getElementById('resumeName') as HTMLElement).textContent = name;
        (document.getElementById('resumeTitle') as HTMLElement).textContent = title;
        (document.getElementById('resumeEmail') as HTMLElement).textContent = `Email: ${email}`;
        (document.getElementById('resumePhone') as HTMLElement).textContent = `Phone: ${phone}`;
        (document.getElementById('resumeDegree') as HTMLElement).textContent = degree;
        (document.getElementById('resumeSchool') as HTMLElement).textContent = school;
        (document.getElementById('resumeEduYear') as HTMLElement).textContent = eduYear;
        (document.getElementById('resumeJobTitle') as HTMLElement).textContent = jobTitle;
        (document.getElementById('resumeCompany') as HTMLElement).textContent = company;
        (document.getElementById('resumeExpYear') as HTMLElement).textContent = expYear;

        const responsibilitiesList = document.getElementById('resumeResponsibilities') as HTMLUListElement;
        responsibilitiesList.innerHTML = '';
        responsibilities.split(',').forEach(resp => {
            const li = document.createElement('li');
            li.textContent = resp.trim();
            responsibilitiesList.appendChild(li);
        });

        const skillsList = document.getElementById('resumeSkills') as HTMLUListElement;
        skillsList.innerHTML = '';
        skills.split(',').forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill.trim();
            skillsList.appendChild(li);
        });

        resumeContainer.style.display = 'block';
    }
});