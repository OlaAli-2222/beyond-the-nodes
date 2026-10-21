
document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("langToggle");
  const yearElement = document.getElementById("year");

  let currentLanguage = "en";

  function setLanguage(language) {
    document.querySelectorAll("[data-en][data-ar]").forEach((element) => {
      const translatedText = element.getAttribute(`data-${language}`);

      if (translatedText !== null) {
        element.innerHTML = translatedText;
      }
    });

    document.documentElement.lang = language;
    document.body.dir = language === "ar" ? "rtl" : "ltr";

    if (langToggle) {
      langToggle.textContent = language === "en" ? "عربي" : "English";

      langToggle.setAttribute(
        "aria-label",
        language === "en" ? "Switch to Arabic" : "Switch to English"
      );
    }

    currentLanguage = language;
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const nextLanguage = currentLanguage === "en" ? "ar" : "en";
      setLanguage(nextLanguage);
    });
  }

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  setLanguage("en");
});
