// DOM elements
const fetchBtn = document.getElementById("fetchBtn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const loadingEl = document.getElementById("loading");
const errorEl = document.getElementById("error");

// Working public API
const API_URL = "https://dummyjson.com/quotes/random";

async function fetchQuote() {
  loadingEl.classList.remove("hidden");
  errorEl.textContent = "";
  quoteEl.textContent = "";
  authorEl.textContent = "";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("HTTP Error");
    }

    const data = await response.json();

    // Display fetched data
    quoteEl.textContent = `"${data.quote}"`;
    authorEl.textContent = `— ${data.author}`;

  } catch (error) {
    errorEl.textContent = "Something went wrong. Please check your internet.";
  } finally {
    loadingEl.classList.add("hidden");
  }
}

// Button click
fetchBtn.addEventListener("click", fetchQuote);
