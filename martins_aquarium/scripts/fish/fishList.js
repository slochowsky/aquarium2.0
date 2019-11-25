
/**
 *  FishListComponent which renders individual fish objects as HTML
 */

// Import `useFish` from the data provider module
import { useFish } from "./fishDataProvider.js"
import FishComponent from "./fish.js"


const FishListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()
    

    // let allFishHTML = ""

    // for (const fish of fishes) {
    //     const fishHTML = FishComponent(fish)
    //     allFishHTML += fishHTML
    // }

    // Add to the existing HTML in the content element


    contentElement.innerHTML += `
        <section class="fishList">
            ${
                fishes.map(
                    (currentFish) => {
                       return FishComponent(currentFish)
                    }
                ).join("")

                // could also be short handed as
                // fishes.map(fish => FishComponent(fish)).join("")
            }
        </section>
    `
}

export default FishListComponent