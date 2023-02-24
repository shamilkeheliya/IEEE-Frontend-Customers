import {
  Autocomplete,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./HomeStyles.css";
import { Link } from "react-router-dom";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hldGhha2FzbCIsImEiOiJjbDBndmlpcHYwMmtyM2lueW5tcWRoenBwIn0.kdl7_icmw0zii85l8IxrQg';

class MapCard extends React.Component {
  constructor(props) {
    super(props);
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.props;
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }
}
function Home() {
  const pharmacyList = [
    {
      id: 1,
      name: "Red Fot Pharmacy",
      Location: "Colombo",
    },
    {
      id: 2,
      name: "Blue Fot Pharmacy",
      Location: "Gampaha",
    },
  ];

  const Medicine = [
    { title: "The Shawshank Redemption", id: 1 },
    { title: "The Godfather", id: 1972 },
    { title: "The Godfather: Part II", id: 1974 },
    { title: "The Dark Knight", id: 2008 },
  ];

  const Location = [
    { title: "Colombo", id: 1 },
    { title: "Gampaha", id: 1972 },
    { title: "Kaluthara", id: 1974 },
    { title: "Kandy", id: 2008 },
  ];

  return (
    
    <div>
      <div className="background-image">
        <h1>Search Results</h1>
      </div>
      <Grid Container md={12} mt={5}>
        {/* <Link to="/about"> GO TO THE ABOUT PAGE </Link>
        <Grid>sdsdsd</Grid> */}
        <Grid container spacing={2} px={10}>
          <Grid item md={5}>
            <Autocomplete
              sx={{ width: "100%" }}
              disablePortal
              id="combo-box-demo"
              options={Medicine.map((option) => option.title)}
              renderInput={(params) => (
                <TextField {...params} label="pharmacy" />
              )}
            />
          </Grid>
          <Grid item md={5}>
            <Autocomplete
              sx={{ width: "100%" }}
              disablePortal
              id="combo-box-demo"
              options={Location.map((option) => option.title)}
              renderInput={(params) => (
                <TextField {...params} label="Location" />
              )}
            />
          </Grid>
          <Grid item md={2}>
            <Button sx={{ height: "53px", width: "100%" }} variant="contained">
              Search
            </Button>
          </Grid>
        </Grid>
        <Grid container mt={5} px={10}>
          <Typography fontFamily={"roboto"} fontWeight="bold">
            {" "}
            Search result
          </Typography>
        </Grid>
      </Grid>
      <div className="search-card">
        <div className="Typography">
          <h2>Pharmacy Name</h2>
          <h4 className="active">District</h4>
          <h4>Medicine Name</h4>
          <h4>Phone Number</h4>
          <h4>Address</h4>
        </div>
        <div className="Mapbox-container">
        </div>
      </div>
    </div>
  );
}
export default Home;
