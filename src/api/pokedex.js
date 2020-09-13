import axios from "axios";
import { uniqBy } from "lodash";

const pokedexAPI = {
  getPokedex: async (search = "") => {
    try {
      if (!search) {
        return axios
          .get("http://localhost:3030/api/cards", {
            params: {
              limit: 30,
            },
          })
          .then((res) => res.data);
      }

      const nameQuery = await axios
        .get("http://localhost:3030/api/cards", {
          params: {
            limit: 30,
            name: search,
          },
        })
        .then((res) => res.data.cards);
      const typeQuery = await axios
        .get("http://localhost:3030/api/cards", {
          params: {
            limit: 30,
            type: search,
          },
        })
        .then((res) => res.data.cards);
      return {
        cards: uniqBy([...nameQuery, ...typeQuery], "id"),
      };
    } catch (err) {
      throw err;
    }
  },
};

export default pokedexAPI;
