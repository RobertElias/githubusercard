const followersArray = [
    "RobertElias",
    "bradtraversy",
    "alphaseinor",
    "Colt",
    "andrewjmead"
  
  ];
  
  followersArray.forEach(follower => {
    axios.get(`https://api.github.com/users/${follower}`)
        .then(response => {
            console.log(response.data);
            profiles(response.data);
            return follower;
        });
    
  })
  
  
  
  
  
    
  
  
  // Step Three: talk about HTTP, requesting data from a server, and axios
  //const Post = document.querySelector('.cards');
  // axios.get("https://api.github.com/users/RobertElias/followers")
  //   .then(response => {
  //     console.log(response.data);
  //     response.data.forEach(item => {
  //       const newCard = profiles(item)
  //       Post.appendChild(cardDiv);
  //     })
  //   })
  // .catch(error =>{
  //   console.log("The data was not returned" ,error)
  // })
  
  /* Step 3: Create a function that accepts a single object as its only argument,
            Using DOM methods and properties, create a component that will return the following DOM element:
  <div class="card">
    <img src={image url of user} />
    <div class="card-info">
      <h3 class="name">{users name}</h3>
      <p class="username">{users user name}</p>
      <p>Location: {users location}</p>
      <p>Profile:  
        <a href={address to users github page}>{address to users github page}</a>
      </p>
      <p>Followers: {users followers count}</p>
      <p>Following: {users following count}</p>
      <p>Bio: {users bio}</p>
    </div>
  </div>
  */
  
  function profiles(object) {
  
    //create Elements 
  
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
  
    const avatar = document.createElement('img');
    avatar.src = object.avatar_url;
  
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
  
    const nameH3 = document.createElement('h3');
    nameH3.classList.add('name');
    nameH3.textContent = object.name;
  
    const userP = document.createElement('p');
    userP.classList.add('username');
    userP.textContent = object.login
  
    const Location = document.createElement('p');
    Location.textContent = `Location: ${object.location}`
  
    const profileP = document.createElement('p');
    profileP.textContent = `Profile: `
  
    const Anchor = document.createElement('a');
    Anchor.href = object.html_url;
    Anchor.textContent = 'Github-Page';
  
    const Followers = document.createElement('p');
    Followers.textContent = `Followers: ${object.followers}`;
  
    const Following = document.createElement('p');
    Following.textContent = `Following : ${object.following}`;
  
    const Bio = document.createElement('p');
    Bio.textContent = `Bio Info: ${object.bio}`;
  
    //appendChild
    cardDiv.appendChild(avatar);
    cardDiv.appendChild(cardInfo);
  
    cardInfo.appendChild(nameH3);
    cardInfo.appendChild(userP);
    cardInfo.appendChild(Location);
    cardInfo.appendChild(profileP);
    cardInfo.appendChild(Followers);
    cardInfo.appendChild(Following);
    cardInfo.appendChild(Bio);
  
    profileP.appendChild(Anchor);
  
    const Post = document.querySelector('.cards');
    Post.appendChild(cardDiv);
   
    return cardDiv;
  }