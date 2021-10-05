function _getTemplate(data = [],placeholder,selectedId){
   let placeholderText = placeholder ?? 'Выберете елемент'
   const items = data.map(item =>{
      let cls = ''
      if(item.id === selectedId){
         cls = 'selected'
         placeholderText = item.name
      }
      return `<li class='select__item ${cls}' data-type='item' data-id='${item.id}' '>${item.name}</li>`
   })
   return `
   <div class='select__input' data-type='toggle'>
      <div class='select__placeholder' data-type='toggle' data-value='name'>${placeholderText}</div>
      <i class='fas fa-chevron-down' data-type='toggle'></i>
   </div>
   <ul class='select__dropdown'>
      ${items.join('')}
   </ul>
`
}

export class Select {
   select = document.getElementById('select')
   closing = false
   constructor(options){
      this.selectedId = options.selectedId
      this.placeholder = options.placeholder
      this.data = options.data
      this.#render()
      this.#setap()
   }
   #render(){
   select.classList.add('select')
   select.innerHTML = _getTemplate(this.data,this.placeholder,this.selectedId)
   }

   #setap(){
      this.clickHandler = this.clickHandler.bind(this)
      this.select.addEventListener('click',this.clickHandler)
      this.value = this.select.querySelector('[data-value="name"]')
   }
   get isOpen(){
      return this.select.classList.contains('open')
   }
   get current(){
      return this.data.find(item => item.id === this.selectedId)
   }
   Open(){
      this.select.querySelector('.fa-chevron-down').style.transform = 'rotate(180deg)'
      this.select.classList.add('open')
   }
   Close(){
      this.select.querySelector('.fa-chevron-down').style.transform = 'rotate(0)'
      this.select.classList.remove('open')
   }
   Destroy(){
      this.select.removeEventListener('click',this.clickHandler)
      this.select.parentNode.querySelector('.select').remove()
   }
   Toggle(){
      this.isOpen ? this.Close() : this.Open()
   }
   Select(id){
      this.selectedId = +id
      this.value.textContent = this.current.name
      this.select.querySelectorAll('[data-type="item"]').forEach(item => item.classList.remove('selected'))
      this.select.querySelector(`[data-id="${id}"]`).classList.add('selected')
      this.Close()
   }
   clickHandler(e){
      const type = e.target.dataset.type
      if(type === 'toggle'){
         this.Toggle()
      } else if(type === 'item'){
         const id = e.target.dataset.id
         this.Select(id)
      }
   }
}