// parse json
function deserialize(str) {
    return JSON.parse(str)
}
// json stringify object
function serialize(obj) {
    return JSON.stringify(obj)
}
function deleteWords() {
    localStorage.setItem("words", "")
}
// save obj to localStorage
export function save(obj) {
    const oldData = retrieve()
    if (oldData === null) {
        localStorage.setItem("words", serialize(obj))
        return
    } 
    const newData = serialize([...oldData, {...obj}])
    deleteWords()
    localStorage.setItem("words", newData)
}   
// retrieve words as an array of objects from localStorage
export function retrieve() {
    const words = localStorage.getItem("words")
    if (words === "") return []
    return deserialize(words)
}

export function delete_(id) {
    const data = retrieve()
    if (data !== null) {
        // didn't use triple equals, because i don't care about types.
        const newData = data.filter(v => v.id != id)
        localStorage.setItem("words", serialize(newData))
    } else {
        console.warn("cannot delete: localStorage is empty")
    }
}