/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */
import initializeDetailButtonEvents from './dialogs.js'
import addMouseOverEventListeners from './highlights.js'
import addTipMouseOverEventListeners from './borders.js'
import { useFish } from './fishDataProvider.js'

initializeDetailButtonEvents()
addMouseOverEventListeners()
addTipMouseOverEventListeners()
const allOfTheFish = useFish()

console.log("all of the fish:", allOfTheFish)

for (const fish of allOfTheFish) {
    console.log(fish)
}