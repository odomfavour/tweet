// console.log('i am a boy...');

// variables
const tweetList = document.getElementById('tweet-list');


// event listeners

eventListeners();
function eventListeners() {
  // form submit

  const form = document.querySelector('#form');
  form.addEventListener('submit', newTweet);

  // remove tweet from list
  tweetList.addEventListener('click', removeTweet);

  // Document
  document.addEventListener('DOMContentLoaded', localStorageOnLoad);
 
}


// function

function newTweet (e) {
  e.preventDefault();
  // console.log('Form Submitted')

  // read value
  const tweet = document.getElementById('tweet').value;
  console.log(tweet);

  // create remove button

  const removeBtn = document.createElement('a');
  removeBtn.classList = 'remove-tweet';
  removeBtn.textContent = 'X';


  // create list
  const li = document.createElement('li');
  li.textContent = tweet;
  
  tweetList.appendChild(removeBtn);

  // add remove button to each tweet
  li.appendChild(removeBtn);

  // add to the list
  tweetList.appendChild(li);

  // add to local storage
  addTweetToLocalStorage(tweet);

  // Add an alert
  alert('Tweet added.')

  // clear the textarea
  this.reset();

}

// remove at tweet from the list

function removeTweet(e) {
 if(e.target.classList.contains('remove-tweet')){
  //  console.log('Yes');
   e.target.parentElement.remove();
 }

//  console.log(e.target.parentElement.textContent)
 
 // remove from storage
 removeTweetFromLocalStorage(e.target.parentElement.textContent);
}


// adds tweet to local storage
function addTweetToLocalStorage (tweet) {
  // console.log('Hello form ')
  let tweets = getTweetsFromStorage();
  // console.log(tweets);

  //Add tweets into an array
  tweets.push(tweet);

  // convert tweets array into string
  localStorage.setItem('tweets', JSON.stringify(tweets))
}

// Read a 

function getTweetsFromStorage() {
  let tweets;
  // get the values, if null is returned then we create an empty array
  const tweetsLs = localStorage.getItem('tweets');
  if(tweetsLs === null) {
    tweets = [];
  } else {
    tweets = JSON.parse( tweetsLs);
  }
  return tweets;
}


// prints local storage tweets on load
function localStorageOnLoad () {
  let tweets = getTweetsFromStorage();
  // console.log(tweets);

  // loop through storage and prints values

  tweets.forEach(function(tweet) {

    // create remove button

  const removeBtn = document.createElement('a');
  removeBtn.classList = 'remove-tweet';
  removeBtn.textContent = 'X';


  // create list
  const li = document.createElement('li');
  li.textContent = tweet;
  
  tweetList.appendChild(removeBtn);

  // add remove button to each tweet
  li.appendChild(removeBtn);

  // add to the list
  tweetList.appendChild(li);
  });
}


// removes the tweet from local storage

function removeTweetFromLocalStorage(tweet) {
  // console.log(tweet);

  //get tweets from storage
  let tweets = getTweetsFromStorage();

  // Remove the X from storage

  const tweetDelete = tweet.substring(0, tweet.length -1);
  // console.log(tweetDelete);

  // loop through the tweets and remove the tweet thst is equal
  tweets.forEach(function (tweetLs, index) {
    if(tweetDelete === tweetLs) {
      tweets.splice(index, 1)
    }
 
});

// save the dats
localStorage.setItem('tweets', JSON.stringify(tweets))
console.log(tweets)

}