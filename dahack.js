console.info("DAHack activated.")
function DAHelp() {
    console.log("----------------------------------------------------\nDAAnswer() : Show current answer value\nDACAnswer() : Change current answer value\nMade by JuniorSchueller\n----------------------------------------------------")
}
function DAAnswer() {
    if(!answer) {
        console.log("----------------------------------------------------\nYou are not in Dump Adivinha website.\n----------------------------------------------------")
    } else {
        console.log("----------------------------------------------------\nAnswer: " + answer + "\nMade by JuniorSchueller\n----------------------------------------------------")
    }
}
function DACAnswer(newvalue) {
    if(!newvalue) {
        console.log("----------------------------------------------------\nPlease, enter new a value (e.g: DACAnswer(123)).\nMade by JuniorSchueller\n----------------------------------------------------")
    } else {
        answer = newvalue
        console.log("----------------------------------------------------\nAnswer set to: " + newvalue + "\nMade by JuniorSchueller\n----------------------------------------------------")
    }
}
