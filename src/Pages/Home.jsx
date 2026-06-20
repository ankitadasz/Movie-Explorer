
export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">🎬 Movie Explorer</h1>

        <p className="home-subtitle">
          Discover trending, top-rated, and popular movies in one place.
        </p>

        <div className="home-buttons">
          <a href="/explore" className="btn explore">
            Explore Movies
          </a>

          <a href="/trending" className="btn trending">
            Trending
          </a>
        </div>
      </div>
    </div>
  );
};