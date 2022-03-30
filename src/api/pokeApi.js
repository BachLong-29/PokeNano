import axiosClient from "./axiosClient";
import apiConfig from "./apiConfig";

const pokeApi = {
    getPokemon: (id) => {
       const url = apiConfig.baseUrl + '/' + id
       console.log(url);
       return axiosClient.get(url)
    },
    getPokemonList: () => {
        const url = apiConfig.baseUrl
        return axiosClient.get(url)
    }
}
export default pokeApi