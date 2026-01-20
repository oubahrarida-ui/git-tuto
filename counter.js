const decreasebtn = document.getElementById("Decrease")
const resetbtn = document.getElementById("Reset")
const increasebtn = document.getElementById("Increase")
const countlabel = document.getElementById("countlabel")

let count = 0

increasebtn.onclick = function(){
  count--
  countlabel.textContent = count
}

decreasebtn.onclick = function(){
  count++
  countlabel.textContent = count
}

resetbtn.onclick = function(){
  count = 0
  countlabel.textContent = count
}