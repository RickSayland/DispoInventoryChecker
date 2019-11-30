var TrulieveAPI = {

  baseURI: "https://www.trulieve.com/mjf/?action=",
  chartLocations: [],
  chartstocks: [],
  chartStockColors: [],

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
      case 30:
        return "Bonita Springs"
        break;
      case 2:
        return "Boynton Beach"
        break;
      case 5:
        return "Bradenton"
        break;
      case 42:
        return "Cape Coral"
        break;
      case 3:
        return "Clearwater"
        break;
      case 36:
        return "Clearwater Beach"
        break;
      case 6:
        return "Dania Beach"
        break;
      case 7:
        return "Deerfield Beach"
        break;
      case 38:
        return "Destin"
        break;
      case 9:
        return "Edgewater"
        break;
      case 37:
        return "Fernandina Beach"
        break;
      case 32:
        return "Fort Lauderdale"
        break;
      case 10:
        return "Gainesville"
        break;
      case 11:
        return "Jacksonville"
        break;
      case 40:
        return "Jacksonville Beach"
        break;
      case 12:
        return "Kendall (Near Dadeland Mall)"
        break;
      case 39:
        return "Key West"
        break;
      case 13:
        return "Lady Lake (Near The Villages)"
        break;
      case 41:
        return "Largo"
        break;
      case 28:
        return "Melbourne"
        break;
      case 14:
        return "Miami"
        break;
      case 15:
        return "Miami Gardens"
        break;
      case 16:
        return "New Port Richey"
        break;
      case 17:
        return "North Fort Myers"
        break;
      case 18:
        return "Orlando"
        break;
      case 33:
        return "Orlando South"
        break;
      case 19:
        return "Palm Coast"
        break;
      case 44:
        return "Panama City Beach"
        break;
      case 20:
        return "Pensacola"
        break;
      case 35:
        return "Port Charlotte"
        break;
      case 21:
        return "Sarasota"
        break;
      case 22:
        return "St. Augustine"
        break;
       case 4:
        return "St. Petersburg"
        break;
      case 24:
        return "Tallahassee"
        break;
      case 8:
        return "Tampa"
        break;
      case 25:
        return "Venice"
        break;
      case 26:
        return "Vero Beach"
        break;
      case 45:
        return "Wesley Chapel"
        break;
      case 27:
        return "West Palm Beach"
        break;
      //COMMING SOON
      case 43:
        return "Brandon"
        break;
      case 29:
        return "Clearwater Call Center"
        break;
      case 34:
        return "Lakeland"
        break;
      case 46:
        return "Orange Park"
        break;
      case 47:
        return "Orlando Colonial"
        break;
      case 48:
        return "Orlando Millenia"
        break;
      default:
        return locationId
    } 
  },
  getProductName: (sku) => {
    switch(sku) {
      case "FINP-FLJ-S-9":
        return "TruFlower Pre-Roll 1 Gram - Sour Diesel"
      case "FINP-FLJ-S-3":
        return "TruFlower Pre-Roll 1 Gram - Dutch Hawaiian"
        break;
      case "FINP-FLJ-S-4":
        return "TruFlower Pre-Roll 1 Gram - Green Crack"
        break;
      case "FINP-FLJ-S-5":
        return "TruFlower Pre-Roll 1 Gram - Jack Herer"
        break;
      case "FINP-FLJ-S-14":
        return "TruFlower Pre-Roll 1 Gram - White Buffalo"
        break;
      case "FINP-FL-3.5G-S-5":
        return "TruFlower Sativa Jack Herer 3.5G"
        break;
      case "FINP-FL-3.5G-H-19":
        return "TruFlower Hybrid Gorilla Grapes 3.5G"
        break;
      case "FINP-ROS-1G-I-15":
          return "Blue River™ Rosin - Puck Yeah"
          break;
      case "FINP-ROS-1G-I-1":
          return "Blue River™ Rosin - 9LB Hammer"
          break;
      default:
        return "WEEEEEED"
    } 
  },
  clear: () => {
    TrulieveAPI.chartLocations = [];
    TrulieveAPI.chartstocks = [];
    TrulieveAPI.chartStockColors = [];
  }

}