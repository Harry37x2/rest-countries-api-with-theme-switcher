import { renderDashboard } from "./dashboard.js";
import { renderDetails } from "./details.js";

if (window.location.search.includes("?country=")) {
    renderDetails();
} else {
    document.querySelector('.filters').classList.add('active')
    renderDashboard();
}