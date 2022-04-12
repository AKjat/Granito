import {
  Box,
  Divider,
  Typography,
  Chip,
  Grid,
  Button,
  FormGroup,
} from "@mui/material";
import React from "react";
import ProductCategory from "../../../components/categlist/ProductCategory";
import FolderIcon from "@mui/icons-material/Folder";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import RangeSlider from "../../../components/Ui/PriceSlider";
import PublicIcon from "@mui/icons-material/Public";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import CheckButton from "../../../components/Ui/SelfButton/CheckButton";
// import productDetails from '../../../data/Details';

const Filter = () => {
  const getValue = (val) => {
    console.log(val);
  };

  // const handleCategColor = () => {
  //   const updatedItems = productDetails.filter((curElem) => {
  //     return curElem.color === categ;
  //   });
  //   setItems(updatedItems);
  // };
  return (
    <>
      <Box marginTop={1}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h6" component="h5" align="left">
              Product Categories
            </Typography>
          </Grid>
          <Grid item>
            <FolderIcon fontSize="small" />
          </Grid>
        </Grid>
        <Divider></Divider>
        <ProductCategory />

        <Grid
          container
          marginTop={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <Typography variant="h6" component="h5" align="left">
              Filter by price
            </Typography>
          </Grid>
          <Grid item>
            <FilterAltIcon fontSize="small" />
          </Grid>
        </Grid>
        <Divider></Divider>
        <RangeSlider getValue={getValue} />
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Button variant="contained" size="small">
              Filter
            </Button>
          </Grid>
          <Grid item marginRight={3}>
            <Typography>Price:</Typography>
          </Grid>
        </Grid>
        <Grid
          marginTop={2}
          container
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <Typography variant="h6" component="h5" align="left">
              Countries
            </Typography>
          </Grid>
          <Grid item>
            <PublicIcon fontSize="small" />
          </Grid>
        </Grid>
        <Divider></Divider>

        <FormGroup>
          <Grid container direction="column">
            <Grid item xs={12}>
              <CheckButton
                img={<img src="/img/countries/egypt.png" alt="" />}
                title={"Egypt"}
              />
              <CheckButton
                img={<img src="/img/countries/iran.png" alt="" />}
                title={"Iran"}
              />
              <CheckButton
                img={<img src="/img/countries/iraq.png" alt="" />}
                title={"Iraq"}
              />
              <CheckButton
                img={<img src="/img/countries/germany.png" alt="" />}
                title={"Germany"}
              />

              {/* <FormControlLabel
              control={<Checkbox defaultChecked={false} />}
              label="Egypt"
            /> */}
            </Grid>
            <Grid item xs={12}>
              <CheckButton
                img={<img src="/img/countries/1.png" alt="" />}
                title={"Turkey"}
              />
              <CheckButton
                img={<img src="/img/countries/us.png" alt="" />}
                title={"United States"}
              />
              <CheckButton
                img={<img src="/img/countries/china.png" alt="" />}
                title={"China"}
              />
              <CheckButton
                img={<img src="/img/countries/italy.png" alt="" />}
                title={"Italy"}
              />
            </Grid>
          </Grid>
        </FormGroup>

        <Grid
          marginTop={2}
          container
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <Typography variant="h6" component="h5" align="left">
              Colour
            </Typography>
          </Grid>
          <Grid item>
            <FormatPaintIcon fontSize="small" />
          </Grid>
        </Grid>
        <Divider></Divider>
        <FormGroup>
          <Grid container>
            <Grid item xs={5}>
              <CheckButton title={"White"} />
              <CheckButton title={"Black"} />
              <CheckButton title={"Brown"} />
              <CheckButton title={"Pink"} />
            </Grid>
            <Grid item xs={5}>
              <CheckButton title={"Yellow"} />
              <CheckButton title={"Green"} />
              <CheckButton title={"Grey"} />
              <CheckButton title={"Exotic"} />
            </Grid>
          </Grid>
        </FormGroup>
      </Box>
    </>
  );
};

export default Filter;
