


const  saveToLocalStorage = (key,valueToStore) => {
    if (typeof window !== "undefined") {
    try {
        // If the passed value is a callback function,
        //  then call it with the existing state.
        
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
       
      } catch (error) {
        console.log(error)
      }
    }
}

export {saveToLocalStorage}