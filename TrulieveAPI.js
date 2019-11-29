var TrulieveAPI = {

  baseURI: "https://www.trulieve.com/mjf/?action=",
  chartLocations: [],
  chartstocks: [],

  getItemInventory: (mjf_location_id, mjf_sku) => {
    return $.get( TrulieveAPI.baseURI+ "inventory&mjf_location_id=" + mjf_location_id + "&mjf_sku=" + mjf_sku, function( data ) {
    });
  },
  getItemMultiInventory: (mjf_sku) => {
    return $.get( TrulieveAPI.baseURI+ "multi_inventory&mjf_sku=" + mjf_sku, function( data ) {
    });
  },
  getLocationName: (locationId) => {
    switch(locationId) {
      case 8:
        return "Tampa"
        break;
      case 9:
        return "9"
        break;
      default:
        return locationId
    } 
  }

}

