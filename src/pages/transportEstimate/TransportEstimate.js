import { Autocomplete, Container, Grid, TextField, Typography, Box, InputAdornment, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {Country, State, City} from 'country-state-city'
import { MaskField } from 'react-mask-field'
import InputMask from 'react-input-mask'
import allSStates from './StatesValues'

const TransportEstimate = () => {
  const [allStates, setAllStates] = useState([])
  const [stateVal, setStateVal] = useState(null)
  const [cityVal, setCityVal] = useState(null)
  const [stateCode, setStateCode] = useState()
  const [showCost, setShowCost] = useState(false)
  const [qty, setQty] = useState(0)
  console.log("states", allSStates)
  const states = State.getStatesOfCountry('IN')

  const EstimateCost = qty*stateVal?.value
  console.log("fsfscvvvverrrrrrrrrrss", EstimateCost)
  
  // useEffect(() => { 
  //   const AP = {...states?.find(d=> d.isoCode === 'AP'), 'value': 20, 'countryCode': 'IN' }
  //   const AR = {...states?.find(d=> d.isoCode === 'AR'), 'value': 25, 'countryCode': 'IN' }
  //   const AS = {...states?.find(d=> d.isoCode === 'AS'), 'value': 25, 'countryCode': 'IN' }
  //   const BR = {...states?.find(d=> d.isoCode === 'BR'), 'value': 18, 'countryCode': 'IN' }
  //   const CH = {...states?.find(d=> d.isoCode === 'CH'), 'value': 18, 'countryCode': 'IN' }
  //   // CH---->Chandigarh value to be set**
  //   const CT = {...states?.find(d=> d.isoCode === 'CT'), 'value': 20, 'countryCode': 'IN' }
  //   const DL = {...states?.find(d=> d.isoCode === 'DL'), 'value': 10, 'countryCode': 'IN' }
  //   const GA = {...states?.find(d=> d.isoCode === 'GA'), 'value': 18, 'countryCode': 'IN' }
  //   const GJ = {...states?.find(d=> d.isoCode === 'GJ'), 'value': 12, 'countryCode': 'IN' }
  //   const HR = {...states?.find(d=> d.isoCode === 'HR'), 'value': 10, 'countryCode': 'IN' }
  //   const HP = {...states?.find(d=> d.isoCode === 'HP'), 'value': 15, 'countryCode': 'IN' }
  //   const JK = {...states?.find(d=> d.isoCode === 'JK'), 'value': 18, 'countryCode': 'IN' }
  //   const JH = {...states?.find(d=> d.isoCode === 'JH'), 'value': 18, 'countryCode': 'IN' }
  //   const KA = {...states?.find(d=> d.isoCode === 'KA'), 'value': 20, 'countryCode': 'IN' }
  //   const KL = {...states?.find(d=> d.isoCode === 'KL'), 'value': 20, 'countryCode': 'IN' }
  //   const LA = {...states?.find(d=> d.isoCode === 'LA'), 'value': 20, 'countryCode': 'IN' }
  //   // LA ----> Ladakh Value***
  //   const MP = {...states?.find(d=> d.isoCode === 'MP'), 'value': 20, 'countryCode': 'IN' }
  //   const MH = {...states?.find(d=> d.isoCode === 'MH'), 'value': 15, 'countryCode': 'IN' }
  //   const MN = {...states?.find(d=> d.isoCode === 'MN'), 'value': 40, 'countryCode': 'IN' }
  //   const ML = {...states?.find(d=> d.isoCode === 'ML'), 'value': 40, 'countryCode': 'IN' }
  //   const MZ = {...states?.find(d=> d.isoCode === 'MZ'), 'value': 40, 'countryCode': 'IN' }
  //   const NL = {...states?.find(d=> d.isoCode === 'NL'), 'value': 40, 'countryCode': 'IN' }
  //   const OR = {...states?.find(d=> d.isoCode === 'OR'), 'value': 20, 'countryCode': 'IN' }
  //   const PY = {...states?.find(d=> d.isoCode === 'PY'), 'value': 20, 'countryCode': 'IN' }
  //   //  PY ====> Pudducherry Value**
  //   const PB = {...states?.find(d=> d.isoCode === 'PB'), 'value': 12, 'countryCode': 'IN' }
  //   const RJ = {...states?.find(d=> d.isoCode === 'RJ'), 'value': 5, 'countryCode': 'IN' }
  //   const SK = {...states?.find(d=> d.isoCode === 'SK'), 'value': 30, 'countryCode': 'IN' }
  //   const TN = {...states?.find(d=> d.isoCode === 'TN'), 'value': 22, 'countryCode': 'IN' }
  //   const TG = {...states?.find(d=> d.isoCode === 'TG'), 'value': 22, 'countryCode': 'IN' }
  //   const TR = {...states?.find(d=> d.isoCode === 'TR'), 'value': 30, 'countryCode': 'IN' }
  //   const UP = {...states?.find(d=> d.isoCode === 'UP'), 'value': 15, 'countryCode': 'IN' }
  //   const UT = {...states?.find(d=> d.isoCode === 'UT'), 'value': 15, 'countryCode': 'IN' }
  //   const WB = {...states?.find(d=> d.isoCode === 'WB'), 'value': 15, 'countryCode': 'IN' }
  //   allStates.push(AP, AR, AS, BR, CH, CT, DL, GA, GJ, HR, HP, JK, JH, KA, KL, LA, MP, MH, MN, ML, MZ, NL, OR, PY, PB, RJ, SK, TN, TG, TR, UP, UT, WB)
    
  // }, []);

  const handleStateChange =(event, value)=>{
    console.log(value,"valllT")
    setStateCode(value?.isoCode)
    setStateVal(value)
} 
  const handleCityChange =(event, value)=>{
    setCityVal(value)
} 

const handleQuantity = (event, value) => {
    console.log({event: event.target.value, value:value})
    setQty(event.target.value)
}

const handleCostEstimate=()=>{
    setShowCost(true)
}

console.log(State.getStatesOfCountry('IN'))
  return (
    <Container >
      <Grid container marginTop={1}>
        <Grid item >
            <Typography variant='h5'>
                Get Your Transportation Cost Estimate
            </Typography>
            <Grid container direction='column' spacing={1} marginTop={1}>
              <Grid item>
              <Autocomplete
                             options={allSStates}
                             onChange={handleStateChange}
                             value={stateVal}
                             fullWidth
                             autoHighlight
                             getOptionLabel={(option) => option.name}
                             renderOption={(props, option) => (
                             <Box component="li"  {...props}>
                               {option.name}
                             </Box>
                             )}
                          renderInput={(params) => (
                               <TextField
                                   {...params}
                                   label="State"
                                   inputProps={{
                                     ...params.inputProps,
                                     autoComplete: 'new-password', 
                                   }}
                                     />
                                    )}
                                 />
              </Grid>
              <Grid item>
                  <Autocomplete
                             options={City.getCitiesOfState('IN',stateCode)}
                             onChange={handleCityChange}
                             value={cityVal}
                             fullWidth
                             autoHighlight
                             getOptionLabel={(option) => option.name}
                             renderOption={(props, option) => (
                             <Box component="li"  {...props}>
                               {option.name}
                             </Box>
                             )}
                          renderInput={(params) => (
                               <TextField
                                   {...params}
                                   label="City"
                                   inputProps={{
                                     ...params.inputProps,
                                     autoComplete: 'new-password', 
                                   }}
                                     />
                                    )}
                                 />

              </Grid>

              <Grid item>
              <InputMask
                  mask="999999"
                  disabled={false}
                  maskChar="_"
                  onChange={(e,v)=>console.log({Event:e, Value:v})}
                  type='number'
                  >   
                  {() => <TextField label="Postal Code" fullWidth />}
              </InputMask>
                    {/* <TextField fullWidth label='Postal Code' type='number' /> */}
              </Grid>
              <Grid item >
                <Grid container>
                    <Grid item xs={4}>
                    <Autocomplete
                             options={Country.getAllCountries()}
                             fullWidth
                             autoHighlight
                             getOptionLabel={(option) => "+"+option.phonecode}
                             renderOption={(props, option) => (
                             <Box component="li" sx={{ mr: 2, flexShrink: 0  }} {...props}>
                               {option.flag} {option.name} 
                             </Box>
                             )}
                          renderInput={(params) => (
                               <TextField
                                   {...params}
                                   label="Code"
                                   inputProps={{
                                     ...params.inputProps,
                                     autoComplete: 'new-password', 
                                   }}
                                     />
                                    )}
                                 />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField fullWidth label='Mobile Number' type='number'/>
                    </Grid>
                </Grid>
                  
                    
              </Grid>
              <Grid item>
                    <TextField fullWidth label='Enter Your Quantity' type='number' 
                      onChange={handleQuantity}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">square feet</InputAdornment>
                        ),
                      }}
                    />
              </Grid>
              <Grid item>
                      <Button onClick={handleCostEstimate} variant='outlined'>Submit</Button>
              </Grid>
              <Grid item>
              {showCost?<Typography variant="body1" textAlign="center">Your Estimate Cost: {EstimateCost} INR till your doorstep</Typography>:""}
              </Grid>
            </Grid>
            
        </Grid>

      </Grid>
         
          
    </Container>

  )
}

export default TransportEstimate

function CustomMaskField({ inputRef, ...otherProps }) {
  return <MaskField ref={inputRef} mask="___-___" replacement="_" {...otherProps} />;
}

