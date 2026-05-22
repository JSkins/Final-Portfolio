type Track = {
  name: string;
  artist: string;
  url: string;
};

async function getTopTrack(): Promise<Track | null> {
  const token = process.env.SPOTIFY_TOKEN;
  if (!token) return null;

  try {
    const res = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=1",
      {
        headers: { Authorization: `Bearer ${token}` },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const track = data.items?.[0];
    if (!track) return null;
    return {
      name: track.name,
      artist: track.artists.map((a: { name: string }) => a.name).join(", "),
      url: track.external_urls.spotify,
    };
  } catch {
    return null;
  }
}

export default async function SpotifyWidget() {
  const track = await getTopTrack();
  if (!track) return null;

  return (
    <div className="border-t border-[#292929]">
      <div className="max-w-[1152px] mx-auto px-6 py-8 flex items-center justify-between gap-6 flex-wrap">
        <p className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">
          Top track
        </p>
        <a
          href={track.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-['Manrope'] font-light text-[18px] text-white hover:text-[#929296] transition-colors leading-[1.48] tracking-[0.18px]"
        >
          {track.name} — {track.artist} ↗
        </a>
      </div>
    </div>
  );
}
