let input_section = document.querySelector('.input_box')
let button = document.querySelector('button')
let listOfItem = document.querySelector('ul')
let itemIndex = 0;
let itemDone = 0;
let itemNotDone = 0;

const createItem = () => {
    let item = document.createElement('li')
    listOfItem.appendChild(item);
    item.className = 'ourItem' + listOfItem.childElementCount
    item.innerHTML = `<input type="checkbox" class="item_check${listOfItem.childElementCount}" style="float: left; margin: 12px;">` + input_section.value + `<button class="delete_btn${listOfItem.childElementCount}" style="width: 30px; height: 30px; background: transparent; border-radius: 6px;border: none; float: right; color: #fff; font-size: 26px">&times;</button>`
    let checkbox = document.querySelector('.item_check' + listOfItem.childElementCount)
    input_section.value = '';
    document.querySelector(`.delete_btn${listOfItem.childElementCount}`).addEventListener('click', function(){
        item.remove(document.querySelector(`.delete_btn${listOfItem.childElementCount}`));
        item.addEventListener('click', function(){
            listOfItem.removeChild(item);
        })
    })
    checkbox.addEventListener('change', function(){
        if(checkbox.checked){
            itemDone++;
        }else if(!checkbox.checked) {
            itemDone--;
        }
        if(checkbox.unchecked){
            itemNotDone++;
        }else if(!checkbox.unchecked && itemDone>0) {
            itemNotDone--;
        }
        console.log(itemNotDone)
        document.querySelector('.done_value').textContent = itemDone
    })
    
}

button.addEventListener('click', createItem)

document.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        createItem()
    }
})