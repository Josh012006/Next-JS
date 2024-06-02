
let images = document.getElementsByClassName('gal');
let projects = document.getElementsByClassName('project');
console.log(projects);

projects[0].classList.remove('hidden');
projects[0].classList.add('flex');

for(let element of images) {
    element.addEventListener('click', (e) => {
        projects = document.getElementsByClassName('project');
        console.log(projects);
        let num = Number(e.target.id);

        projects[num - 1].classList.remove('hidden');
        projects[num - 1].classList.add('flex');

        for(let i in projects) {
            if(i != (num - 1)) {
                console.log(projects[i])
                if(projects[i].classList) {
                    if(projects[i].classList.contains('flex')) {
                        projects[i].classList.remove('flex');
                        console.log(projects[i].classList)
                    }
                    projects[i].classList.add('hidden');
                }
            }
        }
    })
};