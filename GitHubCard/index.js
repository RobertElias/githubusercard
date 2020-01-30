/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/





/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

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

// axios.get("https://api.github.com/users/RobertElias/followers")
//   .then(response => {
//     //console.log(response.data);
//     response.data.forEach(item => {
//       //console.log(response.data);
//       const newCard = profiles(item)
//       console.log(item);

//     })
//   })
// .catch(error =>{
//   console.log("The data was not returned" ,error)
// })






// Step Three: talk about HTTP, requesting data from a server, and axios





/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/