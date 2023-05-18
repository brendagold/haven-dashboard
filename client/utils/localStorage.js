const called = (value) => {
  console.log(value)
}


const  saveToLocalStorage = (key,valueToStore) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    try {
        // If the passed value is a callback function,
        //  then call it with the existing state.
        
        //window.localStorage.setItem(key, JSON.stringify(valueToStore))
        console.log("Saved to LC")
      } catch (error) {
        console.log(error)
      }
    }
}

export {saveToLocalStorage, called}