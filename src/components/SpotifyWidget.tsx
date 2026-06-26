type Track = {
  name: string;
  artist: string;
  url: string;
};

/** Exchange the long-lived refresh token for a fresh access token */
async function getAccessToken(): Promise<string | null> {
  const clientId     = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) return null;

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method:  "POST",
    headers: {
      Authorization:  `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type:    "refresh_token",
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.access_token ?? null;
}

async function getTopTrack(): Promise<Track | null> {
  const token = await getAccessToken();
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
    <div className="border-t border-[#292929]" style={{ backgroundColor: "#0D0D0D" }}>
      <div className="max-w-[1152px] mx-auto px-6 py-8 flex items-center justify-between gap-6 flex-wrap">
        <p className="font-['Manrope'] font-light text-[18px] text-[#929296] leading-[1.48] tracking-[0.18px]">
          Top track
        </p>
        <a
          href={track.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-['Manrope'] font-light text-[18px] text-white hover:text-[#F6CA4F] active:text-[#F5B73D] transition-colors leading-[1.48] tracking-[0.18px]"
        >
          {track.name} — {track.artist} ↗
        </a>
      </div>
    </div>
  );
}
