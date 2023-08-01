function fetchGitHubProfile(username) {
    const url = `https://api.github.com/users/${username}`;
  
    return fetch(url)
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error('Error fetching GitHub profile:', error);
        return null;
      });
  }
  
  function profileLinks(data) {
    const profileDiv = document.createElement("div");
    const profileLink = document.createElement("a");
    profileLink.href = data.html_url;
    profileLink.textContent = data.login;
    profileDiv.appendChild(profileLink);
    return profileDiv;
  }

  const usernames = ["matthkang", "CJFeagin33", "danielfama14", "chinosj89"];
  const container = document.getElementById("github");
  
  usernames.forEach(username => {
    fetchGitHubProfile(username)
      .then(profile => {
        if (profile) {
          container.appendChild(profileLinks(profile));
        }
      });
  });