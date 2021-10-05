

function _getTemplate(placeholder,data){
   return  `
   <div class='select__input' data-type='toggle'>
      <div class='select__placeholder'>${placeholder}</div>
      <i class="fas fa-chevron-down"></i>
   </div>
   <div class='select__dropdown'>
   ${data ? data.map(Select.toHtml).join('') : ''}
   </div>
`
}

export class Select {
   select = document.getElementById('select')
   closing = false
   constructor(options){
      this.placeholder = options.placeholder
      this.data = options.data
      this.#render()
      this.#setap()
   }

   #render(){
   select.classList.add('select')
   select.innerHTML = _getTemplate(this.placeholder,this.data)
   }

   #setap(){
      this.clickHandler = this.clickHandler.bind(this)
      this.select.addEventListener('click',this.clickHandler)
   }

   static toHtml(element){
      return `
         <div class='select__item'>${element.name}</div>
      `
   }

   Open(){
      this.select.querySelector('.fa-chevron-down').style.transform = 'rotate(180deg)'
      this.select.classList.add('open')
   }
   Close(){
      this.select.querySelector('.fa-chevron-down').style.transform = 'rotate(0)'
      this.select.classList.remove('open')
   }
   Toggle(value){
      value ? this.Close() : this.Open()
   }
   clickHandler(e){
      const type = e.target.dataset.type
      if(type === 'toggle'){
         this.Toggle(this.closing)
         this.closing = !this.closing
      }
   }
}