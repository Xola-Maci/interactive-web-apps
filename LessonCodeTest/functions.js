const counter = {

    value: 120,
    
    add: function (){
        this.value = this.value + 1
    },

    minus: function () {
    this.value = this.value - 1
    },
}

counter.add()
counter.add()
counter.add()
counter.minus()

console.log(counter.value)