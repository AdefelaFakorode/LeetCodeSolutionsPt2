/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    /*
    panagram is a sentence w/ every alphabet, appearing at least once
    given sentence - all lowercase
    if pan
        return true
            else false


    init a set:
        key: letter
        value: exist

    sentence = sentence.split("")
    iter thru sentence
        if !set.has(letter)
            add to set

    size = set.size

    if size of set !== 24
        return false

    else true

    time comp: O(n)
    space comp: O(1)
    */
    let set = new Set()
    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i]

        if (!set.has(letter)) {
            set.add(letter)
        }
    }
    let size = set.size

    if (size !== 26) {
        return false
    }

    return true
};