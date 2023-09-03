const searchButton = document.getElementById("searchButton");
const usernameInput = document.getElementById("usernameInput");
const userInfo = document.getElementById("userInfo");

searchButton.addEventListener("click", async () => {
  const username = usernameInput.value;
  if (username.trim() !== "") {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();

    if (response.status === 200) {
      userInfo.innerHTML = `
        <h2>${userData.name}</h2>
        <p>${userData.bio}</p>
        <p>Followers: ${userData.followers}</p>
        <p>Public Repos: ${userData.public_repos}</p>
      `;
      userInfo.style.display = "block";
    } else {
      userInfo.innerHTML = "User not found.";
      userInfo.style.display = "block";
    }
  }
});
