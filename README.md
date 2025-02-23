# Galactic Weight Scale

A simple **npm package** that calculates a person's weight on different planets in our solar system.

## 🌍 Features

- Get your weight on **Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune**.
- Simple and lightweight utility for space-related projects.
- Handles invalid input gracefully.

## 📦 Installation

```bash
npm install galactic-weight-scale
```

## 🚀 Usage

### Import the package

```js
const {
  weightOnMercury,
  weightOnVenus,
  weightOnEarth,
  weightOnMars,
  weightOnJupiter,
  weightOnSaturn,
  weightOnUranus,
  weightOnNeptune,
} = require("galactic-weight-scale");
```

### Call the functions

```js
console.log(weightOnMars(75)); // Output: Weight on Mars
console.log(weightOnJupiter(75)); // Output: Weight on Jupiter
console.log(weightOnVenus("invalid")); // Output: null (invalid input handled)
```

## 📖 Available Functions

Each function takes a **weight in kg (number)** as input and returns the weight on the respective planet (rounded to 2 decimal places).

| Function            | Planet  |
| ------------------- | ------- |
| `weightOnMercury()` | Mercury |
| `weightOnVenus()`   | Venus   |
| `weightOnEarth()`   | Earth   |
| `weightOnMars()`    | Mars    |
| `weightOnJupiter()` | Jupiter |
| `weightOnSaturn()`  | Saturn  |
| `weightOnUranus()`  | Uranus  |
| `weightOnNeptune()` | Neptune |

### Example Output

```js
console.log(weightOnMars(70)); // 26.47
console.log(weightOnJupiter(70)); // 176.86
console.log(weightOnEarth(70)); // 70.00
```

## 🛠 Contributing

Feel free to **fork**, open issues, or submit PRs!

## 📜 License

This project is licensed under the **ISC License**.

---

🚀 **Created by [Yaseen Sidhik](https://github.com/nosawkid)**
