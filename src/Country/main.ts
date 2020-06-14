enum CountryName {
  Afghanistan = "Afghanistan",
}

export function handleCountry(country: { name: string }) {
  switch (country.name) {
    case 'Afghanistan':
      return {
        number: 1,
        details: {
          population: "37,209,007",
          area: "652,860",
          density: 57
        }
      };
    case 'Albania':
      return {
        number: 2,
        details: {
          population: "2,938,428",
          area: "27,400",
          density: 107
        }
      };
    case 'Algeria':
      return {
        number: 3,
        details: {
          population: "42,679,018",
          area: "2,381,740",
          density: 18
        }
      };
    case 'Andorra':
      return {
        number: 4,
        details: { population: "77,072", area: "470", density: 164 }
      };
    case 'Angola':
      return {
        number: 5,
        details: {
          population: "31,787,566",
          area: "1,246,700",
          density: 25
        }
      };
    case 'Antigua':
      return {
        number: 6,
        details: { population: "104,084", area: "440", density: 237 }
      };
    case 'Argentina':
      return {
        number: 7,
        details: {
          population: "45,101,781",
          area: "2,736,690",
          density: 16
        }
      };
    case 'Armenia':
      return {
        number: 8,
        details: {
          population: "2,936,706",
          area: "28,470",
          density: 103
        }
      };
    case 'Australia':
      return {
        number: 9,
        details: {
          population: "25,088,636",
          area: "7,682,300",
          density: 3
        }
      };
    case 'Austria':
      return {
        number: 10,
        details: {
          population: "8,766,201",
          area: "82,409",
          density: 106
        }
      };
    case 'Azerbaijan':
      return {
        number: 11,
        details: {
          population: "10,014,575",
          area: "82,658",
          density: 121
        }
      };
    case 'Bahamas':
      return {
        number: 12,
        details: { population: "403,095", area: "10,010", density: 40 }
      };
    case 'Bahrain':
      return {
        number: 13,
        details: {
          population: "1,637,896",
          area: "760",
          density: 2.155
        }
      };
    case 'Bangladesh':
      return {
        number: 14,
        details: {
          population: "168,065,920",
          area: "130,170",
          density: 1.291
        }
      };
    case 'Barbados':
      return {
        number: 15,
        details: { population: "287,010", area: "430", density: 667 }
      };
    case 'Belarus':
      return {
        number: 16,
        details: {
          population: "9,433,874",
          area: "202,910",
          density: 46
        }
      };
    case 'Belgium':
      return {
        number: 17,
        details: {
          population: "11,562,784",
          area: "30,280",
          density: 382
        }
      };
    case 'Belize':
      return {
        number: 18,
        details: { population: "390,231", area: "22,810", density: 17 }
      };
    case 'Benin':
      return {
        number: 19,
        details: {
          population: "11,801,595",
          area: "112,760",
          density: 105
        }
      };
    case 'Bhutan':
      return {
        number: 20,
        details: { population: "826,229", area: "38,117", density: 22 }
      };
    case 'Bolivia':
      return {
        number: 21,
        details: {
          population: "11,379,861",
          area: "1,083,300",
          density: 11
        }
      };
    case 'Bosnia':
      return {
        number: 22,
        details: {
          population: "3,501,774",
          area: "51,000",
          density: 69
        }
      };
    case 'Botswana':
      return {
        number: 23,
        details: {
          population: "2,374,636",
          area: "566,730",
          density: 4
        }
      };
    case 'Brazil':
      return {
        number: 24,
        details: {
          population: "212,392,717",
          area: "8,358,140",
          density: 25
        }
      };
    case 'Brunei':
      return {
        number: 25,
        details: { population: "439,336", area: "5,270", density: 83 }
      };
    case 'Bulgaria':
      return {
        number: 26,
        details: {
          population: "6,988,739",
          area: "108,560",
          density: 64
        }
      };
    case 'Burkina':
      return {
        number: 27,
        details: {
          population: "20,321,560",
          area: "273,600",
          density: 74
        }
      };
    case 'Burundi':
      return {
        number: 28,
        details: {
          population: "11,575,964",
          area: "25,680",
          density: 451
        }
      };
    case 'Côte':
      return {
        number: 29,
        details: {
          population: "25,531,083",
          area: "318,000",
          density: 80
        }
      };
    default:
      return {};
      break;
  }
}
