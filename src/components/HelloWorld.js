function Avatar() {
  return (
    <img
      src="https://scontent.flos1-1.fna.fbcdn.net/v/t1.6435-9/91259792_2704811922906701_3901228252198338560_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_rom3_SP8TkAX9mCni1&_nc_ht=scontent.flos1-1.fna&oh=00_AT-wWght4dw2uoEtWa8tynp3hzvnix59kY2hAJlZZbOUdQ&oe=632E668F"
      alt="Avatar"
    ></img>
  );
}


function showSong() {
  document.getElementById("songs").style.display = "block"
  document.getElementById("btn").style.display = "none"
}

function hideSong() {
  document.getElementById("songs").style.display = "none"
  document.getElementById("btn").style.display = "block"
}

function ProfileCard() {
  const songs = [
    <a href="https://open.spotify.com/artist/50JJSqHUf2RQ9xsHs0KMHg">
      Hand Of God
    </a>,
    <a href="https://open.spotify.com/track/6p9vTtbwiVHMahR5UwNI7k?si=9e378be8ae4740cf">
      Ungrateful Eyes
    </a>,
    <a href="https://open.spotify.com/track/6DvsjPkNcB4QoezDPtxsAB?si=815e5690af3b436e">
      Heart Is Full
    </a>,
    <a href="https://open.spotify.com/track/0wUlGPa8He68F9TmLKdcL4?si=201bf2f0483944ad">
      Simple and Sweet
    </a>,
    <a href="https://open.spotify.com/track/2X1Tygc4uVunRgzNkFb1mG?si=e98303d56a114efa">
      Let's Begin
    </a>,
  ];

  const itemList = songs.map((song) => {
    return <li key={song}>{song}</li>;
  });

  return (
    <div className="card">
      <div className="avatar">
        <Avatar />
      </div>
      <div className="name">
        <h1>Jon Bellion</h1>
      </div>
      <div className="bio">
        <p>
          Jon Bellion is an accomplished Electronic DJ, Producer, Singer and
          Song Writer
        </p>
      </div>
     
      <button onClick= {showSong} id="btn">Show Songs</button>
      <div id="songs">
        <p>Here's a list of songs he has written:</p>
        <ul>{itemList}</ul>
        <button id="hide-btn" onClick={hideSong}>Hide Songs</button>
      </div>

      <footer>
        <p>
          This was all built with ReactJS by{" "}
          <a href="https://linktr.ee/AdeDevs" target="_blank" rel="noreferrer">
            AdeDevs
          </a>
        </p>
      </footer>
    </div>
  );
}
export default ProfileCard;
