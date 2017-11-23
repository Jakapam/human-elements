import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import "./App.css";

class App extends Component {
  render() {
    const elementWeight = {
      aluminum: "60 mg",
      antimony: "2 mg",
      arsenic: "7 mg",
      barium: "22 mg",
      beryllium: "36 µg",
      bismuth: "0.5 mg",
      boron: "18 mg",
      bromine: "0.26 g",
      cadmium: "50 mg",
      calcium: "1.0 kg",
      carbon: "16 kg",
      cerium: "40 mg",
      cesium: "6 mg",
      chlorine: "95 g",
      chromium: "14 mg",
      cobalt: "3 mg",
      copper: "72 mg",
      fluorine: "2.6 g",
      gallium: "0.7 mg",
      germanium: "5 mg",
      gold: "0.2 mg",
      hydrogen: "7 kg",
      indium: "0.4 mg",
      iodine: "20 mg",
      iron: "4.2 g",
      lanthanium: "0.8 mg",
      lead: "0.12 g",
      lithium: "7 mg",
      magnesium: "19 g",
      manganese: "12 mg",
      mercury: "6 mg",
      molybdenum: "5 mg",
      nickel: "15 mg",
      niobium: "1.5 mg",
      nitrogen: "1.8 kg",
      oxygen: "43 kg",
      phosphorus: "780 g",
      potassium: "140 g",
      rubidium: "0.68 g",
      samarium: "50 µg",
      scandium: "0.2 mg",
      selenium: "15 mg",
      silicon: "1.0 g",
      silver: "2 mg",
      sodium: "100 g",
      strontium: "0.32 g",
      sulfur: "140 g",
      tantalum: "0.2 mg",
      tellurium: "0.7 mg",
      thallium: "0.5 mg",
      thorium: "0.1 mg",
      tin: "20 mg",
      titanium: "20 mg",
      tungsten: "20 µg",
      uranium: "0.1 mg",
      vanadium: "0.11 mg",
      yttrium: "0.6 mg",
      zinc: "2.3 g",
      zirconium: "1 mg"
    };

    let weightInGrams = {};

    for (let element in elementWeight) {
      switch (elementWeight[element].match(/[kmµ]g|g/)[0]) {
        case "kg":
          weightInGrams[element] =
            parseFloat(elementWeight[element].match(/[0-9.]+/g)[0]) * 1000;
          break;
        case "mg":
          weightInGrams[element] =
            parseFloat(elementWeight[element].match(/[0-9.]+/g)[0]) / 1000;
          break;
        case "µg":
          weightInGrams[element] =
            parseFloat(elementWeight[element].match(/[0-9.]+/g)[0]) / 1000000;
          break;
        default:
          weightInGrams[element] = parseFloat(
            elementWeight[element].match(/[0-9.]+/g)[0]
          );
      }
    }

    let percentages = {};

    for (let element in weightInGrams) {
      percentages[element] = weightInGrams[element] / 700;
    }

    let backgroundColors = [];

    for (let i = 0; i < 60; i++) {
      backgroundColors.push(
        "#" + ((Math.random() * 0xffffff) << 0).toString(16)
      );
    }

    const data = {
      labels: Object.keys(percentages),
      datasets: [
        {
          data: Object.values(percentages),
          backgroundColor: backgroundColors,
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
    };

    return (
      <div className="App">
        <Doughnut
          data={data}
          options={{
            legend: {
              display: true,
              labels: {
                fontSize: 15
              }
            }
          }}
        />
        <p>Amount of Elements in Human body by %</p>
      </div>
    );
  }
}

export default App;
