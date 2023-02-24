import {
  Autocomplete,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./HomeStyles.css";
import { Link } from "react-router-dom";
import { textAlign } from "@mui/system";
import axios from "axios";

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
  const Location = [
    { id: 1, title: "Colombo" },
    { id: 2, title: "Gampaha" },
    { id: 3, title: "Kalutara" },
    { id: 4, title: "Kandy" },
    { id: 5, title: "Matale" },
    { id: 6, title: "Nuwara Eliya" },
    { id: 7, title: "Galle" },
    { id: 8, title: "Matara" },
    { id: 9, title: "Hambantota" },
    { id: 10, title: "Jaffna" },
    { id: 11, title: "Kilinochchi" },
    { id: 12, title: "Mannar" },
    { id: 13, title: "Mullaitivu" },
    { id: 14, title: "Vavuniya" },
    { id: 15, title: "Batticaloa" },
    { id: 16, title: "Ampara" },
    { id: 17, title: "Trincomalee" },
    { id: 18, title: "Kurunegala" },
    { id: 19, title: "Puttalam" },
    { id: 20, title: "Anuradhapura" },
    { id: 21, title: "Polonnaruwa" },
    { id: 22, title: "Badulla" },
    { id: 23, title: "Monaragala" },
    { id: 24, title: "Ratnapura" },
    { id: 25, title: "Kegalle" },
  ];

  const [drugsData, setDrugs] = useState([]);
  useEffect(() => {
    const getDrugs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/drug/all");
        setDrugs(response.data);
        console.log(response.data + ' Here is Data');
      } catch (error) {
        console.error(error);
      }
    };
    getDrugs();
  }, []);

  const [selectedDrug, setSelectedDrug] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');


  const handleDrugChange = (event, value) => {
    setSelectedDrug(value);
  };
  const handleDistrictChange = (event, value) => {
    setSelectedDistrict(value);
  };
  const [result, setResult] = useState([]);

  // Search Button
  async function handleButtonClick() {
    if (!selectedDistrict || !selectedDrug) {
      alert("Please select both location and drug");
      return;
    }
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/pharmacy/search/${selectedDistrict}/${selectedDrug}`);
      setResult(response.data);

    } catch (error) {
      console.error(error);
    }
    console.log("When Button Clicked: ", result)
  }


  console.log("Drug data", selectedDrug);
  console.log("Location data: ", selectedDistrict);

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
              sx={{ width: '100%' }}
              disablePortal
              id="combo-box-demo"
              options={[...new Set(drugsData.map((option) => option.name))]}
              onChange={handleDrugChange}
              renderInput={(params) => (
                <TextField {...params} label="Pharmacy" />
              )}
            />

          </Grid>
          <Grid item md={5}>
            <Autocomplete
              sx={{ width: "100%" }}
              disablePortal
              id="combo-box-demo"
              options={Location.map((option) => option.title)}
              onChange={handleDistrictChange}
              renderInput={(params) => (
                <TextField {...params} label="Location" />
              )}
            />
          </Grid>
          <Grid item md={2}>
            <Button sx={{ height: "53px", width: "100%" }} variant="contained" onClick={handleButtonClick}>
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
      <Grid container spacing={1} mb={3} p={10}>
        {
          result?.map((res) => {
            return (
              <>

                <Grid item md={6} mb={2}>
                  <div className="search-card" style={{ width: "100%" }}>
                    <div className="Typography">
                      <h2>{res.name}</h2>
                      <h4 className="active">{res.district}</h4>
                      <h4>{res.contact}</h4>
                      <h4>{res.address}</h4>

                    </div>
                    <div className="Mapbox-container">
                    </div>
                  </div>
                </Grid>




              </>
            )
          })
        }

      </Grid>

    </div>
  );
}
export default Home;
