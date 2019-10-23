import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer gn0_sDFwenbqubVqaiZIYcO2oX4r0PpIyOSjLe_s4ErDhGUoXEOFGEJijlwLvAngnB7fUMHx-Mu5Y8vB3YdgtSM6EQn4jwsIyLNfROd526SyMPVxlA3jmqi_rVuiXXYx"
  }
});
