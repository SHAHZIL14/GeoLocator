# Location Checker 📍

A small browser utility that grabs the user's current GPS coordinates and reverse-geocodes them into a human-readable address using the Browser Geolocation API and a reverse-geocoding service.

## How It Works

1. User clicks "Get Location"
2. The browser's [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) requests the device's current latitude/longitude
3. Coordinates are sent to a reverse-geocoding API
4. The resolved address(es) are displayed on the page

## Tech Stack

- Vanilla JavaScript
- Browser Geolocation API
- Reverse geocoding via a third-party API

## Getting Started

This is a single-file static page — no build step required.

```bash
git clone https://github.com/SHAHZIL14/LocationChecker.git
cd LocationChecker
```

Open `index.html` directly in a browser, or serve it locally:

```bash
npx serve .
```

Click **Get Location** and allow location access when prompted.


## Status

Small utility/demo project — built to practice the Geolocation API and working with a third-party REST API from the frontend.

## Author

**Mohd Shazil Raza**
[GitHub](https://github.com/SHAHZIL14) · [LinkedIn](https://linkedin.com/in/shazilr)
