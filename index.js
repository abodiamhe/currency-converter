import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
// import "node_modules/flag-icons/css/flag-icons.min.css";

const API_URL = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/EUR/GBP/1`;

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", async (req, res) => {
  const amount = req.body["amount"];
  const baseCountry = req.body["countries"][0];
  const targetCountry = req.body["countries"][1];

  try {
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${baseCountry}/${targetCountry}/${amount}`
    );
    const result = response.data.conversion_result;
    res.render("index.ejs", { result: result });
  } catch (error) {
    console.log(error);
    res.render("index.ejs", { error: "Something went wrong" });
  }
});

app.listen(port, (req, res) => {
  console.log(`Server listening on port ${port}.`);
});

let Country_List = [
  "AED",
  "AFN",
  "XCD",
  "ALL",
  "AMD",
  "ANG",
  "AOA",
  "AQD",
  "ARS",
  "AUD",
  "AZN",
  "BAM",
  "BBD",
  "BDT",
  "XOF",
  "BGN",
  "BHD",
  "BIF",
  "BMD",
  "BND",
  "BOB",
  "BRL",
  "BSD",
  "NOK",
  "BWP",
  "BYR",
  "BZD",
  "CAD",
  "CDF",
  "XAF",
  "CHF",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "CUP",
  "CVE",
  "CYP",
  "CZK",
  "DJF",
  "DKK",
  "DOP",
  "DZD",
  "ECS",
  "EEK",
  "EGP",
  "ETB",
  "EUR",
  "FJD",
  "FKP",
  "GBP",
  "GEL",
  "GGP",
  "GHS",
  "GIP",
  "GMD",
  "GNF",
  "GTQ",
  "GYD",
  "HKD",
  "HNL",
  "HRK",
  "HTG",
  "HUF",
  "IDR",
  "ILS",
  "INR",
  "IQD",
  "IRR",
  "ISK",
  "JMD",
  "JOD",
  "JPY",
  "KES",
  "KGS",
  "KHR",
  "KMF",
  "KPW",
  "KRW",
  "KWD",
  "KYD",
  "KZT",
  "LAK",
  "LBP",
  "LKR",
  "LRD",
  "LSL",
  "LTL",
  "LVL",
  "LYD",
  "MAD",
  "MDL",
  "MGA",
  "MKD",
  "MMK",
  "MNT",
  "MOP",
  "MRO",
  "MTL",
  "MUR",
  "MVR",
  "MWK",
  "MXN",
  "MYR",
  "MZN",
  "NAD",
  "XPF",
  "NGN",
  "NIO",
  "NPR",
  "NZD",
  "OMR",
  "PAB",
  "PEN",
  "PGK",
  "PHP",
  "PKR",
  "PLN",
  "PYG",
  "QAR",
  "RON",
  "RSD",
  "RUB",
  "RWF",
  "SAR",
  "SBD",
  "SCR",
  "SDG",
  "SEK",
  "SGD",
  "SKK",
  "SLL",
  "SOS",
  "SRD",
  "STD",
  "SVC",
  "SYP",
  "SZL",
  "THB",
  "TJS",
  "TMT",
  "TND",
  "TOP",
  "TRY",
  "TTD",
  "TWD",
  "TZS",
  "UAH",
  "UGX",
  "USD",
  "UYU",
  "UZS",
  "VEF",
  "VND",
  "VUV",
  "YER",
  "ZAR",
  "ZMK",
  "ZWD",
];
