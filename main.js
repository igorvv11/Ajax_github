document.addEventListener('DOMContentLoaded', function(){
    const nameElement = document.querySelector('#profile-name'); 
    const userNameElement = document.querySelector('#profile-username');
    const avatarElement = document.querySelector('#profile-avatar');
    const reposELement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link')

    const url = `https://api.github.com/users/igorvv11`

    fetch(url).then(function(res){
        return res.json ();
    }).then(function(json){

        nameElement.innerText = json.name;
        userNameElement.innerText = json.login;
        avatarElement.src = json.avatar_url;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        reposELement.innerText = json.public_repos;
        linkElement.href = json.html_url;
        })
    
})
// exercicio_ajax