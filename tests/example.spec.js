// @ts-check
const { test, expect } = require('@playwright/test');
import {ai} from "@zerostep/playwright"

test('AI Test capability', async ({ page }) => {

  //AI needs 2 things #1. page (The object of the page) #2. test (what PlayWright does)
  const aiArgs = {page,test}
  
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
  const discountPrice = await ai("What is the Discount price of Tomato",aiArgs) //Asking AI to find the discount price of Tomato
  // The AI will find the Tomato element, get the discount price and return it
  expect(discountPrice).toEqual("26")
  const price = await ai("What is the Price of Tomato",aiArgs)//Asking AI to find the price of Tomato
  // The AI will find the Tomato element, get the price and return it
  expect(price).toEqual("37")
  const diff = await ai("What is the value difference between price and Discounr price of tomato",aiArgs)
  expect(diff).toEqual("11")

  await page.goto("https://rahulshettyacademy.com/dropdownsPractise/")
  const blinkingText = await ai("Get blinkingText in the page",aiArgs)
  expect(blinkingText).toEqual("Free Access to InterviewQues/ResumeAssistance/Material")
  const firstValue = await ai('Split ${blinkingText} with "/" and give 0th index value',aiArgs)
  console.log(firstValue)
  expect(firstValue).toEqual("Free Access to InterviewQues")

});

