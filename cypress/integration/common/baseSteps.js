/* eslint-disable prefer-arrow-callback */
// @ts-nocheck
/* eslint-disable func-names */
/// <reference types="cypress" />
// This is a good place to put global before/beforeEach/after/afterEach hooks.
// These are the base common steps that can be used over all tests

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

// Pages
import BasePageDBB from '../../support/pages/basePageBDD'

// Page objects
const basePage = new BasePageDBB()

// Givens
Given('I am on the home screen', function() {
  cy.visit('/')
  basePage.checkUrl(Cypress.config().baseUrl)
})

Given('I am on the {string} screen', function(link) {
  cy.visit(link)
})

// Whens
When('I click on the {string} button', function(nameButton) {
  basePage.clickElementByText(nameButton)
})

When('I click on the {string} radio button option', function(option) {
  basePage.clickRadioButtonByText(option)
})

When('I enter {string} in the {string} field', function(text, dataIdLabel) {
  basePage.typeTextByDataIdLabel(text, dataIdLabel)
})

When('I choose {string} in the select field', function(value) {
  basePage.selectOptionByValue(value)
})

When('I click on the {string} link', function(text) {
  basePage.clickHyperlinkByText(text)
})

When('I select {string} option from the suggestions for the field {string}', function(text, dataIdLabel) {
  basePage.clickOptionByValueOnADataList(text, dataIdLabel)
})

When('I hover over the text {string}', function(text) {
  basePage.hoverOverAText(text)
})

When('I clear the {string} field', function(fieldDataIdLabel) {
  basePage.clearComponentByDataIdLabel(fieldDataIdLabel)
})

When('I hit enter', function() {
  basePage.hitEnterOnForm()
})

// Thens
Then('the {string} button is {string}', function(text, state) {
  basePage.checkButtonState(text, state)
})

Then('the message {string} is displayed', function(text) {
  basePage.checkMessageIsDisplayed(text)
})

Then('the message {string} is not displayed', function(text) {
  basePage.checkMessageIsNotDisplayed(text)
})

Then('the error message {string} is displayed', function(text) {
  basePage.checkPExistsByText(text)
})

Then('the error message {string} is not displayed', function(text) {
  basePage.checkPDoesNotExistsByText(text)
})

Then('I am taken to the {string} screen', function(page) {
  basePage.checkUrl(page)
})

Then('I can see the {string} field', function(dataIdLabel) {
  basePage.checkElementExistsByDataIdLabel(dataIdLabel)
})

Then('I expect the page to look correct', function() {
  basePage.checkPageSnapshot()
})

Then('I expect the form page to look correct', function() {
  cy.waitFor("a:contains('Munii')")
  cy.waitFor('h1,h2')
  basePage.checkPageSnapshot()
})

Then('I can see the {string} button', function(text) {
  basePage.checkButtonExistsByText(text)
})

Then('I can see the {string} link', function(text) {
  basePage.checkHyperlinkExistsByText(text)
})

/**
 * Verify the value copied into clipboard
 * ONLY works in NOT headless mode
 * param itemCopied: String text
 */
Then('I can check the value copied into clipboard is {string}', function(itemCopied) {
  cy.task('getClipboard').should('be.equals', itemCopied)
})

/**
 * Check the value in the clipboard by the alias lastTextCopiedToClipboard
 * ONLY works in NOT headless mode
 */
Then('I can check the element value copied into clipboard', function() {
  cy.task('getClipboard').should('be.equals', this.lastTextCopiedToClipboard)
})

Then('{string} appears in the {string} field', function(value, dataIdLabel) {
  basePage.checkElementExistsByDataIdLabelAndValue(value, dataIdLabel)
})

Then('I can see the {string} text displayed in the color {string}', function(text, color) {
  basePage.checkTextsWithCustomColorExists(text, color)
})

Then('I can see in the tooltip the text {string}', function(text) {
  basePage.checkIfTextsExistsInTooltip(text)
})
