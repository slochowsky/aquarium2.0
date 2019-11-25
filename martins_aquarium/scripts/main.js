/**
 *  Import the initializeDetailButtonEvents function
 *  reference and then invoke it
 */
import FishListComponent from './fish/fishList.js'
import TipListComponent from './tips/TipList.js'
import addMouseOverEventListeners from './highlights.js'
import addTipMouseOverEventListeners from './borders.js'
import initializeDetailButtonEvents from './dialogs.js'


FishListComponent()
TipListComponent()
addMouseOverEventListeners()
addTipMouseOverEventListeners()
initializeDetailButtonEvents()