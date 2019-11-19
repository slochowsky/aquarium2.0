const addTipMouseOverEventListeners = () => {
    const myTips = document.querySelectorAll(".tip")

for (const tip of myTips) {
    tip.addEventListener(
        "mouseover",
        (theMouseOverEvent) => {
            tip.classList.add("tiphighlight")
        }
    )


    tip.addEventListener(
        "mouseout",
        (theMouseOutEvent) => {
            tip.classList.remove("tiphighlight")
    })
    }

}

export default addTipMouseOverEventListeners