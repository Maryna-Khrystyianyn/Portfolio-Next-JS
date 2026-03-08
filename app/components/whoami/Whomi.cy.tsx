import {ThemeProvider} from "next-themes";
import Whomi from "./Whomi";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18nForTests";

describe("<Whomi />", () => {
  
  it("renders correct image for light theme", () => {
    
    cy.mount(
    <ThemeProvider defaultTheme="light" ><Whomi /></ThemeProvider>
    );
    cy.get('img[alt="m"]').should("have.attr", "src").and("include", "m-light");
  });

  it("renders correct image for dark theme", () => {
    
    cy.mount(
        <ThemeProvider defaultTheme="dark"><Whomi /></ThemeProvider>
        );
    cy.get('img[alt="m"]').should("have.attr", "src").and("include", "m.png");
  });

  it("renders English text", () => {
    i18n.changeLanguage("en");
    cy.mount(
      <I18nextProvider i18n={i18n}>
        <Whomi />
      </I18nextProvider>
    );

    cy.contains("whoami").should("be.visible");
    cy.contains("arina Khrystyyanyn").should("exist");
    cy.contains("Web Developer").should("exist");
  });

  it("renders German text", () => {
    i18n.changeLanguage("de");
    cy.mount(
      <I18nextProvider i18n={i18n}>
        <Whomi />
      </I18nextProvider>
    );

    cy.contains("wer bin ich").should("be.visible");
    cy.contains("arina Khrystyyanyn").should("exist");
    cy.contains("Webentwicklerin").should("exist");
  });
  it("renders German text", () => {
    i18n.changeLanguage("ua");
    cy.mount(
      <I18nextProvider i18n={i18n}>
        <Whomi />
      </I18nextProvider>
    );

    cy.contains("хто я").should("be.visible");
    cy.contains("арина Християнин").should("exist");
    cy.contains("Веб-розробниця").should("exist");
  });
});