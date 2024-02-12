try {
    let counter = prompt("sonni kiriting");
    let i = 0;
  setInterval(() => {
    if (counter != i) {
        counter--
    }
    console.log(counter);
  }, 1000);
} catch (error) {
    console.log("hatolik");
    
}
