import { useTip } from "./TipDataProvider.js"
/**
 *  TipListComponent which renders individual fish objects as HTML
 */

// Import `useTip` from the data provider module
import TipComponent from "./Tip.js"


const TipListComponent = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".tip__list")
    const tips = useTip()

    // let allTipHTML = ""

    // for (const tip of tips) {
    //     const tipHTML = TipComponent(tip)
    //     allTipHTML += tipHTML
    // }

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <section class="tipList">
            ${
                tips.map(
                    (tip) => {
                        return TipComponent(tip)
                    }
                ).join("")

                // could also be short handed as
                // tips.map(tip => TipComponent(tip)).join("")
            }
        </section>
    `
}

export default TipListComponent