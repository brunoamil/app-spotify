import axios from "axios";
import "dotenv";


const URL = "https://app-spotify-api.onrender.com/api"

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

