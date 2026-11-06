const profiles = [
  {
    name: "Aisha",
    age: 27,
    city: "Brooklyn",
    occupation: "Product Designer",
    bio: "I collect stories, good coffee, and spontaneous weekend plans. Looking for someone who laughs easily and loves trying new places.",
    tags: ["Travel", "Art", "Coffee"],
    distance: "2 km away",
    online: true,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Daniel",
    age: 30,
    city: "Seattle",
    occupation: "Software Engineer",
    bio: "Love hiking, road trips, and building things that make life a little easier. Looking for someone with curiosity and a playful heart.",
    tags: ["Hiking", "Tech", "Music"],
    distance: "5 km away",
    online: true,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Mila",
    age: 26,
    city: "Austin",
    occupation: "Photographer",
    bio: "Sunsets, city walks, and cozy nights in. I’m happiest when I’m sharing a good conversation and a great meal.",
    tags: ["Photography", "Food", "Sunsets"],
    distance: "1 km away",
    online: false,
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Leo",
    age: 29,
    city: "Miami",
    occupation: "Marketing Lead",
    bio: "I enjoy beach walks, creative work, and someone who can keep up with a spontaneous adventure. Balanced and easygoing is my thing.",
    tags: ["Beach", "Comedy", "Fitness"],
    distance: "7 km away",
    online: true,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80"
  }
];

const state = {
  profileIndex: 0,
  matchCount: 12,
  likesCount: 31,
  matches: [
    { name: "Zoe", initials: "Z", status: "New" },
    { name: "Noah", initials: "N", status: "Active" },
    { name: "Jade", initials: "J", status: "New" }
  ]
};

const profileName = document.getElementById("profile-name");
const profileAge = document.getElementById("profile-age");
const profileCity = document.getElementById("profile-city");
const profileOccupation = document.getElementById("profile-occupation");
const profileBio = document.getElementById("profile-bio");
const profileTags = document.getElementById("profile-tags");
const profileImage = document.getElementById("profile-image");
const profileDistance = document.getElementById("profile-distance");
const profileStatus = document.getElementById("profile-status");
const matchCount = document.getElementById("match-count");
const likesCount = document.getElementById("likes-count");
const matchesList = document.getElementById("matches-list");

function renderProfile() {
  const current = profiles[state.profileIndex];

  if (!current) {
    profileName.textContent = "No more profiles";
    profileAge.textContent = "";
    profileCity.textContent = "Check back soon";
    profileOccupation.textContent = "Explore more";
    profileBio.textContent = "You’ve reached the end of today’s suggestions. Come back later for more matches.";
    profileTags.innerHTML = "";
    profileImage.src = "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80";
    profileDistance.textContent = "Fresh picks";
    profileStatus.textContent = "Paused";
    return;
  }

  profileName.textContent = current.name;
  profileAge.textContent = current.age;
  profileCity.textContent = current.city;
  profileOccupation.textContent = current.occupation;
  profileBio.textContent = current.bio;
  profileImage.src = current.image;
  profileDistance.textContent = current.distance;
  profileStatus.textContent = current.online ? "Online" : "Away";
  profileStatus.classList.toggle("green", current.online);

  profileTags.innerHTML = current.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
}

function renderMatches() {
  matchesList.innerHTML = state.matches
    .map(
      (match) => `
        <div class="match-item">
          <div class="match-person">
            <div class="avatar gradient-pink">${match.initials}</div>
            <div>
              <h4>${match.name}</h4>
              <p>${match.status === "New" ? "Started a chat" : "Recently active"}</p>
            </div>
          </div>
          <span class="status-tag">${match.status}</span>
        </div>
      `
    )
    .join("");
}

function updateCounts() {
  matchCount.textContent = state.matchCount;
  likesCount.textContent = state.likesCount;
}

function goToNextProfile() {
  state.profileIndex = (state.profileIndex + 1) % profiles.length;
  renderProfile();
}

document.getElementById("like-btn").addEventListener("click", () => {
  state.matchCount += 1;
  state.likesCount += 1;
  updateCounts();
  goToNextProfile();
});

document.getElementById("superlike-btn").addEventListener("click", () => {
  state.likesCount += 2;
  state.matchCount += 1;
  updateCounts();
  goToNextProfile();
});

document.getElementById("reject-btn").addEventListener("click", () => {
  goToNextProfile();
});

renderProfile();
renderMatches();
updateCounts();
