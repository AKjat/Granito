import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ProductCategory from "../../categlist/ProductCategory";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import RangeSlider from "../../../components/Ui/PriceSlider";
import PublicIcon from "@mui/icons-material/Public";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CheckButton from "../SelfButton/CheckButton";

export default function MobileFilter() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const getValue = (val) => {
    console.log(val);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 320 }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
      marginX={2}
    >
      <Grid
        marginTop={1}
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
          <Grid container direction="row">
            <Grid item xs={6}>
              <CheckButton img={<img src="/img/countries/egypt.png" alt="" />} title={"Egypt"} />
              <CheckButton img={<img src="/img/countries/iran.png" alt="" />} title={"Iran"} />
              <CheckButton img={<img src="/img/countries/iraq.png" alt="" />} title={"Iraq"} />
              <CheckButton img={<img src="/img/countries/germany.png" alt="" />} title={"Germany"} />

              {/* <FormControlLabel
              control={<Checkbox defaultChecked={false} />}
              label="Egypt"
            /> */}
            </Grid>
            <Grid item xs={6}>
              <CheckButton img={<img src="/img/countries/1.png" alt="" />} title={"Turkey"} />
              <CheckButton img={<img src="/img/countries/us.png" alt="" />} title={"United States"} />
              <CheckButton img={<img src="/img/countries/china.png" alt="" />} title={"China"} />
              <CheckButton img={<img src="/img/countries/italy.png" alt="" />} title={"Italy"} />
            </Grid>
          </Grid>
        </FormGroup>





      <Grid container marginTop={2} alignItems="center" justifyContent="space-between">
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
      <Box>
        <RangeSlider getValue={getValue} />
      </Box>
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
            <Grid item xs={6}>
              <CheckButton title={"White"} />
              <CheckButton title={"Black"} />
              <CheckButton title={"Brown"} />
              <CheckButton title={"Pink"} />
            </Grid>
            <Grid item xs={6}>
              <CheckButton title={"Yellow"} />
              <CheckButton title={"Green"} />
              <CheckButton title={"Grey"} />
              <CheckButton title={"Exotic"} />
            </Grid>
          </Grid>
      </FormGroup>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} variant="contained" size="small" endIcon={<FilterAltOutlinedIcon/>}>
            Filter
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
